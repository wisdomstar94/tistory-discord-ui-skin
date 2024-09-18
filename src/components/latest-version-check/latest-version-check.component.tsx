import { ModalTemplate } from "../modal-template/modal-template.component";
import { Script } from "../script/script.component";

export function LatestVersionCheck() {
  const modalId = "skin-latest-version-notice-modal";

  return (
    <>
      <ModalTemplate
        id={modalId}
        title={"스킨 업데이트 안내"}
        description={
          <div className="w-full relative flex flex-wrap gap-2">
            <div className="w-full text-center">
              현재 이용하고 계신 스킨의 버전보다 더 높은 최신 버전이 감지 되었습니다. 최신버전 스킨 파일을 다운로드 받을 수 있는 페이지로
              이동하시겠습니까?
            </div>
            <div className="w-full text-center text-light-color-3/50">
              ("아니오" 를 선택할 시 30일 동안 최신 버전이 감지되어도 모달 창이 표시되지 않습니다.)
            </div>
          </div>
        }
        cancelButtonOnClick={`negativeButtonClick('${modalId}');`}
        okButtonOnClick={""}
      />
      <Script
        html={`
          window.addEventListener('load', () => {
            latestVersionCheck('${modalId}');    
          });
        `}
      />
    </>
  );
}
