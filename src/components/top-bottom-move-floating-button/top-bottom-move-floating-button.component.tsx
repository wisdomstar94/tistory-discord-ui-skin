import { cn } from "@/utils/cn";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export function TopBottomMoveFloatingButton() {
  return (
    <div className={cn("fixed bottom-4 right-3 flex gap-2", "w-top-bottom-move-floating-button-width", "pl-2", "box-border")}>
      <div
        className={cn(
          "cursor-pointer",
          "group/top-bottom-move-floating-button",
          "hover:bg-murky-color-1",
          "bg-murky-color-5 flex items-center justify-center rounded-md",
          "w-12 h-12"
        )}
        tt-onclick="goToTop()"
      >
        <FaArrowUp className="fill-white/70 group-hover/top-bottom-move-floating-button:fill-white" />
      </div>
      <div
        className={cn(
          "cursor-pointer",
          "group/top-bottom-move-floating-button",
          "hover:bg-murky-color-1",
          "bg-murky-color-5 flex items-center justify-center rounded-md",
          "w-12 h-12"
        )}
        tt-onclick="goToBottom()"
      >
        <FaArrowDown className="fill-white/70 group-hover/top-bottom-move-floating-button:fill-white" />
      </div>
    </div>
  );
}
