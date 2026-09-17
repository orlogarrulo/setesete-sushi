const KEY = "setesete-ops-pin";

export function readStaffPin() {
  if (typeof window === "undefined") return "";
  return sessionStorage.getItem(KEY) ?? "";
}

export function writeStaffPin(pin: string) {
  sessionStorage.setItem(KEY, pin);
}

export function clearStaffPin() {
  sessionStorage.removeItem(KEY);
}
