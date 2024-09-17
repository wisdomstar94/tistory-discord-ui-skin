import { applyOverlayScroll, getTimeAgoInfo } from "@wisdomstar94/vanilla-js-util";

window.addEventListener("load", () => {
  // ...
  const applyResult = applyOverlayScroll({
    target: document.body,
    width: 14,
    padding: 4,
    scrollEndedHideDelay: 100,
    scrollBarClassName: "bg-murky-color-6 rounded-full",
    isRoot: true,
  });
});

(window as any).getTimeAgoInfo = getTimeAgoInfo;
