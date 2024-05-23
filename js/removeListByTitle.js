document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.title;
  document.querySelectorAll('.ee-right-menu ul a').forEach(anchor => {
    if (anchor.textContent.trim() === pageTitle) {
      anchor.remove();
    }
  });
});
