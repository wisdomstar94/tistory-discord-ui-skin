import { getRenderedElementSize } from "@wisdomstar94/vanilla-js-util";
import { setPositionTargetElement } from "@wisdomstar94/vanilla-js-util";

window.addEventListener("load", () => {
  settingHoverElement();
});

window.addEventListener("scroll", () => {
  settingHoverElement();
});

function settingHoverElement() {
  const elements = document.querySelectorAll<HTMLElement>(".small-symbol-button-popover-container");
  if (elements.length === 0) return;

  elements.forEach((element) => {
    const toElement = element.parentElement;
    if (toElement === null) return;
    setPositionTargetElement({
      to: toElement,
      from: element,
      margin: 16,
    });
  });
}

function handleSideItemAButtonMouseOver(target: HTMLElement) {
  // console.log("@handleSideItemAButtonMouseOver.target", { target });
  settingHoverElement();

  const popoverMessageContainer = target.parentElement?.querySelector<HTMLElement>(".popover-message-container");

  if (popoverMessageContainer === null || popoverMessageContainer === undefined) {
    console.error("popoverMessageContainer 가 null 이거나 undefined 입니다.");
    return;
  }

  const popoverMessageContainerParentElement = popoverMessageContainer.parentElement;
  if (popoverMessageContainerParentElement === null) {
    console.error("popoverMessageContainerParentElement 가 null 입니다.");
    return;
  }

  getRenderedElementSize({
    targetElement: popoverMessageContainer,
    renderContainerClassName: "w-screen h-screen absolute top-0 left-0",
    onSuccess(size) {
      // console.log("@size", size);

      if (size.width >= 199) {
        popoverMessageContainerParentElement.classList.add("fill-maxed");
      } else {
        popoverMessageContainerParentElement.classList.remove("fill-maxed");
      }
    },
  });
}

(window as any).handleSideItemAButtonMouseOver = handleSideItemAButtonMouseOver;
