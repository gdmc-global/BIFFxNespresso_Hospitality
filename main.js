// Lightweight scroll-spy: highlights the current section's
// entry in the on-page table of contents as the guest scrolls.
(function () {
  var sections = document.querySelectorAll(".category[id]");
  var tocLinks = document.querySelectorAll(".toc a[href^='#']");
  if (!sections.length || !tocLinks.length) return;

  var map = {};
  tocLinks.forEach(function (a) {
    map[a.getAttribute("href").slice(1)] = a;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = map[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          tocLinks.forEach(function (a) { a.style.background = ""; });
          link.style.background = "var(--blush-soft)";
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach(function (s) { observer.observe(s); });
})();
