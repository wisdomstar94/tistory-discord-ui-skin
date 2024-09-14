import { applyOverlayScroll, getInfoByScroll } from "@wisdomstar94/vanilla-js-util";

window.addEventListener("load", () => {
  const sideSmallBarScrollArea = document.querySelector<HTMLElement>(".side-big-bar-scroll-area");
  if (sideSmallBarScrollArea === null) return;

  sideSmallBarScrollArea.addEventListener("scroll", () => {
    const li = document.querySelector<HTMLElement>(".side-blog-profile-item");
    if (li === null) return;

    const info = getInfoByScroll(li);

    const blogTitleBarFloatContainer = document.querySelector<HTMLElement>(".blog-title-bar-float-container");
    if (blogTitleBarFloatContainer === null) return;

    const movableBlogTitleBar = document.querySelector<HTMLElement>(".movable-blog-title-bar");
    if (movableBlogTitleBar === null) return;

    const movableProfileAreaOverlayBg = document.querySelector<HTMLElement>(".movable-profile-area-overlay-bg");
    if (movableProfileAreaOverlayBg === null) return;

    const bg = blogTitleBarFloatContainer.querySelector<HTMLElement>(".background");
    if (bg === null) return;

    const backgroundBottomBorder = blogTitleBarFloatContainer.querySelector<HTMLElement>(".background-bottom-border");
    if (backgroundBottomBorder === null) return;

    const profileImage = document.querySelector<HTMLElement>(".side-big-bar-scroll-area .profile-image");
    if (profileImage === null) return;

    if (info.isFullVisible === false && info.firstTopLastBottomHideFactor >= 0 && info.firstTopLastBottomHideFactor < 1) {
      blogTitleBarFloatContainer.style.display = info.firstTopLastBottomHideFactor >= 0 ? "block" : "none";
      movableBlogTitleBar.style.opacity = info.firstTopLastBottomHideFactor >= 0 ? "0" : "1";

      let opacity = info.firstTopLastBottomHideFactor * 1.4;
      opacity = opacity > 1 ? 1 : opacity;

      if (info.firstTopLastBottomHideFactor >= 0.7) {
        bg.style.opacity = "1";
      } else {
        bg.style.opacity = "0";
      }

      if (info.firstTopLastBottomHideFactor >= 0.7) {
        backgroundBottomBorder.style.opacity = "1";
      } else {
        backgroundBottomBorder.style.opacity = "0";
      }

      profileImage.style.transform = `scale(${1 + info.firstTopLastBottomHideFactor / 1.5})`;

      movableProfileAreaOverlayBg.style.opacity = opacity.toString();
    }

    if (info.isFullVisible === true) {
      movableProfileAreaOverlayBg.style.opacity = "0";
      profileImage.style.transform = `scale(1)`;
    }
  });

  const applyResult = applyOverlayScroll({
    target: sideSmallBarScrollArea,
    width: 14,
    padding: 4,
    scrollEndedHideDelay: 100,
    scrollBarClassName: "bg-primary rounded-full",
  });
});
