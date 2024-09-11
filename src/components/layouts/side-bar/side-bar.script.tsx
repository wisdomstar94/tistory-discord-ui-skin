import { getRenderedElementSize } from "@/components/functions/get-rendered-element-size";

function handleBlogHomeButtonMouseOver(target: HTMLElement) {
  console.log("@handleBlogHomeButtonMouseOver.target", { target });

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

  getRenderedElementSize({
    targetElement: popoverMessageContainer,
    renderContainerClassName: "w-screen h-screen absolute top-0 left-0",
  });
}

(window as any).handleBlogHomeButtonMouseOver = handleBlogHomeButtonMouseOver;
