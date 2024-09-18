import { cn } from "@/utils/cn";
import { IModalTemplate } from "./modal-template.type";

export function ModalTemplate(props: IModalTemplate.Props) {
  const { id, title, description, cancelButtonText = "아니오", cancelButtonOnClick, okButtonText = "예", okButtonOnClick } = props;

  return (
    <>
      <div
        id={id}
        className={cn(
          "fixed top-0 left-0 z-10 flex items-center justify-center",
          "w-0 h-0 overflow-hidden opacity-0",
          "modal-open:animate-fade-in-opacity modal-close:animate-fade-out-opacity"
        )}
        data-title="modal-container"
      >
        {/* bg */}
        <div className="w-full h-full absolute top-0 left-0 bg-black/70" tt-onclick={`modalBgClick('${id}');`} data-title="modal-bg" />

        {/* modal */}
        <div
          className={cn("w-full max-w-[460px] max-h-[500px] flex flex-wrap gap-4 mx-4 my-4 relative", "bg-murky-color-7", "p-6 lg:p-8")}
          data-title="modal"
        >
          <div className={cn("w-full flex items-center justify-center relative", "text-lg font-bold")}>{title}</div>
          <div className={cn("w-full flex items-center justify-center relative text-center", "text-sm", "break-keep")}>{description}</div>
          <div className="w-full flex gap-2 relative items-center">
            <div className="flex-1 relative">
              <button
                className={cn(
                  "inline-flex w-full px-4 py-2 bg-murky-color-1 text-light-color-3/80 items-center justify-center cursor-pointer"
                )}
                tt-onclick={`modalCancelButtonClick('${id}'); ${cancelButtonOnClick ?? ""}`}
              >
                {cancelButtonText}
              </button>
            </div>
            <div className="flex-1 relative">
              <button
                className={cn(
                  "inline-flex w-full px-4 py-2 bg-light-color-1 text-light-color-3/80 items-center justify-center cursor-pointer"
                )}
                tt-onclick={`${okButtonOnClick}`}
              >
                {okButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
