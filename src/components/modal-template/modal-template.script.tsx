import { unwrap } from "@wisdomstar94/vanilla-js-util";

function modalBgClick(id: string) {
  closeModal(id);
}

function modalCancelButtonClick(id: string) {
  closeModal(id);
}

function closeModal(id: string) {
  const modalContainer = unwrap(document.querySelector<HTMLElement>(`#${id}`), "해당 modal 이 없습니다.");
  modalContainer.classList.remove("modal-open");
  modalContainer.classList.add("modal-close");
}

(window as any).modalBgClick = modalBgClick;
(window as any).modalCancelButtonClick = modalCancelButtonClick;
