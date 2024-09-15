import { unwrap } from "@wisdomstar94/vanilla-js-util";

function checkTopBarTitle() {
  const topBarTitleArea = unwrap(document.querySelector<HTMLElement>(".top-bar-title-area"), ".top-bar-title-area 요소가 없습니다.");
}

(window as any).checkTopBarTitle = checkTopBarTitle;

function sideBarToggleButtonClick() {
  if (document.body.classList.contains("side-bar-open")) {
    document.body.classList.remove("side-bar-open");
    document.body.classList.add("side-bar-close");
  } else {
    document.body.classList.remove("side-bar-close");
    document.body.classList.add("side-bar-open");
  }
}

(window as any).sideBarToggleButtonClick = sideBarToggleButtonClick;
