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
    hoverTitleIcon,
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
              "other/side-item-a",
              "group/side-item-a",
              "cursor-pointer",
              "w-full block aspect-square relative transition-all",
              "bg-white/5 hover:bg-primary-tistory group-[.menu-active]:bg-primary-tistory",
              isRoundedActive && "rounded-[12px]",
              !isRoundedActive &&
                "rounded-[30px] hover:rounded-[12px] group-[.menu-active]:rounded-[12px]",
              aClassName
            )}
            tt-onmouseover="handleSideItemAButtonMouseOver(this)"
          >
            <div className="w-full h-full relative flex flex-wrap items-center justify-center rounded-[12px] overflow-hidden">
              {icon}
            </div>
          </a>

          <div className="h-0 absolute top-[50%] left-0 flex flex-wrap items-center content-center justify-start">
            {isActive && (
              <div className="w-[4px] h-[36px] rounded-tr-md rounded-br-md bg-white/80 relative" />
            )}

            {!isActive && isHoverMinimumActive && (
              <div
                className={cn(
                  "rounded-tr-md rounded-br-md bg-white/60 relative",
                  "transition-all !duration-300",
                  "-ml-1 other-hover-[side-item-a]:ml-0",
                  "w-0 other-hover-[side-item-a]:w-1",
                  "h-0 other-hover-[side-item-a]:h-5"
                )}
              />
            )}
          </div>

          <div className="h-full flex items-center justify-start absolute left-full-append-3 top-0">
            <div
              id={popoverId}
              className={cn(
                "animate-x-fade-out other-hover-[side-item-a]:animate-x-fade-in",
                // "side-item-a:animate-x-fade-in",
                "!animate-duration-0ms"
              )}
            >
              <div
                className={cn(
                  "group",
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
                    "popover-message-container",
                    "inline-flex flex-nowrap items-start px-3 py-1.5 text-base rounded-lg relative",
                    "bg-primary",
                    "max-w-[200px] group-[.fill-maxed]:w-[200px]"
                  )}
                >
                  {hoverTitleIcon && (
                    <div className="w-[24px] flex-shrink-0">
                      {hoverTitleIcon}
                    </div>
                  )}
                  <div
                    className={cn(
                      "w-auto flex",
                      "group-[.fill-maxed]:flex-wrap",
                      "whitespace-nowrap group-[.fill-maxed]:whitespace-normal"
                    )}
                  >
                    {hoverTitle}
                  </div>
                  {/* TODO: 글자수에 맞게 너비가 유동적으로 바뀌면서, 너비가 특정 임계점에 도달 했을 때는 글자가 wrap 되도록 하는 방법 연구 필요 */}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-[100px] h-[100px] bg-red-500 fixed top-0 right-0 hidden other-hover-[side-item-a]:flex"></div>
          <div>
            <div className="w-[100px] h-[100px] bg-blue-500 fixed top-[100px] right-0 hidden other-hover-[side-item-a]:flex"></div>
          </div> */}
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
