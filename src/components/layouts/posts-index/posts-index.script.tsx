import { unwrap } from "@wisdomstar94/vanilla-js-util";

window.addEventListener("load", () => {
  initPostsIndex();
});

function postsIndexToggleButtonClick() {
  if (document.body.classList.contains("posts-index-open")) {
    document.body.classList.remove("posts-index-open");
    document.body.classList.add("posts-index-close");
  } else {
    document.body.classList.remove("posts-index-close");
    document.body.classList.add("posts-index-open");
  }
}

(window as any).postsIndexToggleButtonClick = postsIndexToggleButtonClick;

function initPostsIndex() {
  if (document.body.id !== "tt-body-page") {
    return;
  }

  const articleDescriptionDiv = unwrap(
    document.querySelector<HTMLElement>(`#article-description > div:first-child`),
    "#article-description 요소가 없습니다."
  );

  const headTags = articleDescriptionDiv.querySelectorAll<HTMLElement>("h2, h3, h4");
  if (headTags.length === 0) {
    document.body.classList.add("no-posts-index");
    return;
  }

  const postsIndexList = unwrap(
    document.querySelector<HTMLElement>(`[data-title="posts-index-list"]`),
    `[data-title="posts-index-list"] 요소가 없습니다.`
  );

  // console.log("@headTags", headTags);
  headTags.forEach((headTag, index) => {
    headTag.setAttribute("data-index", index.toString());

    if (typeof headTag.textContent !== "string") {
      return;
    }
    if (headTag.textContent.trim() === "") {
      return;
    }

    const liTemplateList = unwrap(
      document.querySelector<HTMLElement>('[data-title="posts-index-li-template-list"]'),
      `[data-title="posts-index-li-template-list"] 요소가 없습니다.`
    );

    const liTemplate = liTemplateList.querySelector<HTMLElement>(`[data-title='${headTag.nodeName.toLowerCase()}-li']`);
    if (liTemplate === null) {
      console.warn(`${headTag.nodeName} 태그는 목차 기능에 포함되지 않습니다.`);
      return;
    }

    // console.log("@liTemplate", liTemplate);
    const li = liTemplate.cloneNode(true);
    if (!(li instanceof HTMLElement)) {
      console.warn(`li 가 HTMLElement 가 아닙니다.`);
      return;
    }

    li.setAttribute("data-index", index.toString());
    const onlyText = unwrap(li.querySelector('[data-title="only-text"]'), `[data-title="only-text"] 요소가 없습니다.`);
    onlyText.textContent = headTag.textContent;

    li.addEventListener("click", () => {
      headTag.scrollIntoView({ behavior: "smooth" });
    });

    postsIndexList.appendChild(li);
  });
}

function checkDefaultDisplay() {
  if (document.body.id === "tt-body-page") {
    if (document.body.classList.contains("posts_index_default_display_show")) {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        document.body.classList.add("posts-index-open");
      }
      setTimeout(() => {
        document.body.classList.remove("posts_index_default_display_show");
      }, 300);
    }
  }
}

(window as any).checkDefaultDisplay = checkDefaultDisplay;
