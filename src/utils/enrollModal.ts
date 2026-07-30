export function openEnrollModal() {
  window.dispatchEvent(new CustomEvent('open-enroll-modal'));
}
