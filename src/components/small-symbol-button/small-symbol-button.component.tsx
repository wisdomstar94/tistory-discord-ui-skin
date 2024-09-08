import { cn } from "@/utils/cn";
import { ISmallSymbolButton } from "./small-symbol-button.type";
import { v4 } from "uuid";
import { Script } from "@/components/script/script.component";

export function SmallSymbolButton(props: ISmallSymbolButton.Props) {
  const {
    id,
    href,
    className,
    aClassName,
    icon,
    hoverTitle,
    isActive = false,
    isRoundedActive = false,
    isHoverMinimumActive = false,
  } = props;

  const popoverId = `id-${v4()}`;

  return (
    <>
      <div
        className={cn(
          "group w-full flex fle-wrap relative box-border",
          className
        )}
      >
        <div className="w-full px-3 py-1 box-border relative">
          <a
            href={href}
            id={id}
            className={cn(
              "group/side-item-a",
              "cursor-pointer",
              "w-full block aspect-square relative transition-all",
              "bg-white/5 hover:bg-primary-tistory group-[.menu-active]:bg-primary-tistory",
              isRoundedActive && "rounded-[12px]",
              !isRoundedActive &&
                "rounded-[30px] hover:rounded-[12px] group-[.menu-active]:rounded-[12px]",
              aClassName
            )}
          >
            <div className="w-full h-full relative flex flex-wrap items-center justify-center rounded-[12px] overflow-hidden">
              {icon}
            </div>

            <div className="h-full flex items-center justify-start absolute left-full-append-6 top-0">
              <div
                id={popoverId}
                className={cn(
                  "animate-x-fade-out group-hover/side-item-a:animate-x-fade-in",
                  // "side-item-a:animate-x-fade-in",
                  "!animate-duration-0ms"
                )}
              >
                <div
                  className={cn(
                    "whitespace-nowrap",
                    "text-white/90",
                    "inline-flex relative"
                    // "hidden group-hover/side-item-a:inline-flex"
                  )}
                >
                  <div
                    className={cn(
                      "h-0 absolute top-[50%] right-[100%] flex items-center content-center justify-end"
                    )}
                  >
                    <div
                      className="w-[8px] h-[12px] bg-primary"
                      style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
                    />
                  </div>
                  <div
                    className={cn(
                      "px-6 py-2.5 text-xs rounded-lg relative",
                      "bg-primary"
                    )}
                  >
                    {hoverTitle}
                  </div>
                </div>
              </div>
            </div>

            <div className="h-0 absolute top-[50%] -left-3 flex flex-wrap items-center content-center justify-start">
              {isActive && (
                <div className="w-[4px] h-[36px] rounded-tr-md rounded-br-md bg-white/80 relative" />
              )}

              {!isActive && isHoverMinimumActive && (
                <div
                  className={cn(
                    "rounded-tr-md rounded-br-md bg-white/60 relative",
                    "transition-all !duration-300",
                    "-ml-1 group-hover/side-item-a:ml-0",
                    "w-0 group-hover/side-item-a:w-1",
                    "h-0 group-hover/side-item-a:h-5"
                  )}
                />
              )}
            </div>
          </a>
        </div>
      </div>
      <Script
        html={`
          window.addEventListener('load', () => {
            const popover = document.querySelector('#${popoverId}');
            if (popover === null) return;
            setTimeout(() => {
              popover.classList.remove('!animate-duration-0ms');
            }, 300);
          });
        `}
      />
    </>
  );
}
