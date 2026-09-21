
const planets = {

  Sun: {
    type: "STAR",
    emoji: "☀️",

    description:
      "The Sun is the star at the center of our Solar System. " +
      "It is a massive ball of hot plasma whose energy drives " +
      "Earth's climate and makes life possible.",

    diameter: "1,392,700 km",
    mass: "1.989 × 10³⁰ kg",
    gravity: "274 m/s²",
    distance: "0 km",
    day: "~25 days",
    year: "—"
  },


  Mercury: {
    type: "TERRESTRIAL PLANET",
    emoji: "☿️",

    description:
      "Mercury is the smallest planet in the Solar System " +
      "and the closest planet to the Sun. Its surface experiences " +
      "huge temperature differences between day and night.",

    diameter: "4,879 km",
    mass: "3.301 × 10²³ kg",
    gravity: "3.70 m/s²",
    distance: "57.9 million km",
    day: "58.6 Earth days",
    year: "88 Earth days"
  },


  Venus: {
    type: "TERRESTRIAL PLANET",
    emoji: "♀️",

    description:
      "Venus is the second planet from the Sun. " +
      "Its thick carbon-dioxide atmosphere creates an intense " +
      "greenhouse effect, making it the hottest planet.",

    diameter: "12,104 km",
    mass: "4.867 × 10²⁴ kg",
    gravity: "8.87 m/s²",
    distance: "108.2 million km",
    day: "243 Earth days",
    year: "224.7 Earth days"
  },


  Earth: {
    type: "TERRESTRIAL PLANET",
    emoji: "🌍",

    description:
      "Earth is our home planet and currently the only known world " +
      "with life. Its surface contains abundant liquid water and " +
      "a nitrogen-rich atmosphere.",

    diameter: "12,742 km",
    mass: "5.972 × 10²⁴ kg",
    gravity: "9.81 m/s²",
    distance: "149.6 million km",
    day: "23h 56m",
    year: "365.25 days"
  },


  Mars: {
    type: "TERRESTRIAL PLANET",
    emoji: "🔴",

    description:
      "Mars is the fourth planet from the Sun and is often called " +
      "the Red Planet because iron minerals in its soil oxidize " +
      "and give the surface a reddish appearance.",

    diameter: "6,779 km",
    mass: "6.417 × 10²³ kg",
    gravity: "3.71 m/s²",
    distance: "227.9 million km",
    day: "24h 37m",
    year: "687 Earth days"
  },


  Jupiter: {
    type: "GAS GIANT",
    emoji: "🟠",

    description:
      "Jupiter is the largest planet in the Solar System. " +
      "It is a gas giant with powerful storms, including the " +
      "famous Great Red Spot.",

    diameter: "139,820 km",
    mass: "1.898 × 10²⁷ kg",
    gravity: "24.79 m/s²",
    distance: "778.5 million km",
    day: "9h 56m",
    year: "11.86 Earth years"
  },


  Saturn: {
    type: "GAS GIANT",
    emoji: "🪐",

    description:
      "Saturn is the sixth planet from the Sun and is famous for " +
      "its spectacular ring system. Its rings are made mostly " +
      "of ice particles mixed with rocky material.",

    diameter: "116,460 km",
    mass: "5.683 × 10²⁶ kg",
    gravity: "10.44 m/s²",
    distance: "1.43 billion km",
    day: "10h 42m",
    year: "29.45 Earth years"
  },


  Uranus: {
    type: "ICE GIANT",
    emoji: "🔵",

    description:
      "Uranus is an ice giant with a very unusual rotation. " +
      "Its axis is tilted by about 98 degrees, making the planet " +
      "appear to rotate almost on its side.",

    diameter: "50,724 km",
    mass: "8.681 × 10²⁵ kg",
    gravity: "8.69 m/s²",
    distance: "2.87 billion km",
    day: "17h 14m",
    year: "84 Earth years"
  },


  Neptune: {
    type: "ICE GIANT",
    emoji: "🔵",

    description:
      "Neptune is the eighth recognized planet from the Sun. " +
      "It has some of the fastest winds observed in the Solar System " +
      "and a deep blue appearance.",

    diameter: "49,244 km",
    mass: "1.024 × 10²⁶ kg",
    gravity: "11.15 m/s²",
    distance: "4.50 billion km",
    day: "16h 6m",
    year: "164.8 Earth years"
  }

};

const system = document.getElementById("solarSystem");

const planetElements =
  document.querySelectorAll(".planet");

const sun =
  document.querySelector(".sun");

const pauseBtn =
  document.getElementById("pauseBtn");

const resetBtn =
  document.getElementById("resetBtn");

const speedRange =
  document.getElementById("speedRange");

const speedValue =
  document.getElementById("speedValue");


/* Info */

const planetName =
  document.getElementById("planetName");

const planetType =
  document.getElementById("planetType");

const planetEmoji =
  document.getElementById("planetEmoji");

const planetDescription =
  document.getElementById("planetDescription");

const diameter =
  document.getElementById("diameter");

const mass =
  document.getElementById("mass");

const gravity =
  document.getElementById("gravity");

const distance =
  document.getElementById("distance");

const day =
  document.getElementById("day");

const year =
  document.getElementById("year");


/* =====================================================
   PLANET ORBIT CONFIG
   ===================================================== */

const orbitData = {

  Mercury: {
    radius: 7.5,
    speed: 4.15,
    angle: Math.random() * Math.PI * 2
  },

  Venus: {
    radius: 11.5,
    speed: 2.8,
    angle: Math.random() * Math.PI * 2
  },

  Earth: {
    radius: 16,
    speed: 2.2,
    angle: Math.random() * Math.PI * 2
  },

  Mars: {
    radius: 21,
    speed: 1.65,
    angle: Math.random() * Math.PI * 2
  },

  Jupiter: {
    radius: 28.5,
    speed: 0.72,
    angle: Math.random() * Math.PI * 2
  },

  Saturn: {
    radius: 35,
    speed: 0.53,
    angle: Math.random() * Math.PI * 2
  },

  Uranus: {
    radius: 41,
    speed: 0.37,
    angle: Math.random() * Math.PI * 2
  },

  Neptune: {
    radius: 47,
    speed: 0.27,
    angle: Math.random() * Math.PI * 2
  }

};


let running = true;

let simulationSpeed = 1;

let lastTime = performance.now();


function showPlanet(name) {

  const data = planets[name];

  if (!data) {
    return;
  }

  planetName.textContent =
    name === "Sun"
      ? "The Sun"
      : name;

  planetType.textContent =
    data.type;

  planetEmoji.textContent =
    data.emoji;

  planetDescription.textContent =
    data.description;

  diameter.textContent =
    data.diameter;

  mass.textContent =
    data.mass;

  gravity.textContent =
    data.gravity;

  distance.textContent =
    data.distance;

  day.textContent =
    data.day;

  year.textContent =
    data.year;


  const info =
    document.getElementById("planetInfo");

  if (info) {

    info.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

  }

}


planetElements.forEach((planet) => {

  planet.addEventListener("click", () => {

    const name =
      planet.dataset.planet;

    showPlanet(name);

  });

});



sun.addEventListener("click", () => {

  showPlanet("Sun");

});


function animate(currentTime) {

  const delta =
    Math.min(
      (currentTime - lastTime) / 1000,
      0.05
    );

  lastTime = currentTime;


  if (running) {

    Object.entries(orbitData)
      .forEach(([name, data]) => {

        const element =
          document.querySelector(
            `[data-planet="${name}"]`
          );

        if (!element) {
          return;
        }


        data.angle +=
          delta *
          data.speed *
          simulationSpeed;


        const angle =
          data.angle;


        const x =
          Math.cos(angle) *
          data.radius;

        const y =
          Math.sin(angle) *
          data.radius;


        element.style.left =
          `${50 + x}%`;

        element.style.top =
          `${50 + y}%`;

      });

  }


  requestAnimationFrame(animate);

}


requestAnimationFrame(animate);


/* =====================================================
   SPEED CONTROL
   ===================================================== */

speedRange.addEventListener(
  "input",
  () => {

    simulationSpeed =
      Number(speedRange.value);

    speedValue.textContent =
      `${simulationSpeed}x`;

  }
);


/* =====================================================
   PAUSE / RESUME
   ===================================================== */

pauseBtn.addEventListener(
  "click",
  () => {

    running = !running;

    pauseBtn.textContent =
      running
        ? "⏸ Pause"
        : "▶ Resume";

  }
);



resetBtn.addEventListener(
  "click",
  () => {

    simulationSpeed = 1;

    speedRange.value = 1;

    speedValue.textContent = "1x";


    Object.values(orbitData)
      .forEach((planet) => {

        planet.angle =
          Math.random() *
          Math.PI *
          2;

      });


    if (!running) {

      running = true;

      pauseBtn.textContent =
        "⏸ Pause";

    }

  }
);


const menuBtn =
  document.getElementById("menuBtn");

const nav =
  document.querySelector(".navbar nav");


menuBtn.addEventListener(
  "click",
  () => {

    const visible =
      nav.style.display === "flex";

    nav.style.display =
      visible ? "none" : "flex";

    if (!visible) {

      nav.style.position = "absolute";

      nav.style.top = "78px";

      nav.style.left = "15px";

      nav.style.right = "15px";

      nav.style.padding = "20px";

      nav.style.flexDirection = "column";

      nav.style.background =
        "rgba(3,7,18,.96)";

      nav.style.border =
        "1px solid rgba(148,163,184,.15)";

      nav.style.borderRadius = "12px";

    }

  }
);


document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.target.tagName === "INPUT" ||
      event.target.tagName === "TEXTAREA"
    ) {
      return;
    }


    /* Space = pause */

    if (event.code === "Space") {

      event.preventDefault();

      pauseBtn.click();

    }


    /* R = reset */

    if (
      event.key.toLowerCase() === "r"
    ) {

      resetBtn.click();

    }

  }
);


showPlanet("Sun");


console.log(
  "🚀 SolarVerse initialized successfully."
);

console.log(
  "Created by Anshuman Singh"
);

