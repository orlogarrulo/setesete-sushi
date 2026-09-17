//#region node_modules/.nitro/vite/services/ssr/assets/staff-DrvdntMU.js
var KEY = "setesete-ops-pin";
function readStaffPin() {
	if (typeof window === "undefined") return "";
	return sessionStorage.getItem(KEY) ?? "";
}
function writeStaffPin(pin) {
	sessionStorage.setItem(KEY, pin);
}
function clearStaffPin() {
	sessionStorage.removeItem(KEY);
}
//#endregion
export { readStaffPin as n, writeStaffPin as r, clearStaffPin as t };
