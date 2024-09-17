import { cn } from "@/utils/cn";
import { IContentDivider } from "./content-divider.type";

export function ContentDivider(props: IContentDivider.Props) {
  const { children, className } = props;

  return (
    <>
      <div className={cn("w-full h-[1px] flex items-center relative gap-1 px-content-area-padding", className)}>
        <div className="w-full h-full bg-light-color-3/10 flex-1"></div>
        {children && <div className={cn("flex-grow-0 flex-shrink-0 text-xs text-light-color-3/50 whitespace-nowrap")}>{children}</div>}
        <div className="w-full h-full bg-light-color-3/10 flex-1"></div>
      </div>
    </>
  );
}
