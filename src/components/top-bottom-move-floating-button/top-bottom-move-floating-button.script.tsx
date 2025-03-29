function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.goToTop = goToTop;

function goToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

window.goToBottom = goToBottom;
