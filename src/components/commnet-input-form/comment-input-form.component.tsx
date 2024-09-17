import { cn } from "@/utils/cn";
import { ICommentInputForm } from "./comment-input-form.type";
import { MessageCircle, Send, User } from "lucide-react";

export function CommentInputForm(props: ICommentInputForm.Props) {
  return (
    <>
      <div
        className={cn(
          "w-comment-input-form-width lg:w-comment-input-form-width-with-sidebar",
          "rounded-md",
          "left-comment-input-form-left lg:left-comment-input-form-left-with-sidebar",
          "bottom-content-area-padding",
          "relative lg:fixed",
          "bottom-0 left-0",
          "bg-murky-color-5 z-[2]",
          "box-border px-4 py-1"
        )}
      >
        <s_rp_member>
          <div className="w-full relative">
            <ul className="w-full flex min-w-0 overflow-hidden items-center relative gap-2">
              <s_rp_guest>
                <li className={cn("w-[22px] block aspect-square relative", "flex-grow-0 flex-shrink-0")}>
                  <User className="text-light-color-3/60" />
                </li>
                <li className={cn("w-[100px] block relative", "flex-grow-0 flex-shrink-0")}>
                  <input
                    type="text"
                    className={cn("bg-transparent focus:outline-none", "text-light-color-3/60 placeholder:text-light-color-3/20", "p-2")}
                    name={`[##_rp_input_name_##]`}
                    tt-value={`[##_guest_name_##]`}
                    placeholder={`이름`}
                  />
                </li>
                <li className={cn("w-[100px] block relative", "flex-grow-0 flex-shrink-0")}>
                  <input
                    type="password"
                    className={cn("bg-transparent focus:outline-none", "text-light-color-3/60 placeholder:text-light-color-3/20", "p-2")}
                    maxLength={8}
                    name={`[##_rp_input_password_##]`}
                    tt-value={`[##_rp_admin_check_##]`}
                    placeholder={`비밀번호`}
                  />
                </li>
              </s_rp_guest>
              <li className={cn("w-full flex gap-2 items-center relative", "flex-grow flex-shrink", "min-w-0 overflow-hidden")}>
                <input
                  type="checkbox"
                  id={`[##_rp_input_is_secret_##]`}
                  name={`[##_rp_input_is_secret_##]`}
                  className="w-[16px] h-[16px] bg-transparent border border-light-color-3/60"
                />
                <label htmlFor="secret" className="text-light-color-3/40">
                  비밀글
                </label>
              </li>
            </ul>
          </div>
        </s_rp_member>
        <div className="w-full relative">
          <ul className="w-full flex min-w-0 overflow-hidden items-center relative gap-2">
            <li className={cn("w-[22px] block aspect-square relative", "flex-grow-0 flex-shrink-0")}>
              <MessageCircle className="text-light-color-3/60" />
            </li>
            <li className="inline-flex w-full flex-grow flex-shrink min-w-0 overflow-hidden relative">
              <textarea
                name={`[##_rp_input_comment_##]`}
                placeholder={`댓글을 입력할 수 있습니다.`}
                className={cn(
                  "w-full h-[40px] p-2",
                  "focus:outline-none",
                  "text-light-color-3/60 placeholder:text-light-color-3/20",
                  "resize-none",
                  "bg-transparent"
                )}
              />
            </li>
            <li
              className={cn("w-[22px] block aspect-square relative", "flex-grow-0 flex-shrink-0", "cursor-pointer")}
              tt-onclick={`[##_rp_onclick_submit_##]`}
            >
              <Send className="text-light-color-3/60" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
