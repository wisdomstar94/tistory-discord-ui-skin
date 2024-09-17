import { subscribeElement } from "@wisdomstar94/vanilla-js-util";

window.addEventListener("load", () => {
  const rpList = document.querySelector<HTMLElement>('[data-title="rp-list"]');
  if (rpList === null) return;

  const observer = subscribeElement({
    target: rpList,
    options: {
      subtree: true,
      childList: true,
    },
    callback: (mutations) => {
      // ...
      // checkRpList();
      // observer.disconnect();
    },
  });
});

function checkRpList() {
  const rpList = document.querySelector<HTMLElement>('[data-title="rp-list"]');
  if (rpList === null) return;

  const rpItems = rpList.querySelectorAll<HTMLElement>('[data-title="rp-item"]');
  if (rpItems.length === 0) return;

  rpItems.forEach((rpItem) => {
    const rpProfileImage = rpItem.querySelector<HTMLElement>('[data-title="rp-profile-image"]');
    if (rpProfileImage === null) return;

    const rpProfileName = rpItem.querySelector<HTMLElement>('[data-title="rp-profile-name"]');
    if (rpProfileName === null) return;

    const rpDesc = rpItem.querySelector<HTMLElement>('[data-title="rp-desc"]');
    if (rpDesc === null) return;

    const rpDateArea = rpItem.querySelector<HTMLElement>('[data-title="rp-date-area"]');
    if (rpDateArea === null) return;

    const datetime = rpDateArea.textContent;
    const renderString = getRenderDateTimeString(datetime ?? "");
    rpDateArea.textContent = renderString;
    // console.log("@", { rpProfileImageSrc, rpProfileName, rpDesc });

    const subRpList = rpItem.querySelector<HTMLElement>('[data-title="sub-rp-list"]');
    if (subRpList === null) return;

    const subRpListItems = subRpList.querySelectorAll<HTMLElement>('[data-title="sub-rp-item"]');
    if (subRpListItems.length === 0) return;

    subRpListItems.forEach((subRpItem) => {
      const subRpProfileImage = subRpItem.querySelector<HTMLElement>('[data-title="sub-rp-profile-image-area"] img');
      if (subRpProfileImage !== null) {
        subRpProfileImage.setAttribute("src", rpProfileImage.getAttribute("src") ?? "");
        subRpProfileImage.classList.remove("hidden");
      }

      const subRpProfileName = subRpItem.querySelector<HTMLElement>('[data-title="sub-rp-profile-name-area"]');
      if (subRpProfileName !== null) {
        subRpProfileName.textContent = "@" + rpProfileName.textContent;
      }

      const subRpProfileDesc = subRpItem.querySelector<HTMLElement>('[data-title="sub-rp-profile-desc-area"]');
      if (subRpProfileDesc !== null) {
        subRpProfileDesc.textContent = rpDesc.textContent;
      }

      const subRpDateArea = subRpItem.querySelector<HTMLElement>('[data-title="sub-rp-date-area"]');
      if (subRpDateArea === null) return;

      const datetime = subRpDateArea.textContent;
      const renderString = getRenderDateTimeString(datetime ?? "");
      subRpDateArea.textContent = renderString;
    });
  });
}

function getRenderDateTimeString(datetimeString: string) {
  const datetime = datetimeString.trim();
  const datetimeSplit = datetime.split(" ");
  const date = datetimeSplit[0];
  const time = datetimeSplit[1];

  const dateSplit = date.split(".");
  const year = dateSplit[0];
  const month = dateSplit[1];
  const day = dateSplit[2];

  const timeSplit = time.split(":");
  const hour = timeSplit[0];
  const minute = timeSplit[1];

  let amOrPm = "";
  const hour24 = Number(hour);
  if (hour24 < 12) {
    amOrPm = "오전";
  } else {
    amOrPm = "오후";
  }

  let hour12 = "";
  if (hour24 <= 12) {
    hour12 = hour24.toString().padStart(2, "0");
  } else {
    hour12 = (hour24 - 12).toString().padStart(2, "0");
  }

  const renderString = year + "." + month + "." + day + ". " + amOrPm + " " + hour12 + ":" + minute;
  return renderString;
}
