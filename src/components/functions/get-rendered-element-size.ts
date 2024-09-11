export type RenderdSize = {
  width: number;
  height: number;
};

export type GetRenderedElementSizeParams = {
  targetElement: HTMLElement;
  renderContainerClassName: string;
  onSuccess?: (size: RenderdSize) => void;
  onError?: (error: unknown) => void;
};

export function getRenderedElementSize(params: GetRenderedElementSizeParams) {
  const { targetElement, renderContainerClassName, onSuccess, onError } =
    params;

  const tempWrapperDiv = document.createElement("div");
  tempWrapperDiv.style.width = "1px";
  tempWrapperDiv.style.height = "1px";
  tempWrapperDiv.style.overflow = "hidden";
  tempWrapperDiv.style.position = "fixed";
  tempWrapperDiv.style.top = "-2400px";
  tempWrapperDiv.style.left = "-2400px";
  tempWrapperDiv.style.opacity = "0";
  tempWrapperDiv.style.visibility = "hidden";

  document.body.appendChild(tempWrapperDiv);

  const tempDiv = document.createElement("div");
  tempWrapperDiv.appendChild(tempDiv);

  const observer = new MutationObserver(() => {
    if (!(targetElementClone instanceof HTMLElement)) return;
    const rect = targetElementClone.getBoundingClientRect();

    if (typeof onSuccess === "function") {
      onSuccess({ width: rect.width, height: rect.height });
    }

    observer.disconnect();
    tempDiv.remove();
    tempWrapperDiv.remove();
  });

  observer.observe(tempDiv, { subtree: true, childList: true });

  /////////////////////////////////////////////

  const classNames = renderContainerClassName.split(" ");
  for (const className of classNames) {
    if (className.trim() === "") continue;
    tempDiv.classList.add(className);
  }

  const targetElementClone = targetElement.cloneNode(true);
  tempDiv.appendChild(targetElementClone);
}
