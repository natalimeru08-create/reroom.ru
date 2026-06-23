const house = document.getElementById("house-shape");
const w1 = document.getElementById("window-1");
const w2 = document.getElementById("window-2");

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
