import copy from "copy-to-clipboard";

window.addEventListener("load", () => {
  const codes = document.querySelectorAll<HTMLElement>("#article-description pre code");
  // console.log("@codes", codes);
  codes.forEach((code) => {
    // console.log(code.classList.value);
    let checkedTimeout: NodeJS.Timeout | undefined;

    code.addEventListener("click", (event) => {
      console.log("event", event);

      if (isContain(code, event)) {
        code.classList.add("my-checked");

        clearTimeout(checkedTimeout);
        checkedTimeout = setTimeout(() => {
          code.classList.remove("my-checked");
        }, 1300);

        console.log("copy...");
        copy(code.textContent ?? "");
      }
    });

    code.addEventListener("mousemove", (event) => {
      if (isContain(code, event)) {
        code.classList.add("my-active");
      } else {
        code.classList.remove("my-active");
      }
    });
  });
});

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
