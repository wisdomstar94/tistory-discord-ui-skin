import { cn } from "@/utils/cn";
import { ICommentInputForm } from "./comment-input-form.type";
import { LockKeyhole, LockKeyholeOpen, MessageCircle, Send, User } from "lucide-react";

export function CommentInputForm(props: ICommentInputForm.Props) {
  const { isGuestbook = false } = props;

  const prefix = (function () {
    if (isGuestbook) {
      return "guest";
    }
    return "rp";
  })();

  const title = isGuestbook ? "방명록" : "댓글";

  const replacer = {
    textareaName: isGuestbook ? "[##_guest_textarea_body_##]" : "[##_rp_input_comment_##]",
    passwordValue: isGuestbook ? "[##_guest_password_##]" : "[##_rp_admin_check_##]",
  };

  const MemberComp = isGuestbook ? "s_guest_member" : "s_rp_member";
  const GuestComp = isGuestbook ? "s_guest_form" : "s_rp_guest";

  return (
    <>
      <div
        className={cn(
          "flex flex-wrap",
          "transition-all duration-300",
          "w-comment-input-form-width lg:w-comment-input-form-width-with-sidebar lg:posts-index-open:w-comment-input-form-width-with-sidebar-with-posts-index",
          "rounded-md",
          "lg:left-comment-input-form-left-with-sidebar",
          "ml-comment-input-form-left lg:ml-0",
          "lg:bottom-content-area-padding",
          "relative lg:fixed",
          // "lg:bottom-0 lg:left-0",
          "bg-murky-color-5",
          "box-border px-4 py-1",
          "z-0 lg:z-[2]"
        )}
      >
        <MemberComp>
          <div className="w-full relative">
            <ul className="w-full flex min-w-0 overflow-hidden items-center relative gap-2">
              <GuestComp>
                <li className={cn("w-[22px] block aspect-square relative", "flex-grow-0 flex-shrink-0")}>
                  <User className="text-light-color-3/60" />
                </li>
                <li className={cn("w-[100px] block relative", "flex-grow-0 flex-shrink-0")}>
                  <input
                    type="text"
                    className={cn("bg-transparent focus:outline-none", "text-light-color-3/60 placeholder:text-light-color-3/20", "p-2")}
                    name={`[##_${prefix}_input_name_##]`}
                    tt-value={`[##_guest_name_##]`}
                    placeholder={`이름`}
                  />
                </li>
                <li className={cn("w-[100px] block relative", "flex-grow-0 flex-shrink-0")}>
                  <input
                    type="password"
                    className={cn("bg-transparent focus:outline-none", "text-light-color-3/60 placeholder:text-light-color-3/20", "p-2")}
                    maxLength={8}
                    name={`[##_${prefix}_input_password_##]`}
                    tt-value={replacer.passwordValue}
                    placeholder={`비밀번호`}
                  />
                </li>
              </GuestComp>
              {/* {!isGuestbook && (
                <li className={cn("w-full flex gap-2 items-center relative", "flex-grow flex-shrink", "min-w-0 overflow-hidden")}>
                  <input
                    type="checkbox"
                    id={`[##_rp_input_is_secret_##]`}
                    name={`[##_rp_input_is_secret_##]`}
                    className="w-[16px] h-[16px] bg-transparent border border-light-color-3/60 hidden"
                  />
                  <label htmlFor="secret" className="text-light-color-3/40 hidden">
                    비밀글
                  </label>
                </li>
              )} */}
            </ul>
          </div>
        </MemberComp>
        <div className="w-full relative">
          <ul className="w-full flex min-w-0 overflow-hidden items-center relative gap-2">
            <li className={cn("w-[22px] block aspect-square relative", "flex-grow-0 flex-shrink-0")}>
              <MessageCircle className="text-light-color-3/60" />
            </li>
            <li className="inline-flex w-full flex-grow flex-shrink min-w-0 overflow-hidden relative">
              <textarea
                name={replacer.textareaName}
                placeholder={`${title}을 입력할 수 있습니다.`}
                className={cn(
                  "w-full h-[40px] p-2",
                  "focus:outline-none",
                  "text-light-color-3/60 placeholder:text-light-color-3/20",
                  "resize-none",
                  "bg-transparent"
                )}
              />
            </li>
            {!isGuestbook && (
              <li className={cn("inline-block aspect-square relative", "flex-grow-0 flex-shrink-0", "cursor-pointer")}>
                <input
                  type="checkbox"
                  data-title="secret-checkbox"
                  id={`[##_rp_input_is_secret_##]`}
                  name={`[##_rp_input_is_secret_##]`}
                  className="w-[16px] h-[16px] bg-transparent border border-light-color-3/60 hidden other/secret-checkbox"
                />
                <button className="flex items-center cursor-pointer" tt-onclick="secretVirtualCheckboxClick(this);">
                  <LockKeyholeOpen className="text-light-color-3/20 flex other-checked-[secret-checkbox]:hidden" />
                  <LockKeyhole className="text-light-color-3/80 hidden other-checked-[secret-checkbox]:flex" />
                </button>
              </li>
            )}

            <li
              className={cn("w-[22px] flex relative", "flex-grow-0 flex-shrink-0", "cursor-pointer")}
              tt-onclick={`[##_${prefix}_onclick_submit_##]`}
            >
              <Send className="text-light-color-3/60" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
