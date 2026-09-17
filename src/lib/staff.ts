const KEY = "setesete-ops-gate";

export function isStaffUiAuthed() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(KEY) === "1";
}

export function markStaffUiAuthed() {
  sessionStorage.setItem(KEY, "1");
}

export function clearStaffUi() {
  sessionStorage.removeItem(KEY);
  sessionStorage.removeItem("setesete-ops-pin");
}
