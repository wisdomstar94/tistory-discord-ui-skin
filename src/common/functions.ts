export function getPathname() {
  return decodeURIComponent(location.pathname.trim());
}

export function getCategoryPathnameInfo() {
  const pathname = getPathname();
  let isCategoryPath = pathname.startsWith("/category");

  let categoryType: "all" | "category" | "sub-categpry" | undefined;

  let categoryName: string | undefined;
  let subCategoryName: string | undefined;

  if (isCategoryPath) {
    const urlSplit = pathname.split("/"); // ex) ['', 'category', '1', '2'];
    if (urlSplit.length === 4) {
      categoryType = "sub-categpry";
      categoryName = urlSplit[urlSplit.length - 2];
      subCategoryName = urlSplit[urlSplit.length - 1];
    } else if (urlSplit.length === 3) {
      categoryType = "category";
      categoryName = urlSplit[urlSplit.length - 1];
    } else if (urlSplit.length === 2) {
      categoryType = "all";
    }
  }

  return {
    isCategoryPath,
    categoryType,
    categoryName,
    subCategoryName,
  };
}

export function isAdmin() {
  if (window.tiara !== undefined) {
    if (window.tiara.customProps?.role === "owner") {
      return true;
    }
  }
  return false;
}
