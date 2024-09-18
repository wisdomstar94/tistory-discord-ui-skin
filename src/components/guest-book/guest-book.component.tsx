import { CommentInputForm } from "../commnet-input-form/comment-input-form.component";
import { CommentList } from "../commnet-list/commnet-list.component";

export function GuestBook() {
  return (
    <>
      <s_guest>
        <div className="h-[16px] w-full"></div>
        <CommentList isGuestBook />
        <div className="h-[16px] w-full"></div>
        <s_guest_input_form>
          <CommentInputForm isGuestbook />
        </s_guest_input_form>
      </s_guest>
    </>
  );
}
