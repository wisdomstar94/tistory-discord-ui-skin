import { cn } from "@/utils/cn";
import { Script } from "../script/script.component";

export function PostsNormalIndexItem() {
  return (
    <>
      <li className="w-full relative">
        <a
          className={cn(
            "w-full flex gap-2 relative bg-murky-color-5 box-border p-4 items-start",
            "rounded-xl",
            "transition-all duration-300",
            "hover:-translate-y-0.5",
            "hover:shadow-murky-color-1",
            "hover:shadow-[0px_2px_12px]"
          )}
          href="[##_article_rep_link_##]"
        >
          <div className={cn("min-w-0", "w-full flex flex-wrap relative gap-1 items-start content-start")}>
            <div
              data-title="article-title"
              className={cn(
                "w-full text-light-color-3 font-bold min-w-0 overflow-hidden text-ellipsis whitespace-nowrap",
                "text-lg lg:text-xl"
              )}
            >
              [##_article_rep_title_##]
            </div>
            <div
              data-title="article-summary"
              className={cn("w-full flex relative items-start text-sm", "flex-col lg:flex-row", "gap-0 lg:gap-2")}
            >
              <div className={cn("flex-grow-0 flex-shrink-0", "flex flex-wrap items-center")}>
                <span className="text-light-color-4 font-medium max-w-[80px] overflow-hidden min-w-0 text-ellipsis whitespace-nowrap">
                  [##_article_rep_author_##]
                </span>
                <span className={cn("text-light-color-3 font-medium", "hidden lg:inline-block")}>:</span>
              </div>
              <div
                className={cn(
                  "text-light-color-3/80 whitespace-nowrap overflow-hidden article-rep-summary relative",
                  "min-w-0",
                  "w-full lg:w-auto",
                  "overflow-ellipsis",
                  "flex-grow flex-shrink",
                  "text-xs lg:text-sm"
                )}
              >
                [##_article_rep_summary_##]
              </div>
            </div>
            <div data-title="article-extra-info" className={cn("w-full flex gap-2 relative items-start text-sm")}>
              <ul className="w-full flex flex-wrap gap-2 relative">
                <li className={cn("inline-flex gap-2 relative text-light-color-3/50", "text-xs lg:text-sm")}>
                  <div>{">"}</div>
                  <div className={cn("inline-flex relative", "flex-col lg:flex-row", "gap-0 lg:gap-2")}>
                    <span>
                      {"[##_article_rep_date_year_##]-[##_article_rep_date_month_##]-[##_article_rep_date_day_##]"}{" "}
                      {"[##_article_rep_date_hour_##]:[##_article_rep_date_minute_##]:[##_article_rep_date_second_##]"}
                    </span>
                    <span>
                      <Script
                        html={`
                          {
                            const thisDatetime = '[##_article_rep_date_year_##]-[##_article_rep_date_month_##]-[##_article_rep_date_day_##] [##_article_rep_date_hour_##]:[##_article_rep_date_minute_##]:[##_article_rep_date_second_##]';
                            const thisDate = new Date(thisDatetime);
                            const thisTimeAgoInfo = getTimeAgoInfo(thisDate);
                            document.write("(" + thisTimeAgoInfo.autoPrettyString + ")");
                          }
                        `}
                      />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[80px] aspect-square block flex-shrink-0 relative bg-light-color-1 rounded-xl overflow-hidden"></div>
        </a>
      </li>
    </>
  );
}
