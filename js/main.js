// ── Mobile menu toggle ──
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });
}

// ── Active nav link based on current page ──
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((link) => {
  const href = link.getAttribute("href") || "";
  const linkPage = href.split("/").pop();
  if (
    (currentPage === "index.html" && (href === "index.html" || href === "#")) ||
    (linkPage && linkPage !== "#" && currentPage === linkPage)
  ) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// ── Shared accordion toggle (Updated for Dynamic Height) ──
function initAccordions() {
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const content = trigger.nextElementSibling;
      if (!content || !content.classList.contains("accordion-content")) return;

      const isOpen = trigger.classList.contains("open");

      if (isOpen) {
        // Close it: Reset max-height to 0
        trigger.classList.remove("open");
        content.classList.remove("open");
        content.style.maxHeight = null;
      } else {
        // Open it: Set max-height to the scrollHeight (actual size of images/text)
        trigger.classList.add("open");
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", initAccordions);
