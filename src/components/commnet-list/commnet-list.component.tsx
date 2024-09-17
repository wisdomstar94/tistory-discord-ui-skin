import { SmallDatetimeInline } from "@/small-datetime-inline/small-datetime-inline.component";
import { ICommnetList } from "./commnet-list.type";
import { cn } from "@/utils/cn";
import "./comment-list.scss";

export function CommentList(props: ICommnetList.Props) {
  return (
    <>
      <ul data-title="rp-list" className="w-full flex flex-wrap box-border relative gap-2">
        <s_rp_container>
          <s_rp_rep>
            <li data-title="rp-item" id={`[##_rp_rep_id_##]`} className={cn("w-full flex flex-wrap gap-2 relative box-border")}>
              <div className="w-full flex relative box-border px-content-area-padding py-1 items-start gap-4 hover:bg-murky-color-1/70">
                <div className="w-[42px] aspect-square block flex-grow-0 flex-shrink-0 relative rounded-full overflow-hidden">
                  <img
                    data-title="rp-profile-image"
                    src={`[##_rp_rep_logo_##]`}
                    alt="댓글 작성자 프로필 사진"
                    className="w-full h-full object-cover object-center relative"
                  />
                </div>
                <div className="w-full flex flex-wrap flex-grow flex-shrink relative min-w-0 gap-0.5">
                  <div className="w-full text-light-color-3/80 flex flex-wrap gap-2 relative items-center">
                    <div className="inline-flex gap-1 relative items-center" data-title="rp-profile-name">{`[##_rp_rep_name_##]`}</div>
                    <div className="inline-flex relative items-center">
                      <SmallDatetimeInline dataTitle="rp-date-area">{`[##_rp_rep_date_##]`}</SmallDatetimeInline>
                    </div>
                  </div>
                  <div
                    className="w-full min-w-0 overflow-hidden relative text-light-color-3/70 text-base leading-5"
                    data-title="rp-desc"
                  >{`[##_rp_rep_desc_##]`}</div>
                  <div className="w-full flex flex-wrap gap-2 relative mt-1">
                    <ul className="w-full flex flex-wrap gap-2 relative">
                      <li
                        className={cn(
                          "inline-flex px-2 py-1 cursor-pointer text-xs text-light-color-3/70 rounded-md",
                          "bg-murky-color-6/50 hover:bg-murky-color-6",
                          "hover:outline hover:outline-offset-1 hover:outline-light-color-3/30 hover:outline-1"
                        )}
                        tt-onclick={`[##_rp_rep_onclick_delete_##]`}
                      >
                        수정/삭제
                      </li>
                      <li
                        className={cn(
                          "inline-flex px-2 py-1 cursor-pointer text-xs text-light-color-3/70 rounded-md",
                          "bg-murky-color-6/50 hover:bg-murky-color-6",
                          "hover:outline hover:outline-offset-1 hover:outline-light-color-3/30 hover:outline-1"
                        )}
                        tt-onclick={`[##_rp_rep_onclick_reply_##]`}
                      >
                        답글
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <s_rp2_container>
                <ul data-title="sub-rp-list" className="w-full flex flex-wrap box-border relative gap-2">
                  <s_rp2_rep>
                    <li id={`[##_rp_rep_id_##]`} data-title="sub-rp-item" className="w-full flex flex-wrap relative">
                      <div className="w-full flex relative box-border px-content-area-padding gap-4 py-1 items-start hover:bg-murky-color-1/70">
                        {/* <div className="w-[24px] flex justify-end flex-grow-0 flex-shrink-0 relative rounded-full">
                            <div className="w-full h-[12px] border-b-2 border-b-light-color-3/20 border-l-2 border-l-light-color-3/20 rounded-bl-md mt-2.5" />
                          </div> */}
                        <div className="w-[42px] aspect-square block flex-grow-0 flex-shrink-0 relative rounded-full overflow-hidden">
                          <img
                            src={`[##_rp_rep_logo_##]`}
                            alt="댓글의 댓글 작성자 프로필 사진"
                            className="w-full h-full object-cover object-center relative"
                          />
                        </div>
                        <div className="w-full flex flex-wrap flex-grow flex-shrink relative min-w-0 gap-0.5">
                          <div className="w-full text-light-color-3/80 flex flex-wrap gap-2 relative">
                            <div className="inline-flex gap-1 relative items-center">{`[##_rp_rep_name_##]`}</div>
                            <div>
                              <SmallDatetimeInline dataTitle="sub-rp-date-area">{`[##_rp_rep_date_##]`}</SmallDatetimeInline>
                            </div>
                          </div>
                          <div className="w-full min-w-0 overflow-hidden relative text-light-color-3/70 text-base leading-5">{`[##_rp_rep_desc_##]`}</div>
                          <div className="w-full flex flex-wrap gap-2 relative mt-1">
                            <ul className="w-full flex flex-wrap gap-2 relative">
                              <li
                                className={cn(
                                  "inline-flex px-2 py-1 cursor-pointer text-xs text-light-color-3/70 rounded-md",
                                  "bg-murky-color-6/50 hover:bg-murky-color-6",
                                  "hover:outline hover:outline-offset-1 hover:outline-light-color-3/30 hover:outline-1"
                                )}
                                tt-onclick={`[##_rp_rep_onclick_delete_##]`}
                              >
                                수정/삭제
                              </li>
                              <li
                                className={cn(
                                  "inline-flex px-2 py-1 cursor-pointer text-xs text-light-color-3/70 rounded-md",
                                  "bg-murky-color-6/50 hover:bg-murky-color-6",
                                  "hover:outline hover:outline-offset-1 hover:outline-light-color-3/30 hover:outline-1"
                                )}
                                tt-onclick={`[##_rp_rep_onclick_reply_##]`}
                              >
                                답글
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </s_rp2_rep>
                </ul>
              </s_rp2_container>
            </li>
          </s_rp_rep>
        </s_rp_container>
      </ul>
    </>
  );
}
