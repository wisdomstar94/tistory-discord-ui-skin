import { cn } from "@/utils/cn";
import { ISmallSymbolButton } from "./small-symbol-button.type";

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
  } = props;

  return (
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
            {/* <img
              src="[##_image_##]"
              alt="프로필사진"
              className="w-full h-full relative object-cover object-center"
            /> */}
            {icon}
          </div>

          <div className="h-full flex items-center justify-start absolute left-full top-0">
            <div
              className={cn(
                "ml-4 whitespace-nowrap px-6 py-2.5 text-xs rounded-lg",
                "text-white/90",
                "bg-primary",
                "hidden group-hover/side-item-a:inline-flex"
              )}
            >
              {/* 블로그 홈 */}
              {hoverTitle}
            </div>
          </div>
        </a>
      </div>
      <div className="h-0 absolute top-[50%] left-0 flex flex-wrap items-center content-center justify-start">
        {isActive && (
          <div className="w-[4px] h-[36px] rounded-tr-md rounded-br-md bg-white/80 relative"></div>
        )}
      </div>
    </div>
  );
}
