import { a as getRequest, i as getCookie, o as setCookie$1 } from "./ssr.mjs";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/staff-session-Bdj_mhoq.js
var COOKIE = "ss_casa";
var MAX_AGE = 43200;
var FAIL_LIMIT = 8;
var LOCK_MS = 9e5;
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
function safeEqual(a, b) {
	const left = Buffer.from(a);
	const right = Buffer.from(b);
	if (left.length !== right.length) {
		timingSafeEqual(left, left);
		return false;
	}
	return timingSafeEqual(left, right);
}
function sign(payload) {
	return createHmac("sha256", envSecret()).update(payload).digest("hex");
}
function clientKey() {
	try {
		const req = getRequest();
		return (req.headers.get("x-forwarded-for") ?? "").split(",")[0]?.trim() || req.headers.get("x-real-ip") || "local";
	} catch {
		return "local";
	}
}
var fails = globalThis;
function bucket() {
	fails.__staffFails__ ??= /* @__PURE__ */ new Map();
	return fails.__staffFails__;
}
function locked(key) {
	const row = bucket().get(key);
	if (!row) return false;
	if (row.lockUntil && row.lockUntil > Date.now()) return true;
	if (row.lockUntil && row.lockUntil <= Date.now()) {
		bucket().delete(key);
		return false;
	}
	return false;
}
function recordFail(key) {
	const row = bucket().get(key) ?? {
		n: 0,
		lockUntil: 0
	};
	row.n += 1;
	if (row.n >= FAIL_LIMIT) row.lockUntil = Date.now() + LOCK_MS;
	bucket().set(key, row);
}
function clearFail(key) {
	bucket().delete(key);
}
function issueStaffCookie() {
	const payload = `${Date.now() + MAX_AGE * 1e3}.${randomBytes(12).toString("hex")}`;
	const token = `${payload}.${sign(payload)}`;
	const secure = (() => {
		try {
			return getRequest().url.startsWith("https:");
		} catch {
			return false;
		}
	})();
	setCookie$1(COOKIE, token, {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		secure,
		maxAge: MAX_AGE
	});
}
function clearStaffCookie() {
	setCookie$1(COOKIE, "", {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		maxAge: 0
	});
}
function readStaffSession() {
	const token = getCookie(COOKIE);
	if (!token) return false;
	const parts = token.split(".");
	if (parts.length !== 3) return false;
	const [exp, nonce, mac] = parts;
	if (!exp || !nonce || !mac) return false;
	if (!safeEqual(mac, sign(`${exp}.${nonce}`))) return false;
	if (Number(exp) < Date.now()) return false;
	return true;
}
function requireStaff() {
	if (!readStaffSession()) throw new Error("Sessão da casa expirada. Entra outra vez.");
}
function attemptStaffLogin(user, password) {
	const key = clientKey();
	if (locked(key)) return {
		ok: false,
		locked: true
	};
	const userOk = safeEqual(user.trim().toLowerCase(), envUser().toLowerCase());
	const passOk = safeEqual(password, envPass());
	if (!userOk || !passOk) {
		recordFail(key);
		return {
			ok: false,
			locked: locked(key)
		};
	}
	clearFail(key);
	issueStaffCookie();
	return {
		ok: true,
		locked: false
	};
}
//#endregion
export { attemptStaffLogin, clearStaffCookie, readStaffSession, requireStaff };
