import { cn } from "@/utils/cn";
import { IPostsIndexItem } from "./posts-index-item.type";
import { Script } from "@/components/script/script.component";
import { Bell, LockKeyhole, MessageCircle } from "lucide-react";
import "./posts-index.scss";

export function PostsIndexItem(props: IPostsIndexItem.Props) {
  const { postType } = props;

  const replacer_prefix = (function () {
    switch (postType) {
      case "normal":
        return "article";
      case "protected":
        return "article";
      case "notice":
        return "notice";
    }
  })();

  return (
    <>
      <li className="w-full relative px-content-area-padding first:mt-content-area-padding">
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
              {`[##_${replacer_prefix}_rep_title_##]`}
            </div>
            <div
              data-title="article-summary"
              className={cn("w-full flex relative items-start text-sm", "flex-col lg:flex-row", "gap-0 lg:gap-2")}
            >
              <div className={cn("flex-grow-0 flex-shrink-0", "flex flex-wrap items-center")}>
                <span className="text-light-color-4 font-medium max-w-[80px] overflow-hidden min-w-0 text-ellipsis whitespace-nowrap">
                  {`[##_${replacer_prefix}_rep_author_##]`}
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
                {postType === "protected" ? "보호글 입니다." : `[##_${replacer_prefix}_rep_summary_##]`}
              </div>
            </div>
            <div data-title="article-extra-info" className={cn("w-full flex gap-2 relative items-start text-sm", "mt-1 lg:mt-0")}>
              <ul
                data-title="article-extra-info-list"
                className={cn("w-full flex flex-wrap relative", "flex-col lg:flex-row", "gap-1 lg:gap-5")}
              >
                <s_ad_div>
                  <li
                    data-title="posts-index-item-s-ad-div"
                    data-status="[##_s_ad_s1_label_##]" // "공개", "비공개", "보호"
                    className={cn(
                      // "hidden",
                      "inline-flex",
                      "gap-1 relative text-light-color-3/50",
                      "items-center",
                      "text-xs lg:text-sm"
                    )}
                  >
                    {/* <EyeOff className="w-[16px] h-[16px] text-light-color-3/80" /> */}
                    <span data-title="posts-index-item-s-ad-div-icon"></span>
                    <span className="text-light-color-3/80">[##_s_ad_s1_label_##]글</span>
                  </li>
                </s_ad_div>

                {postType === "normal" && (
                  <>
                    <li className={cn("inline-flex gap-1 relative text-light-color-3/50", "items-center", "text-xs lg:text-sm")}>
                      <MessageCircle className="w-[16px] h-[16px] text-light-color-3/80" />
                      <s_rp_count>
                        <span className="text-light-color-3/80">{`[##_${replacer_prefix}_rep_rp_cnt_##]`}</span>
                      </s_rp_count>
                    </li>
                  </>
                )}

                {postType === "notice" && (
                  <>
                    <li className={cn("inline-flex gap-1 relative text-light-color-3/50", "items-center", "text-xs lg:text-sm")}>
                      <Bell className="w-[16px] h-[16px] text-light-color-3/80" />
                      <span className="text-light-color-3/80">공지사항</span>
                    </li>
                  </>
                )}

                <li className={cn("inline-flex gap-2 relative text-light-color-3/50", "items-start lg:items-center", "text-xs lg:text-sm")}>
                  {/* <div>{">"}</div> */}
                  <div className={cn("inline-flex relative", "flex-col lg:flex-row", "gap-0 lg:gap-2")}>
                    <span>
                      {`[##_${replacer_prefix}_rep_date_year_##]-[##_${replacer_prefix}_rep_date_month_##]-[##_${replacer_prefix}_rep_date_day_##]`}{" "}
                      {`[##_${replacer_prefix}_rep_date_hour_##]:[##_${replacer_prefix}_rep_date_minute_##]:[##_${replacer_prefix}_rep_date_second_##]`}
                    </span>
                    <span>
                      <Script
                        html={`
                          {
                            const thisDatetime = '[##_${replacer_prefix}_rep_date_year_##]-[##_${replacer_prefix}_rep_date_month_##]-[##_${replacer_prefix}_rep_date_day_##] [##_${replacer_prefix}_rep_date_hour_##]:[##_${replacer_prefix}_rep_date_minute_##]:[##_${replacer_prefix}_rep_date_second_##]';
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
          {postType === "normal" && (
            <s_article_rep_thumbnail>
              <div className="w-[80px] aspect-square block flex-shrink-0 relative bg-light-color-1 rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  alt="포스트글 썸네일 이미지"
                  src={`[##_${replacer_prefix}_rep_thumbnail_url_##]`}
                />
              </div>
            </s_article_rep_thumbnail>
          )}
          {postType === "notice" && (
            <s_notice_rep_thumbnail>
              <div className="w-[80px] aspect-square block flex-shrink-0 relative bg-light-color-1 rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  alt="공지사항글 썸네일 이미지"
                  src={`[##_${replacer_prefix}_rep_thumbnail_url_##]`}
                />
              </div>
            </s_notice_rep_thumbnail>
          )}
          {postType === "protected" && (
            <div className="w-[80px] aspect-square block flex-shrink-0 bg-light-color-1 rounded-xl overflow-hidden relative">
              <div className="w-full h-full flex items-center justify-center">
                <LockKeyhole className="text-light-color-3" />
              </div>
            </div>
          )}
        </a>
      </li>
    </>
  );
}
