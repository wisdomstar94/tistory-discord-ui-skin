import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export function ContentArea(props: { children: ReactNode }) {
  return (
    <>
      <main
        className={cn(
          "block relative",
          "transition-all",
          "duration-300 posts_index_default_display_show:duration-0",
          "pt-top-bar-height",
          "pl-0 lg:pl-side-bar-width",
          "pb-[112px]",
          // "pl-content-area-padding lg:pl-content-area-padding-with-side-bar-width",
          // "pt-content-area-padding-with-top-bar-height",
          // "pr-content-area-padding",
          // "pb-content-area-padding",
          "text-white",

          "pr-0 lg:posts-index-open:pr-posts-index-width"
        )}
      >
        <div className="w-full flex flex-wrap gap-4 relative box-border">{props.children}</div>
      </main>
    </>
  );
}
