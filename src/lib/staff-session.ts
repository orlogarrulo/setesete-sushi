import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { getCookie, getRequest, setCookie } from "@tanstack/react-start/server";

const COOKIE = "ss_casa";
const MAX_AGE = 60 * 60 * 12;
const FAIL_LIMIT = 8;
const LOCK_MS = 15 * 60 * 1000;

function envUser() {
  const v = process.env.STAFF_USER?.trim();
  return v && v.length >= 3 ? v : "setesete";
}

function envPass() {
  const v = process.env.STAFF_PASSWORD?.trim();
  return v && v.length >= 8 ? v : "CasaTalatona#77";
}

function envSecret() {
  const v = process.env.STAFF_SESSION_SECRET?.trim();
  return v && v.length >= 16 ? v : "setesete-casa-sessao-preview";
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) {
    timingSafeEqual(left, left);
    return false;
  }
  return timingSafeEqual(left, right);
}

function sign(payload: string) {
  return createHmac("sha256", envSecret()).update(payload).digest("hex");
}

function clientKey() {
  try {
    const req = getRequest();
    const fwd = req.headers.get("x-forwarded-for") ?? "";
    return fwd.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "local";
  } catch {
    return "local";
  }
}

const fails = globalThis as typeof globalThis & {
  __staffFails__?: Map<string, { n: number; lockUntil: number }>;
};

function bucket() {
  fails.__staffFails__ ??= new Map();
  return fails.__staffFails__;
}

function locked(key: string) {
  const row = bucket().get(key);
  if (!row) return false;
  if (row.lockUntil && row.lockUntil > Date.now()) return true;
  if (row.lockUntil && row.lockUntil <= Date.now()) {
    bucket().delete(key);
    return false;
  }
  return false;
}

function recordFail(key: string) {
  const row = bucket().get(key) ?? { n: 0, lockUntil: 0 };
  row.n += 1;
  if (row.n >= FAIL_LIMIT) row.lockUntil = Date.now() + LOCK_MS;
  bucket().set(key, row);
}

function clearFail(key: string) {
  bucket().delete(key);
}

export function issueStaffCookie() {
  const exp = Date.now() + MAX_AGE * 1000;
  const nonce = randomBytes(12).toString("hex");
  const payload = `${exp}.${nonce}`;
  const token = `${payload}.${sign(payload)}`;
  const secure = (() => {
    try {
      const url = getRequest().url;
      return url.startsWith("https:");
    } catch {
      return false;
    }
  })();
  setCookie(COOKIE, token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure,
    maxAge: MAX_AGE,
  });
}

export function clearStaffCookie() {
  setCookie(COOKIE, "", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 0,
  });
}

export function readStaffSession() {
  const token = getCookie(COOKIE);
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [exp, nonce, mac] = parts;
  if (!exp || !nonce || !mac) return false;
  const payload = `${exp}.${nonce}`;
  if (!safeEqual(mac, sign(payload))) return false;
  if (Number(exp) < Date.now()) return false;
  return true;
}

export function requireStaff() {
  if (!readStaffSession()) {
    throw new Error("Sessão da casa expirada. Entra outra vez.");
  }
}

export function attemptStaffLogin(user: string, password: string) {
  const key = clientKey();
  if (locked(key)) {
    return { ok: false as const, locked: true };
  }
  const userOk = safeEqual(user.trim().toLowerCase(), envUser().toLowerCase());
  const passOk = safeEqual(password, envPass());
  if (!userOk || !passOk) {
    recordFail(key);
    return { ok: false as const, locked: locked(key) };
  }
  clearFail(key);
  issueStaffCookie();
  return { ok: true as const, locked: false };
}
