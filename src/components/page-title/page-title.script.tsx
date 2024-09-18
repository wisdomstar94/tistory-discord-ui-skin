import { getCategoryPathnameInfo, getPathname } from "@/common/functions";

function checkPageTitle() {
  const pathname = getPathname();

  if (document.body.id === "tt-body-category") {
    const { isCategoryPath, categoryType, categoryName, subCategoryName } = getCategoryPathnameInfo();
    if (isCategoryPath) {
      let pageTitle = "";
      if (categoryType === "all") {
        pageTitle = "분류 전체보기";
      } else if (categoryType === "category") {
        pageTitle = categoryName ?? "";
      } else {
        pageTitle = (categoryName ?? "") + " — " + (subCategoryName ?? "");
      }
      const span = document.querySelector<HTMLElement>('[data-title="category-title"] > .only-title-text');
      if (span !== null) {
        span.textContent = pageTitle;
      }
    }
  }

  if (pathname.startsWith("/notice")) {
    document.body.classList.add("notice-index-page");
  }
}

(window as any).checkPageTitle = checkPageTitle;
