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
