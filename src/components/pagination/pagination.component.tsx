import { ChevronLeft, ChevronRight } from "lucide-react";
import "./pagination.scss";
import { cn } from "@/utils/cn";

export function Pagination() {
  return (
    <>
      <s_paging>
        <div
          className={cn(
            "w-full flex flex-wrap items-center content-center gap-0.5 relative box-border px-content-area-padding",

            "pagination_display_horizontal_align_left:justify-start",
            "pagination_display_horizontal_align_center:justify-center",
            "pagination_display_horizontal_align_right:justify-end"
          )}
        >
          <a tt-onlyattr="[##_prev_page_##]" className={cn("[##_no_more_prev_##]", "rounded-md p-1 hover:bg-murky-color-1")}>
            <ChevronLeft className="text-light-color-3/50" />
          </a>
          <div className="numbox inline-flex flex-wrap gap-0.5 items-center relative" data-title="pagination-page-num-list">
            <s_paging_rep>
              <a tt-onlyattr="[##_paging_rep_link_##]" className="num">
                [[##_paging_rep_link_num_##]]
              </a>
            </s_paging_rep>
          </div>
          <a tt-onlyattr="[##_next_page_##]" className={cn("[##_no_more_next_##]", "rounded-md p-1 hover:bg-murky-color-1")}>
            <ChevronRight className="text-light-color-3/50" />
          </a>
        </div>
      </s_paging>
    </>
  );
}
