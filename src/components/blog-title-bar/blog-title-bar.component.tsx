import { cn } from "@/utils/cn";
import { HomeIcon } from "../icons/home-icon/home-icon.component";

export function BlogTitleBar() {
  return (
    <>
      <div className="w-full h-[48px] relative box-border p-4 flex flex-wrap gap-2 content-start items-start">
        <div className="w-full flex flex-nowrap items-center relative">
          <div className="w-[24px] flex-shrink-0">
            <HomeIcon className="shadow-[2px_2px_2px] shadow-primary" />
          </div>
          <div
            className={cn(
              "w-[calc(100%-24px)]",
              "text-shadow",
              "shadow-primary text-sm font-bold text-white relative whitespace-nowrap overflow-ellipsis overflow-hidden"
            )}
          >
            [##_blogger_##]
          </div>
        </div>
      </div>
    </>
  );
}
