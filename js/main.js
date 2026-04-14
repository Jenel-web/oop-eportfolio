// ── Mobile menu toggle ──
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

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

// ── Active nav link highlight based on current page ──
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((link) => {
  const href = link.getAttribute("href");
  if (
    (currentPage === "index.html" && (href === "index.html" || href === "#")) ||
    (href && href !== "#" && currentPage === href)
  ) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
