import { BookText } from "lucide-react";
import { IPostsPermalinkItem } from "./posts-permalink-item.type";
import { cn } from "@/utils/cn";
import "./posts-permalink-item.scss";
import { ContentDivider } from "@/components/content-divider/content-divider.component";
import { CommentList } from "@/components/commnet-list/commnet-list.component";
import { SmallDatetimeInline } from "@/small-datetime-inline/small-datetime-inline.component";

export function PostsPermalinkItem(props: IPostsPermalinkItem.Props) {
  return (
    <>
      <li className="w-full flex flex-wrap gap-3 relative pt-content-area-padding">
        <div className="w-full flex flex-wrap relative px-content-area-padding box-border">
          <div className="bg-murky-color-1 rounded-full p-3">
            <BookText className="text-light-color-3/70 w-10 h-10" />
          </div>
        </div>
        <div className={cn("w-full flex flex-wrap relative", "text-light-color-3/90 text-3xl", "px-content-area-padding")}>
          [##_article_rep_title_##]
        </div>
        <ContentDivider
          className={cn("mt-6 mb-2")}
        >{`[##_article_rep_date_year_##]년 [##_article_rep_date_month_##]월 [##_article_rep_date_day_##]일`}</ContentDivider>
        <div className="w-full flex gap-4 relative group py-1 px-content-area-padding">
          <div className="w-full flex flex-wrap gap-2 relative">
            <ul className="w-full flex flex-wrap gap-1 relative items-center">
              <li className="inline-flex text-light-color-5 font-medium">{`[##_article_rep_author_##]`}</li>
              <li className="inline-flex mr-1">
                <div className="inline-flex px-1 relative text-xs rounded-md bg-light-color-6 text-light-color-7 font-bold">작성자</div>
              </li>
              <li className="inline-flex flex-wrap gap-1 relative items-center">
                <SmallDatetimeInline
                  replacer={{
                    yearReplacer: `[##_article_rep_date_year_##]`,
                    monthReplacer: `[##_article_rep_date_month_##]`,
                    dayReplacer: `[##_article_rep_date_day_##]`,
                    hourReplacer: `[##_article_rep_date_hour_##]`,
                    minuteReplacer: `[##_article_rep_date_minute_##]`,
                  }}
                />
              </li>
            </ul>
            <div className="w-full block relative text-light-color-3/80">{`[##_article_rep_desc_##]`}</div>
          </div>
        </div>

        <ContentDivider className={cn("mt-6 mb-2")}>
          댓글 <s_rp_count>({`[##_article_rep_rp_cnt_##]`})</s_rp_count>
        </ContentDivider>
        <div className="w-full h-1 bg-light-color-2/30 flex flex-wrap gap-2 relative mb-2"></div>
        <s_rp>
          <CommentList />
        </s_rp>
      </li>
    </>
  );
}
