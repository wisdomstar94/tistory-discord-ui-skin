import { getCategoryPathnameInfo } from "@/common/functions";
import { getInfoByScroll, unwrap } from "@wisdomstar94/vanilla-js-util";

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

  // const applyResult = applyOverlayScroll({
  //   target: sideSmallBarScrollArea,
  //   width: 14,
  //   padding: 4,
  //   scrollEndedHideDelay: 100,
  //   scrollBarClassName: "bg-murky-color-1 rounded-full",
  // });

  unwrap(document.querySelector<HTMLElement>(`#aside-side-bar`), "sidebar 요소가 없습니다.").style.height = "100vh";
});

function checkActiveCategory() {
  const ul = unwrap(document.querySelector<HTMLElement>("ul.tt_category"), "ul.tt_category 요소가 없습니다.");

  const { isCategoryPath, categoryType, categoryName, subCategoryName } = getCategoryPathnameInfo();
  if (!isCategoryPath) return;

  if (categoryType === "all") {
    const linkTit = unwrap(ul.querySelector<HTMLElement>("a.link_tit"), "a.link_tit 요소가 없습니다.");
    linkTit.classList.add("active");
  } else if (categoryType === "category") {
    const linkItems = unwrap(ul.querySelectorAll<HTMLElement>("a.link_item"), "a.link_item 요소가 없습니다.");
    linkItems.forEach((item) => {
      const copyItem = item.cloneNode(true) as HTMLElement;
      copyItem.querySelector<HTMLElement>(".c_cnt")?.remove();
      const renderedCategoryName = copyItem.textContent?.trim() ?? "";

      if (renderedCategoryName.length >= 27) {
        if (categoryName?.startsWith(renderedCategoryName.slice(0, renderedCategoryName.length - 2))) {
          item.classList.add("active");
        }
      } else {
        if (renderedCategoryName === categoryName) {
          item.classList.add("active");
        }
      }
    });
  } else if (categoryType === "sub-categpry") {
    const linkItems = unwrap(ul.querySelectorAll<HTMLElement>("a.link_item"), "a.link_item 요소가 없습니다.");
    linkItems.forEach((item) => {
      // const html = item.innerHTML.replace("\n", "");
      // const htmlSplit = html.split('<span class="').map((x) => x.trim());
      const copyItem = item.cloneNode(true) as HTMLElement;
      copyItem.querySelector<HTMLElement>(".c_cnt")?.remove();
      const renderedParentCategoryName = copyItem.textContent?.trim() ?? "";

      const subLinkItems = unwrap(item.parentElement?.querySelectorAll<HTMLElement>("a.link_sub_item"), "a.link_sub_item 요소가 없습니다.");
      subLinkItems.forEach((item2) => {
        // const html = item2.innerHTML.replace("\n", "");
        // const htmlSplit = html.split('<span class="').map((x) => x.trim());
        const copyItem2 = item2.cloneNode(true) as HTMLElement;
        copyItem2.querySelector<HTMLElement>(".c_cnt")?.remove();
        const renderedChildCategoryName = copyItem2.textContent?.trim() ?? "";
        if (renderedParentCategoryName.length >= 27) {
          if (categoryName?.startsWith(renderedParentCategoryName.slice(0, renderedParentCategoryName.length - 2))) {
            if (renderedChildCategoryName.length >= 27) {
              if (subCategoryName?.startsWith(renderedChildCategoryName.slice(0, renderedChildCategoryName.length - 2))) {
                item2.classList.add("active");
              }
            } else {
              if (renderedChildCategoryName === subCategoryName) {
                item2.classList.add("active");
              }
            }
          }
        } else {
          if (renderedParentCategoryName === categoryName) {
            if (renderedChildCategoryName.length >= 27) {
              if (subCategoryName?.startsWith(renderedChildCategoryName.slice(0, renderedChildCategoryName.length - 2))) {
                item2.classList.add("active");
              }
            } else {
              if (renderedChildCategoryName === subCategoryName) {
                item2.classList.add("active");
              }
            }
          }
        }
      });
    });
  }
}

(window as any).checkActiveCategory = checkActiveCategory;

function mobileSideBarBackgroundClick() {
  document.body.classList.add("side-bar-close");
  document.body.classList.remove("side-bar-open");
}

(window as any).mobileSideBarBackgroundClick = mobileSideBarBackgroundClick;

function sideBarCloseButtonClick() {
  document.body.classList.add("side-bar-close");
  document.body.classList.remove("side-bar-open");
}

(window as any).sideBarCloseButtonClick = sideBarCloseButtonClick;
