import { unwrap } from "@wisdomstar94/vanilla-js-util";
import copy from "copy-to-clipboard";

window.addEventListener("load", () => {
  // 코드 블럭 관련 처리
  initialCodeBlock();
  // 다른 카테고리 글 관련 처리
  initialAnotherCategoryPosts();
});

function initialAnotherCategoryPosts() {
  const anotherCategory = document.querySelector<HTMLElement>(`#tt-body-page .another_category`);
  if (anotherCategory === null) return;

  const trs = anotherCategory.querySelectorAll<HTMLElement>("table tbody tr");
  if (trs.length === 0) return;

  trs.forEach((tr) => {
    tr.addEventListener("click", () => {
      const a = unwrap(tr.querySelector<HTMLElement>("a[href]"), "a[href] 요소가 없습니다.");
      const href = unwrap(a.getAttribute("href"), "href 가 없습니다.");
      location.href = href;
    });
  });
}

function initialCodeBlock() {
  const codes = document.querySelectorAll<HTMLElement>("#article-description pre code");
  // console.log("@codes", codes);
  codes.forEach((code) => {
    if (code.parentElement?.nodeName.toLowerCase() !== "pre") {
      return;
    }

    // console.log(code.classList.value);
    let checkedTimeout: NodeJS.Timeout | undefined;

    const pre = code.parentElement;
    if (pre === null) {
      return;
    }

    pre.addEventListener("click", (event) => {
      // console.log("event", event);

      if (isContain(code, event)) {
        pre.classList.add("my-checked");

        clearTimeout(checkedTimeout);
        checkedTimeout = setTimeout(() => {
          pre.classList.remove("my-checked");
        }, 1300);

        // console.log("copy...");
        copy(code.textContent ?? "");
      }
    });

    pre.addEventListener("mousemove", (event) => {
      if (isContain(code, event)) {
        pre.classList.add("my-active");
      } else {
        pre.classList.remove("my-active");
      }
    });
  });
}

function isContain(code: HTMLElement, event: MouseEvent) {
  const padding = 16;
  const size = 24;

  const rect = code.getBoundingClientRect();
  const { width } = rect;

  const startX = width - (size + padding);
  const endX = width - padding;

  const startY = padding;
  const endY = startY + size;

  const isContainX = event.offsetX >= startX && event.offsetX <= endX; // or layerX;
  const isContainY = event.offsetY >= startY && event.offsetY <= endY; // or layerY;
  const isContain = isContainX && isContainY;

  return isContain;
}
