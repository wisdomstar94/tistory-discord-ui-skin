import { SmallDatetimeInline } from "@/small-datetime-inline/small-datetime-inline.component";
import { ICommnetList } from "./commnet-list.type";
import { cn } from "@/utils/cn";

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
                        삭제
                      </li>
                      <li
                        className={cn(
                          "inline-flex px-2 py-1 cursor-pointer text-xs text-light-color-3/70 rounded-md",
                          "bg-murky-color-6/50 hover:bg-murky-color-6",
                          "hover:outline hover:outline-offset-1 hover:outline-light-color-3/30 hover:outline-1"
                        )}
                        tt-onclick={`[##_rp_rep_onclick_reply_##]`}
                      >
                        수정
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <s_rp2_container>
                <ul data-title="sub-rp-list" className="w-full flex flex-wrap box-border relative gap-2">
                  <s_rp2_rep>
                    <li id={`[##_rp_rep_id_##]`} data-title="sub-rp-item" className="w-full flex flex-wrap relative">
                      <div className="w-full flex flex-wrap relative box-border px-content-area-padding py-1 items-start hover:bg-murky-color-1/70">
                        <div className="w-full h-[24px] relative flex gap-1 items-end">
                          <div
                            className={cn(
                              "w-[34px] h-[12px] inline-flex",
                              "ml-5",
                              "flex-grow-0 flex-shrink-0 min-w-0",
                              "border-t-2 border-t-light-color-3/20",
                              "border-l-2 border-l-light-color-3/20 rounded-tl-lg"
                            )}
                          />
                          <div className="inline-flex gap-1 relative items-center mb-0.5 overflow-hidden min-w-0 flex-shrink flex-grow">
                            <div
                              data-title="sub-rp-profile-image-area"
                              className="w-4 h-4 overflow-hidden relative flex rounded-full flex-shrink-0 flex-grow-0"
                            >
                              <img
                                data-temp=""
                                src={`[##_rp_rep_logo_##]`}
                                alt="댓글 작성자 프로필 사진"
                                className="hidden w-full h-full object-cover object-center relative"
                              />
                            </div>
                            <div
                              data-title="sub-rp-profile-name-area"
                              className={cn(
                                "gap-1 relative items-center",
                                "inline-flex text-light-color-3/50 text-xs min-w-0 max-w-[140px] whitespace-nowrap overflow-hidden overflow-ellipsis flex-grow-0 flex-shrink-0"
                              )}
                            >
                              {/* @{`[##_rp_rep_name_##]`} */}
                            </div>
                            <div
                              data-title="sub-rp-profile-desc-area"
                              className="w-full block text-light-color-3/50 text-xs min-w-0 whitespace-nowrap overflow-hidden overflow-ellipsis flex-grow flex-shrink"
                            >
                              {/* {`[##_rp_rep_desc_##]`} */}
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex items-start relative gap-4">
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
                                  삭제
                                </li>
                                <li
                                  className={cn(
                                    "inline-flex px-2 py-1 cursor-pointer text-xs text-light-color-3/70 rounded-md",
                                    "bg-murky-color-6/50 hover:bg-murky-color-6",
                                    "hover:outline hover:outline-offset-1 hover:outline-light-color-3/30 hover:outline-1"
                                  )}
                                  tt-onclick={`[##_rp_rep_onclick_reply_##]`}
                                >
                                  수정
                                </li>
                              </ul>
                            </div>
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
