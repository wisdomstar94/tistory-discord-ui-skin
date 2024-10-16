export function isIframe() {
  return parent && parent !== window;
}
