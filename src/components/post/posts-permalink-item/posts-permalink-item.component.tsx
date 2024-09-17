import { BookText } from "lucide-react";
import { IPostsPermalinkItem } from "./posts-permalink-item.type";
import { cn } from "@/utils/cn";
import { Script } from "@/components/script/script.component";
import "./posts-permalink-item.scss";

export function PostsPermalinkItem(props: IPostsPermalinkItem.Props) {
  return (
    <>
      <li className="w-full flex flex-wrap gap-3 relative">
        <div className="w-full flex flex-wrap relative">
          <div className="bg-murky-color-1 rounded-full p-3">
            <BookText className="text-light-color-3/70 w-10 h-10" />
          </div>
        </div>
        <div className={cn("w-full flex flex-wrap relative", "text-light-color-3/90 text-3xl")}>[##_article_rep_title_##]</div>
        <div className={cn("w-full h-[1px] flex items-center relative gap-1 mt-6 mb-2")}>
          <div className="w-full h-full bg-light-color-3/10 flex-1"></div>
          <div
            className={cn("flex-grow-0 flex-shrink-0 text-xs text-light-color-3/50 whitespace-nowrap")}
          >{`[##_article_rep_date_year_##]년 [##_article_rep_date_month_##]월 [##_article_rep_date_day_##]일`}</div>
          <div className="w-full h-full bg-light-color-3/10 flex-1"></div>
        </div>
        <div className="w-full flex gap-4 relative group py-1">
          <div
            className={cn(
              "w-[calc(100vw+100px)] h-full absolute top-0 left-[-50px]"
              // "group-hover:bg-murky-color-1/30"
            )}
          ></div>

          <div className="w-full flex flex-wrap gap-2 relative">
            <ul className="w-full flex flex-wrap gap-1 relative items-center">
              <li className="inline-flex text-light-color-5 font-medium">{`[##_article_rep_author_##]`}</li>
              <li className="inline-flex mr-1">
                <div className="inline-flex px-1 relative text-xs rounded-md bg-light-color-6 text-light-color-7 font-bold">작성자</div>
              </li>
              <li className="inline-flex flex-wrap gap-1 relative items-center text-xs text-light-color-3/50">
                <span>{`[##_article_rep_date_year_##].[##_article_rep_date_month_##].[##_article_rep_date_day_##].`}</span>
                <span>
                  <Script
                    html={`
                      {
                        const hour24 = [##_article_rep_date_hour_##];
                        if (hour24 < 12) {
                          document.write('오전');
                        } else {
                          document.write('오후');
                        }
                      }  
                    `}
                  />
                </span>
                <span>
                  <span>
                    <Script
                      html={`
                        {
                          const hour24 = [##_article_rep_date_hour_##];
                          if (hour24 <= 12) {
                            document.write(hour24.toString().padStart(2, '0'));
                          } else {
                            document.write((hour24 - 12).toString().padStart(2, '0'));
                          }
                        }  
                      `}
                    />
                  </span>
                  <span>:</span>
                  <span>{`[##_article_rep_date_minute_##]`}</span>
                </span>
              </li>
            </ul>
            <div className="w-full block relative text-light-color-3/80">{`[##_article_rep_desc_##]`}</div>
          </div>
        </div>
      </li>
    </>
  );
}
