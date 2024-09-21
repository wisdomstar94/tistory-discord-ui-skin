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
      <li
        className={cn(
          "w-full relative flex items-stretch",

          "min-h-[112px]",

          "first:mt-content-area-padding list_display_type_grid:first:mt-0",
          "px-content-area-padding list_display_type_grid:px-0"
          // "",
        )}
      >
        <a
          className={cn(
            "w-full flex gap-2 relative bg-murky-color-5 box-border p-4",
            "rounded-xl",
            "items-stretch",
            "transition-all duration-300",
            "hover:-translate-y-0.5",
            "hover:shadow-murky-color-1",
            "hover:shadow-[0px_2px_12px]"
          )}
          href="[##_article_rep_link_##]"
        >
          <div
            className={cn(
              "min-w-0",
              "w-full relative content-start box-border",
              "items-stretch",
              "flex",

              "flex-wrap list_display_type_grid:flex-nowrap",
              "gap-1 list_display_type_grid:gap-2",
              "list_display_type_grid:flex-col"
              // "",
            )}
          >
            {/* 게시글 썸네일 사진 */}
            <>
              {postType === "normal" && (
                <s_article_rep_thumbnail>
                  {/* 3 */}
                  <div
                    className={cn(
                      "other/post-index-thumbnail",
                      "aspect-square block flex-shrink-0 bg-light-color-1 rounded-xl overflow-hidden",

                      "w-full list_display_type_row:w-[80px]",
                      "relative list_display_type_row:absolute",
                      "list_display_type_row:top-0 list_display_type_row:right-0",

                      "list_display_type_grid:order-3"
                      // "",
                    )}
                  >
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
                  {/* 3 */}
                  <div
                    className={cn(
                      "other/post-index-thumbnail",
                      "aspect-square block flex-shrink-0 bg-light-color-1 rounded-xl overflow-hidden",

                      "w-full list_display_type_row:w-[80px]",
                      "relative list_display_type_row:absolute",
                      "list_display_type_row:top-0 list_display_type_row:right-0",

                      "list_display_type_grid:order-3"
                      // "",
                    )}
                  >
                    <img
                      className="w-full h-full object-cover object-center"
                      alt="공지사항글 썸네일 이미지"
                      src={`[##_${replacer_prefix}_rep_thumbnail_url_##]`}
                    />
                  </div>
                </s_notice_rep_thumbnail>
              )}
              {postType === "protected" && (
                <>
                  {/* 3 */}
                  <div
                    className={cn(
                      "other/post-index-thumbnail",
                      "aspect-square block flex-shrink-0 bg-light-color-1 rounded-xl overflow-hidden",

                      "w-full list_display_type_row:w-[80px]",
                      "relative list_display_type_row:absolute",
                      "list_display_type_row:top-0 list_display_type_row:right-0",

                      "list_display_type_grid:order-3"
                      // "",
                    )}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <LockKeyhole className="text-light-color-3" />
                    </div>
                  </div>
                </>
              )}
            </>

            {/* 2 */}
            <div
              data-title="article-title"
              className={cn(
                "w-full",
                "text-light-color-3 font-bold min-w-0 overflow-hidden text-ellipsis whitespace-nowrap",
                "text-lg lg:text-xl",
                "list_display_type_grid:text-sm lg:list_display_type_grid:text-sm",

                "list_display_type_row:other-exist-[post-index-thumbnail]:pr-[92px]",

                "list_display_type_grid:order-2"
                // "list_display_type_grid:whitespace-normal"
              )}
            >
              {`[##_${replacer_prefix}_rep_title_##]`}
            </div>

            {/* 1 */}
            <div
              className={cn(
                "flex-grow-0 flex-shrink-0 box-border relative",
                "flex items-center",
                "text-xs lg:text-sm",
                // "other-exist-[post-index-thumbnail]:pr-[92px]",

                "max-w-[100px] list_display_type_grid:max-w-full",
                "list_display_type_grid:w-full",
                "list_display_type_grid:pr-[100px]"
                // ""
              )}
            >
              <span
                className={cn(
                  "text-light-color-4 font-medium overflow-hidden min-w-0 text-ellipsis whitespace-nowrap",
                  "list_display_type_grid:w-full"
                  //
                )}
              >
                {`[##_${replacer_prefix}_rep_author_##]`}
              </span>
              <span
                className={cn(
                  "text-light-color-3 font-medium",
                  "hidden lg:inline-block",
                  "list_display_type_grid:hidden"
                  // ""
                )}
              >
                :
              </span>
            </div>

            {/* 4 */}
            <div
              className={cn(
                "text-light-color-3/80 overflow-hidden article-rep-summary relative",
                "min-w-0 overflow-hidden box-border",
                "list_display_type_row:other-exist-[post-index-thumbnail]:pr-[92px]",
                "list_display_type_grid:other-exist-[post-index-thumbnail]:hidden",

                "flex-grow",
                "flex-1",

                "overflow-ellipsis",
                // "flex-grow flex-shrink",
                "text-xs lg:text-sm",

                "whitespace-nowrap list_display_type_grid:whitespace-normal",
                // "list_display_type_grid:aspect-square",
                "list_display_type_grid:order-4",
                "list_display_type_grid:p-2",
                "list_display_type_grid:max-h-[240px]",
                "list_display_type_grid:rounded-lg",
                "list_display_type_grid:bg-murky-color-1/20",
                "list_display_type_grid:border list_display_type_grid:border-light-color-2/30"
              )}
            >
              {postType === "protected" ? "보호글 입니다." : `[##_${replacer_prefix}_rep_summary_##]`}
            </div>

            {/* 5 */}
            <div
              data-title="article-extra-info"
              className={cn(
                "w-full",
                "flex gap-2 items-start text-sm",
                "mt-1 lg:mt-0",
                "list_display_type_row:other-exist-[post-index-thumbnail]:pr-[92px]",

                "list_display_type_grid:order-5"
                // "relative",
              )}
            >
              <ul
                data-title="article-extra-info-list"
                className={cn(
                  "w-full flex flex-wrap",
                  "flex-col lg:flex-row",
                  "gap-1 lg:gap-5"
                  // "relative",
                )}
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

                <li
                  className={cn(
                    "inline-flex gap-2 text-light-color-3/50",
                    "items-start lg:items-center",
                    "text-xs lg:text-sm"

                    // "relative"
                  )}
                >
                  {/* <div>{">"}</div> */}
                  <div className={cn("inline-flex", "flex-col lg:flex-row", "gap-0 lg:gap-2")}>
                    <span
                      className={cn(
                        "box-border whitespace-nowrap",
                        "inline-flex items-center justify-center",

                        "list_display_type_grid:list_grid_detail_detatime_display_flag_hidden:hidden",
                        "list_display_type_grid:rounded-lg",
                        "list_display_type_grid:bg-murky-color-1/60",
                        "list_display_type_grid:absolute",
                        "list_display_type_grid:px-2 list_display_type_grid:py-1",
                        "list_display_type_grid:top-[-32px]",
                        "list_display_type_grid:left-[calc(50%-75px)]",
                        "list_display_type_grid:max-w-[150px]"
                        // "list_display_type_grid:hidden"
                        // ""
                      )}
                    >
                      {`[##_${replacer_prefix}_rep_date_year_##]-[##_${replacer_prefix}_rep_date_month_##]-[##_${replacer_prefix}_rep_date_day_##]`}{" "}
                      {`[##_${replacer_prefix}_rep_date_hour_##]:[##_${replacer_prefix}_rep_date_minute_##]:[##_${replacer_prefix}_rep_date_second_##]`}
                    </span>
                    <span
                      className={cn(
                        "list_display_type_grid:absolute",
                        "list_display_type_grid:top-0 list_display_type_grid:right-0"
                        // "",
                      )}
                    >
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
        </a>
      </li>
    </>
  );
}
