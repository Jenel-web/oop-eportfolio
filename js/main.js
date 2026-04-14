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

// ── Shared accordion toggle (DRY) ──
// Works for any .accordion-trigger paired with a following .accordion-content
function initAccordions() {
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const content = trigger.nextElementSibling;
      if (!content || !content.classList.contains("accordion-content")) return;

      const isOpen = trigger.classList.contains("open");

      // Toggle this one
      trigger.classList.toggle("open", !isOpen);
      content.classList.toggle("open", !isOpen);
    });
  });
}

document.addEventListener("DOMContentLoaded", initAccordions);
