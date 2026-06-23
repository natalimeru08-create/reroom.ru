const house = document.getElementById("house-shape");
const w1 = document.getElementById("window-1");
const w2 = document.getElementById("window-2");
const section = document.querySelector(".about");
const hand = document.querySelector(".about__hand");

const states = [
  {
    shape: "0,700 280,250 760,0 900,200 930,700",

    win1: "465,243 537,222 537,386 465,386",

    win2: "312,280 384,265 384,386 312,386",
  },

  {
    shape: "0,700 300,120 520,0 850,200 930,700",

    win1: "370,145 440,115 420,205 345,230",

    win2: "345,255 420,225 400,320 315,350",
  },

  {
    shape: "450,700 450,120 700,0 900,0 900,700",

    win1: "480,180 530,160 530,280 480,300",

    win2: "480,320 530,300 530,420 480,440",
  },

  {
    shape: "0,700 0,400 820,0 1000,0 1000,700",
    win1: "85,500 125,480 125,610 85,630",

    win2: "610,260 650,240 650,360 610,380",
  },

  {
    shape: "0,700 0,250 220,120 420,250 420,700",

    win1: "310,260 350,275 350,385 310,370",

    win2: "370,275 410,290 410,400 370,385",
  },

  {
    shape: "0,700 0,300 500,0 1000,300 1000,700",

    win1: "271,282 336,282 336,389 271,388",

    win2: "367,282 433,282 433,389 367,388",
  },
];
let current = 0;

function setState(state) {
  house.setAttribute("points", state.shape);

  w1.setAttribute("points", state.win1);

  w2.setAttribute("points", state.win2);
}

function morph(next) {
  const state = states[next];

  gsap.to(house, {
    duration: 2.5,
    ease: "power2.inOut",
    attr: {
      points: state.shape,
    },
  });

  gsap.to(w1, {
    duration: 2.5,
    ease: "power2.inOut",
    attr: {
      points: state.win1,
    },
  });

  gsap.to(w2, {
    duration: 2.5,
    ease: "power2.inOut",
    attr: {
      points: state.win2,
    },
  });
}

setState(states[0]);

setInterval(() => {
  current++;

  if (current >= states.length) {
    current = 0;
  }

  morph(current);
}, 3000);

// рука

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();

  let progress =
    (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

  progress = Math.max(0, Math.min(1, progress));

  progress = 0.7 + progress * 0.5;

  const startX = 40;
  const endX = 0;

  const currentX = startX - (startX - endX) * progress;

  hand.style.transform = `translateX(${currentX}vw)`;
});

// 3+4
const process = document.querySelector(".process");

const scene1 = document.querySelector(".scene--1");
const scene2 = document.querySelector(".scene--2");

const pin = document.querySelector(".pin");

const door = document.querySelector(".door");

const knocks = document.querySelectorAll(".knock");

window.addEventListener("scroll", () => {
  const rect = process.getBoundingClientRect();

  let progress =
    (window.innerHeight - rect.top) /
    (process.offsetHeight - window.innerHeight);

  progress = Math.max(0, Math.min(progress, 1));

  /* ПИН */

  const pinProgress = Math.min(progress / 0.25, 1);

  pin.style.opacity = pinProgress;

  if (pinProgress < 1) {
    pin.style.transform = `
    scale(${0.4 + pinProgress * 0.6})
  `;
  } else {
    const swing = Math.sin(Date.now() / 150) * 4;

    pin.style.transform = `
    scale(1)
    rotate(${swing}deg)
  `;
  }

  /* СЦЕНА 1 */

  if (progress <= 0.45) {
    scene1.style.opacity = 1;
    scene2.style.opacity = 0;
  }

  /* ПЕРЕКЛЮЧЕНИЕ */

  if (progress > 0.45 && progress < 0.65) {
    const t = (progress - 0.45) / 0.2;

    scene1.style.opacity = 1 - t;
    scene2.style.opacity = t;
  }

  /* СЦЕНА 2 */

  if (progress >= 0.65) {
    scene1.style.opacity = 0;
    scene2.style.opacity = 1;
  }

  /* ДВЕРЬ */

  if (progress > 0.7) {
    const doorProgress = Math.min((progress - 0.7) / 0.15, 1);

    door.style.transform = `scaleY(${doorProgress})`;
  }

  /* СТУК */

  if (progress > 0.82) {
    const time = Date.now() / 200;

    knocks.forEach((item) => {
      item.style.opacity = 0;
    });

    const phase = Math.floor(time % 6);

    if (phase < 3) {
      document.querySelector(".knock--1").style.opacity = 1;
      document.querySelector(".knock--2").style.opacity = 1;
      document.querySelector(".knock--3").style.opacity = 1;
    } else {
      document.querySelector(".knock--4").style.opacity = 1;
      document.querySelector(".knock--5").style.opacity = 1;
      document.querySelector(".knock--6").style.opacity = 1;
    }
  }
});

const locations = document.querySelector(".locations");

const map = document.querySelector(".locations__map");
const points = document.querySelectorAll(".point");

window.addEventListener("scroll", () => {
  const rect = locations.getBoundingClientRect();

  let progress =
    (window.innerHeight - rect.top) /
    (locations.offsetHeight - window.innerHeight);

  progress = Math.max(0, Math.min(progress, 1));

  /* КАРТА */

  if (progress > 0.15) {
    const mapProgress = Math.min((progress - 0.15) / 0.15, 1);

    map.style.opacity = mapProgress;
  }
  

  /* ТОЧКИ */

  points.forEach((point, index) => {
    const start = 0.35 + index * 0.03;

    let pointProgress = (progress - start) / 0.05;

    pointProgress = Math.max(0, Math.min(pointProgress, 1));

    point.style.transform = `scale(${pointProgress})`;
  });
});
