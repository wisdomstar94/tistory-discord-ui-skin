import { applyOverlayScroll } from "@wisdomstar94/vanilla-js-util";

window.addEventListener("load", () => {
  const sideSmallBarScrollArea = document.querySelector<HTMLElement>(
    ".side-big-bar-scroll-area"
  );
  if (sideSmallBarScrollArea === null) return;

  const applyResult = applyOverlayScroll({
    target: sideSmallBarScrollArea,
    width: 14,
    padding: 4,
    scrollEndedHideDelay: 100,
    scrollBarClassName: "bg-primary rounded-full",
  });
});
