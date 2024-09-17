import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export function ContentArea(props: { children: ReactNode }) {
  return (
    <>
      <main
        className={cn(
          "block relative",
          "transition-all duration-300",
          "pt-top-bar-height",
          "pl-0 lg:pl-side-bar-width",
          "pb-[112px]",
          // "pl-content-area-padding lg:pl-content-area-padding-with-side-bar-width",
          // "pt-content-area-padding-with-top-bar-height",
          // "pr-content-area-padding",
          // "pb-content-area-padding",
          "text-white"
        )}
      >
        {props.children}
      </main>
    </>
  );
}
