const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".mobile-menu__close");

if (burger) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-menu__close");

  if (!burger || !mobileMenu || !closeBtn) return;

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });

  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
