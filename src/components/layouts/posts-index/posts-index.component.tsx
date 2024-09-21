import { Script } from "@/components/script/script.component";
import { cn } from "@/utils/cn";
import { Dot, IndentDecrease, IndentIncrease, X } from "lucide-react";

export function PostsIndex() {
  return (
    <>
      <section
        className={cn(
          "w-posts-index-width h-full gap-2 fixed top-0 text-light-color-3/70 z-[1] transition-all box-border",
          // "",
          "duration-300 posts_index_default_display_show:duration-0",
          "bg-murky-color-3",
          "flex-col gap-2 items-stretch min-h-0 min-w-0",
          "-right-posts-index-width posts-index-open:right-0 posts-index-close:-right-posts-index-width",
          "border-l-[10px] border-l-murky-color-1",
          "hidden tt-body-page:flex"
        )}
      >
        {/* handler */}
        <div
          className="w-14 h-10 absolute top-16 -left-14 cursor-pointer bg-murky-color-1 pr-4 hover:bg-murky-color-6 box-border"
          tt-onclick="postsIndexToggleButtonClick()"
        >
          <button className="w-full h-full flex items-center justify-center">
            <IndentDecrease className="flex text-light-color-3/60 posts-index-open:hidden" />
            <IndentIncrease className="hidden text-light-color-3/60 posts-index-open:flex" />
          </button>
        </div>

        <div className="w-full flex items-center text-lg text-light-color-3/70 box-border h-top-bar-height px-4 border-b border-b-murky-color-1 flex-shrink-0 flex-grow-0">
          목차
          <button className="inline-flex absolute top-2.5 right-4" tt-onclick="postsIndexToggleButtonClick()">
            <X className="text-light-color-3/50 cursor-pointer" />
          </button>
        </div>

        <div className="w-full overflow-y-auto scrollbar-hidden min-h-0 min-w-0">
          <div className="hidden no-posts-index:flex text-light-color-3/40 text-xs p-4">표시할 목차가 없습니다.</div>

          <ul className="w-full flex-wrap gap-2 relative box-border px-4 py-2" data-title="posts-index-list"></ul>

          <ul className="w-full flex-wrap gap-2 relative box-border px-4 py-2 hidden" data-title="posts-index-li-template-list">
            <li
              className="w-full text-sm text-light-color-3/50 hover:text-light-color-3/80 flex gap-1 relative min-w-0 box-border items-center cursor-pointer"
              data-title="h2-li"
            >
              <div className="w-full min-w-0 overflow-hidden overflow-ellipsis whitespace-nowrap" data-title="only-text">
                안녕하세요
              </div>
            </li>
            <li
              className="w-full text-sm text-light-color-3/50 hover:text-light-color-3/80 flex gap-1 relative min-w-0 box-border items-center cursor-pointer"
              data-title="h3-li"
            >
              <div className="w-[24px] flex justify-end">
                <Dot />
              </div>
              <div className="w-full min-w-0 overflow-hidden overflow-ellipsis whitespace-nowrap" data-title="only-text">
                감사해요
              </div>
            </li>
            <li
              className="w-full text-sm text-light-color-3/50 hover:text-light-color-3/80 flex gap-1 relative min-w-0 box-border items-center cursor-pointer"
              data-title="h4-li"
            >
              <div className="w-[48px] flex justify-end">
                <Dot />
              </div>
              <div className="w-full min-w-0 overflow-hidden overflow-ellipsis whitespace-nowrap" data-title="only-text">
                잘있어요
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Script
        html={`
          checkDefaultDisplay();
        `}
      />
    </>
  );
}
