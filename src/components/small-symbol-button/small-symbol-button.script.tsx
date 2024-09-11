import { getRenderedElementSize } from "@/components/functions/get-rendered-element-size";

function handleSideItemAButtonMouseOver(target: HTMLElement) {
  // console.log("@handleSideItemAButtonMouseOver.target", { target });

  const popoverMessageContainer =
    target.parentElement?.querySelector<HTMLElement>(
      ".popover-message-container"
    );

  if (
    popoverMessageContainer === null ||
    popoverMessageContainer === undefined
  ) {
    console.error("popoverMessageContainer 가 null 이거나 undefined 입니다.");
    return;
  }

  const popoverMessageContainerParentElement =
    popoverMessageContainer.parentElement;
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
