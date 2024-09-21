import { isAdmin } from "@/common/functions";
import { compareVersion } from "@wisdomstar94/vanilla-js-util";
import { version } from "../../../package.json";
import axios from "axios";

function getModal(modalId: string) {
  return document.querySelector<HTMLElement>(`#${modalId}`);
}

function latestVersionCheck(modalId: string) {
  if (!isAdmin()) {
    return;
  }

  const modal = getModal(modalId);
  if (modal === null) {
    console.warn("최신 버전 체크 처리를 위한 모달창이 존재하지 않습니다.");
    return;
  }

  const checkAtTime = getLatestVersionCheckAtTime();
  if (Date.now() - checkAtTime <= 1000 * 60 * 5) {
    // 가장 마지막으로 체크한 시간으로부터 아직 5분이 지나지 않은 경우에는 체크 막기
    console.log("#latest version check a few moment holding..");
    return;
  }

  console.log("#latest version check start..");
  localStorage.setItem("latest-version-check-at-time", Date.now().toString());

  axios.get(`https://cdn.jsdelivr.net/gh/wisdomstar94/tistory-discord-ui-skin/package.json?t=${Date.now()}`).then((res) => {
    const result = res.data;
    const latestVersion = result.version;
    if (typeof latestVersion !== "string") {
      console.warn(`스킨 최신 버전 정보를 가져올 수 없습니다.`);
      return;
    }

    const onlyLatestVersion = latestVersion.replace("v", "");
    const versionCompareResult = compareVersion(version, onlyLatestVersion);
    if (versionCompareResult === "same") {
      // 최신 버전
      // ..
      console.log("#version is already latest!");
      return;
    }

    if (versionCompareResult === "right-higher") {
      // 최신 버전 아님
      // ..
      if (getLatestVversionHideTargetTime() <= Date.now()) {
        const modal = getModal(modalId);
        modal?.classList.remove("modal-close");
        modal?.classList.add("modal-open");
      }
    }
  });
}

(window as any).latestVersionCheck = latestVersionCheck;

function negativeButtonClick(modalId: string) {
  // const modal = getModal(modalId);
  localStorage.setItem("latest-version-hide-target-time", (Date.now() + 1000 * 60 * 60 * 24 * 30).toString());
  // modal?.classList.add("modal-close");
  // modal?.classList.remove("modal-open");
}

(window as any).negativeButtonClick = negativeButtonClick;

function positiveButtonClick(modalId: string) {
  window.open(`https://github.com/wisdomstar94/tistory-discord-ui-skin/releases/latest`, "_blank");

  const modal = getModal(modalId);
  modal?.classList.remove("modal-open");
  modal?.classList.add("modal-close");
}

(window as any).positiveButtonClick = positiveButtonClick;

function getLatestVversionHideTargetTime() {
  const latestVversionHideTargetTime = localStorage.getItem("latest-version-hide-target-time");
  if (latestVversionHideTargetTime === null) return 0;

  const number = Number(latestVversionHideTargetTime);
  if (isNaN(number)) {
    return 0;
  }

  return number;
}

function getLatestVersionCheckAtTime() {
  const time = localStorage.getItem("latest-version-check-at-time");
  if (time === null) {
    const value = Date.now() - 1000 * 60 * 6;
    localStorage.setItem("latest-version-check-at-time", value.toString());
    return value;
  }

  const number = Number(time);
  if (isNaN(number)) {
    const value = Date.now() - 1000 * 60 * 6;
    localStorage.setItem("latest-version-check-at-time", value.toString());
    return value;
  }

  return number;
}

function goToSkinLatestPage(modalId: string) {
  const modal = getModal(modalId);

  window.open("https://github.com/wisdomstar94/tistory-discord-ui-skin/releases/latest", "_blank");
  modal?.classList.remove("modal-open");
  modal?.classList.add("modal-close");
}

(window as any).goToSkinLatestPage = goToSkinLatestPage;
