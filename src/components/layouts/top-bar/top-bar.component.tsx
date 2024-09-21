import { PageTitle } from "@/components/page-title/page-title.component";
import { Script } from "@/components/script/script.component";
import { SearchBar } from "@/components/search-bar/search-bar.component";
import { cn } from "@/utils/cn";
import { Menu } from "lucide-react";

export function TopBar() {
  return (
    <>
      <header
        className={cn(
          "h-top-bar-height box-border fixed top-0 bg-murky-color-3 z-[1] text-white px-content-area-padding py-2",
          "transition-all",

          "duration-300 posts_index_default_display_show:duration-0",
          "w-full lg:w-top-bar-width",
          "min-w-0",

          "right-0 lg:posts-index-open:right-posts-index-width"
        )}
      >
        <div className="w-full h-full min-w-0 relative flex items-center justify-start gap-2">
          <div
            className={cn(
              "inline-flex lg:hidden flex-grow-0 flex-shrink-0",
              "p-1 min-w-0",
              "hover:bg-white/10",
              "cursor-pointer",
              "rounded-md",
              "text-white/80"
            )}
            tt-onclick="sideBarToggleButtonClick();"
          >
            <Menu className="w-[20px] h-[20px]" />
          </div>
          <div className={cn("w-full min-w-0 flex items-center justify-between gap-2", "top-bar-title-area")}>
            <div className="inline-flex items-center relative min-w-0 overflow-hidden">
              <PageTitle />
            </div>
            <div
              className={cn("w-[160px] lg:w-[194px]", "inline-flex min-w-0 items-center justify-end relative flex-grow-0 flex-shrink-0")}
            >
              <SearchBar />
            </div>
          </div>
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
