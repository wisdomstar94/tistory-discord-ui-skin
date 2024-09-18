import { cn } from "@/utils/cn";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <>
      <s_search>
        <div className="w-full flex flex-nowrap gap-2 relative">
          <input
            type="text"
            placeholder="검색하기"
            className={cn(
              "w-full relative bg-murky-color-1 text-sm box-border px-2 py-1 pr-8",
              "text-white/80 placeholder:text-light-color-2",
              "focus:outline-none"
            )}
            name="[##_search_name_##]"
            tt-value="[##_search_text_##]"
            tt-onkeypress="if (event.keyCode == 13) { [##_search_onclick_submit_##] }"
          />
          <div className="absolute top-[50%] right-0 flex items-center content-center justify-end h-0">
            <button className="p-2 cursor-pointer" tt-onclick="[##_search_onclick_submit_##]">
              <Search className="text-light-color-2 w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </s_search>
    </>
  );
}
