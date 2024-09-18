import { CommentInputForm } from "../commnet-input-form/comment-input-form.component";
import { CommentList } from "../commnet-list/commnet-list.component";

export function GuestBook() {
  return (
    <>
      <s_guest>
        <CommentList isGuestBook />
        <s_guest_input_form>
          <CommentInputForm isGuestbook />
        </s_guest_input_form>
      </s_guest>
    </>
  );
}
