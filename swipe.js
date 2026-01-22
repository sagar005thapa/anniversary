<script>
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  const diff = startX - e.changedTouches[0].clientX;
  const pages = [
    "index.html",
    "journey.html",
    "memories.html",
    "promises.html",
    "letter.html"
  ];
  const current = location.pathname.split("/").pop();
  let index = pages.indexOf(current);

  if (diff > 80 && index < pages.length - 1)
    location.href = pages[index + 1];

  if (diff < -80 && index > 0)
    location.href = pages[index - 1];
});
</script>
