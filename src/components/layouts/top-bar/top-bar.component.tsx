import { Script } from "@/components/script/script.component";
import { cn } from "@/utils/cn";
import { Menu } from "lucide-react";

export function TopBar() {
  return (
    <>
      <header
        className={cn(
          "h-top-bar-height box-border fixed top-0 right-0 bg-murky-color-3 z-[1] text-white px-content-area-padding py-2",
          "transition-all duration-300",
          "w-full lg:w-top-bar-width"
        )}
      >
        <div className="w-full h-full relative flex flex-wrap items-center justify-start gap-2">
          <div
            className={cn("inline-flex lg:hidden", "p-1", "hover:bg-white/10", "cursor-pointer", "rounded-md", "text-white/80")}
            tt-onclick="sideBarToggleButtonClick();"
          >
            <Menu className="w-[20px] h-[20px]" />
          </div>
          <div className={cn("top-bar-title-area")}>내용 준비중..</div>
        </div>
        <div className="background-bottom-border w-full h-[2px] bg-murky-color-1/80 absolute bottom-[-2px] left-0"></div>
      </header>
      <Script
        html={`
          checkTopBarTitle();
        `}
      />
    </>
  );
}
