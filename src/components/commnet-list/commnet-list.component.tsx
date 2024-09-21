import { SmallDatetimeInline } from "@/small-datetime-inline/small-datetime-inline.component";
import { ICommnetList } from "./commnet-list.type";
import { cn } from "@/utils/cn";
import "./comment-list.scss";

export function CommentList(props: ICommnetList.Props) {
  const { isGuestBook = false } = props;

  const title = isGuestBook ? "방명록" : "댓글";

  const prefix = (function () {
    if (isGuestBook) {
      return "guest";
    }

    return "rp";
  })();

  const ContainerComp = isGuestBook ? "s_guest_container" : "s_rp_container";
  const RepComp = isGuestBook ? "s_guest_rep" : "s_rp_rep";
  const ReplyContainerComp = isGuestBook ? "s_guest_reply_container" : "s_rp2_container";
  const ReplyRepComp = isGuestBook ? "s_guest_reply_rep" : "s_rp2_rep";

  return (
    <>
      <ContainerComp>
        <ul data-title="rp-list" className="w-full flex flex-wrap box-border relative gap-2 other/rp-list">
          <RepComp>
            <li data-title="rp-item" id={`[##_${prefix}_rep_id_##]`} className={cn("w-full flex flex-wrap gap-2 relative box-border")}>
              <div
                className={cn(
                  "w-full flex relative box-border py-1 items-start gap-4 hover:bg-murky-color-1/70",
                  // "px-content-area-inner-padding"
                  "px-content-area-padding"
                )}
              >
                <div className="w-[42px] aspect-square block flex-grow-0 flex-shrink-0 relative rounded-full overflow-hidden">
                  <img
                    data-title="rp-profile-image"
                    src={`[##_${prefix}_rep_logo_##]`}
                    alt={`${title} 작성자 프로필 사진`}
                    className="w-full h-full object-cover object-center relative"
                  />
                </div>
                <div className="w-full flex flex-wrap flex-grow flex-shrink relative min-w-0 gap-0.5">
                  <div className="w-full text-light-color-3/80 flex flex-wrap gap-2 relative items-center">
                    <div
                      className="inline-flex gap-1 relative items-center"
                      data-title="rp-profile-name"
                    >{`[##_${prefix}_rep_name_##]`}</div>
                    <div className="inline-flex relative items-center">
                      <SmallDatetimeInline dataTitle="rp-date-area">{`[##_${prefix}_rep_date_##]`}</SmallDatetimeInline>
                    </div>
                  </div>
                  <div
                    className="w-full min-w-0 overflow-hidden relative text-light-color-3/70 text-base leading-5"
                    data-title="rp-desc"
                  >{`[##_${prefix}_rep_desc_##]`}</div>
                  <div className="w-full flex flex-wrap gap-2 relative mt-1">
                    <ul className="w-full flex flex-wrap gap-2 relative">
                      <li
                        className={cn(
                          "inline-flex px-2 py-1 cursor-pointer text-xs text-light-color-3/70 rounded-md",
                          "bg-murky-color-6/50 hover:bg-murky-color-6",
                          "hover:outline hover:outline-offset-1 hover:outline-light-color-3/30 hover:outline-1"
                        )}
                        tt-onclick={`[##_${prefix}_rep_onclick_delete_##]`}
                      >
                        수정/삭제
                      </li>
                      <li
                        className={cn(
                          "inline-flex px-2 py-1 cursor-pointer text-xs text-light-color-3/70 rounded-md",
                          "bg-murky-color-6/50 hover:bg-murky-color-6",
                          "hover:outline hover:outline-offset-1 hover:outline-light-color-3/30 hover:outline-1"
                        )}
                        tt-onclick={`[##_${prefix}_rep_onclick_reply_##]`}
                      >
                        답글
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <ReplyContainerComp>
                <ul data-title="sub-rp-list" className="w-full flex flex-wrap box-border relative gap-2">
                  <ReplyRepComp>
                    <li id={`[##_${prefix}_rep_id_##]`} data-title="sub-rp-item" className="w-full flex flex-wrap relative">
                      <div className="w-full flex relative box-border px-content-area-padding gap-4 py-1 items-start hover:bg-murky-color-1/70">
                        {/* <div className="w-[24px] flex justify-end flex-grow-0 flex-shrink-0 relative rounded-full">
                            <div className="w-full h-[12px] border-b-2 border-b-light-color-3/20 border-l-2 border-l-light-color-3/20 rounded-bl-md mt-2.5" />
                          </div> */}
                        <div className="w-[42px] aspect-square block flex-grow-0 flex-shrink-0 relative rounded-full overflow-hidden">
                          <img
                            src={`[##_${prefix}_rep_logo_##]`}
                            alt={`"${title}의 답글 작성자 프로필 사진`}
                            className="w-full h-full object-cover object-center relative"
                          />
                        </div>
                        <div className="w-full flex flex-wrap flex-grow flex-shrink relative min-w-0 gap-0.5">
                          <div className="w-full text-light-color-3/80 flex flex-wrap gap-2 relative">
                            <div className="inline-flex gap-1 relative items-center">{`[##_${prefix}_rep_name_##]`}</div>
                            <div>
                              <SmallDatetimeInline dataTitle="sub-rp-date-area">{`[##_${prefix}_rep_date_##]`}</SmallDatetimeInline>
                            </div>
                          </div>
                          <div className="w-full min-w-0 overflow-hidden relative text-light-color-3/70 text-base leading-5">{`[##_${prefix}_rep_desc_##]`}</div>
                          <div className="w-full flex flex-wrap gap-2 relative mt-1">
                            <ul className="w-full flex flex-wrap gap-2 relative">
                              <li
                                className={cn(
                                  "inline-flex px-2 py-1 cursor-pointer text-xs text-light-color-3/70 rounded-md",
                                  "bg-murky-color-6/50 hover:bg-murky-color-6",
                                  "hover:outline hover:outline-offset-1 hover:outline-light-color-3/30 hover:outline-1"
                                )}
                                tt-onclick={`[##_${prefix}_rep_onclick_delete_##]`}
                              >
                                수정/삭제
                              </li>
                              <li
                                className={cn(
                                  "inline-flex px-2 py-1 cursor-pointer text-xs text-light-color-3/70 rounded-md",
                                  "bg-murky-color-6/50 hover:bg-murky-color-6",
                                  "hover:outline hover:outline-offset-1 hover:outline-light-color-3/30 hover:outline-1"
                                )}
                                tt-onclick={`[##_${prefix}_rep_onclick_reply_##]`}
                              >
                                답글
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ReplyRepComp>
                </ul>
              </ReplyContainerComp>
            </li>
          </RepComp>
        </ul>
        <div className="w-full flex box-border text-xs text-light-color-3/50 other-has-[li]/rp-list:hidden px-content-area-padding">
          작성된 {title}이 없습니다.
        </div>
      </ContainerComp>
    </>
  );
}
