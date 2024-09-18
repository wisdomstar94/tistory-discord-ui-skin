window.addEventListener("load", () => {
  const articleList = document.querySelector<HTMLElement>('[data-title="article-list"]');
  if (articleList === null) return;

  if (articleList.children.length === 0) {
    document.body.classList.add("list-empty");
  }
});
