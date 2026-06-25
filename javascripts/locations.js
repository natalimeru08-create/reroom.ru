const photos = document.querySelectorAll(".nearby__photo");

photos.forEach((photo, index) => {
  photo.style.animationDelay = `${index * 0.8}s`;
});

const cards = document.querySelectorAll(".location-card");

const popup = document.getElementById("locationPopup");

const closeBtn = document.querySelector(".location-popup__close");

const track = document.querySelector(".gallery-track");

const slides = document.querySelectorAll(".gallery-track img");

// Карточки

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.dataset.location === "paveletskaya") {
      popup.classList.add("active");
    } else {
      window.location.href = "404.html";
    }
  });
});

// Закрытие попапа

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

const slider = document.getElementById("roomsSlider");

const originalCards = slider.innerHTML;

slider.innerHTML =
  originalCards + originalCards + originalCards + originalCards;

window.addEventListener("load", () => {
  slider.scrollLeft = slider.scrollWidth / 3;
});

slider.addEventListener("scroll", () => {
  const sectionWidth = slider.scrollWidth / 4;

  if (slider.scrollLeft <= sectionWidth * 0.5) {
    slider.scrollLeft += sectionWidth;
  }

  if (slider.scrollLeft >= sectionWidth * 2.5) {
    slider.scrollLeft -= sectionWidth;
  }
});
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
