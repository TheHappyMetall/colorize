const app = document.querySelector("#app");
const scoreArea = document.querySelector("#score");
let score = scoreArea.textContent;
const HexColor = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const artSelects = document.querySelectorAll(".art-select");
const drawings = {
  Circle: [
    "n25",
    "n33",
    "n36",
    "n42",
    "n47",
    "n51",
    "n58",
    "n60",
    "n69",
    "n70",
    "n79",
    "n81",
    "n88",
    "n92",
    "n97",
    "n103",
    "n106",
    "n114",
    "n115",
    "n24",
  ],
  Rectangle: [
    "n0",
    "n1",
    "n2",
    "n3",
    "n4",
    "n5",
    "n6",
    "n7",
    "n8",
    "n9",
    "n19",
    "n29",
    "n39",
    "n49",
    "n59",
    "n69",
    "n79",
    "n89",
    "n99",
    "n109",
    "n119",
    "n129",
    "n139",
    "n149",
    "n148",
    "n147",
    "n146",
    "n145",
    "n144",
    "n143",
    "n142",
    "n141",
    "n140",
    "n130",
    "n120",
    "n110",
    "n100",
    "n90",
    "n80",
    "n70",
    "n60",
    "n50",
    "n40",
    "n30",
    "n20",
    "n10",
  ],

  HorizontalLines: [
    "n10",
    "n11",
    "n12",
    "n13",
    "n14",
    "n15",
    "n16",
    "n17",
    "n18",
    "n19",
    "n30",
    "n31",
    "n32",
    "n33",
    "n34",
    "n35",
    "n36",
    "n37",
    "n38",
    "n39",
    "n50",
    "n51",
    "n52",
    "n53",
    "n54",
    "n55",
    "n56",
    "n57",
    "n58",
    "n59",
    "n70",
    "n71",
    "n72",
    "n73",
    "n74",
    "n75",
    "n76",
    "n77",
    "n78",
    "n79",
    "n90",
    "n91",
    "n92",
    "n93",
    "n94",
    "n95",
    "n96",
    "n97",
    "n98",
    "n99",
    "n110",
    "n111",
    "n112",
    "n113",
    "n114",
    "n115",
    "n116",
    "n117",
    "n118",
    "n119",
    "n130",
    "n131",
    "n132",
    "n133",
    "n134",
    "n135",
    "n136",
    "n137",
    "n138",
    "n139",
  ],
  Bricks: [
    "n0",
    "n1",
    "n6",
    "n7",
    "n8",
    "n9",
    "n10",
    "n11",
    "n16",
    "n17",
    "n18",
    "n19",
    "n20",
    "n21",
    "n26",
    "n27",
    "n28",
    "n29",
    "n50",
    "n51",
    "n52",
    "n53",
    "n54",
    "n60",
    "n61",
    "n62",
    "n63",
    "n64",
    "n70",
    "n71",
    "n72",
    "n73",
    "n74",
    "n80",
    "n81",
    "n82",
    "n83",
    "n84",
    "n87",
    "n88",
    "n89",
    "n97",
    "n98",
    "n99",
    "n107",
    "n108",
    "n109",
    "n120",
    "n121",
    "n122",
    "n123",
    "n124",
    "n130",
    "n131",
    "n132",
    "n133",
    "n134",
    "n140",
    "n141",
    "n142",
    "n143",
    "n144",
  ],
  Spiral: [
    "n10",
    "n11",
    "n12",
    "n13",
    "n14",
    "n15",
    "n16",
    "n17",
    "n18",
    "n20",
    "n28",
    "n30",
    "n32",
    "n33",
    "n34",
    "n35",
    "n36",
    "n38",
    "n40",
    "n42",
    "n46",
    "n48",
    "n50",
    "n52",
    "n54",
    "n56",
    "n58",
    "n60",
    "n62",
    "n64",
    "n66",
    "n68",
    "n70",
    "n72",
    "n74",
    "n76",
    "n78",
    "n80",
    "n82",
    "n84",
    "n86",
    "n88",
    "n90",
    "n92",
    "n94",
    "n96",
    "n98",
    "n100",
    "n102",
    "n104",
    "n106",
    "n108",
    "n110",
    "n112",
    "n114",
    "n115",
    "n116",
    "n118",
    "n120",
    "n122",
    "n128",
    "n130",
    "n132",
    "n133",
    "n134",
    "n135",
    "n136",
    "n137",
    "n138",
    "n140",
  ],
};

let blurRadius = "55";
let outbreakRadius = "2";

const blurRadiusInput = document.querySelector("#blur-radius-input-number");
const outbreakRadiusInput = document.querySelector(
  "#radius-of-the-outbreak-input-number"
);
blurRadiusInput.value = blurRadius;
outbreakRadiusInput.value = outbreakRadius;

for (i = 0; i < 150; i++) {
  const cube = document.createElement("div");
  cube.classList.add("cube", `n${i}`);
  app.append(cube);

  // colorized
  cube.addEventListener("mouseover", function (e) {
    colorized(e);
  });

  // decolorized
  cube.addEventListener("mousedown", function (e) {
    deColorized(e);
  });
}

artSelects.forEach((artSelectBtn) => {
  artSelectBtn.addEventListener("click", function (e) {
    allDark();
    drawing(drawings[e.target.textContent]);
  });
});

document.querySelector("#remove-all-btn").addEventListener("click", removeAll);

blurRadiusInput.addEventListener("input", changeVisibleParam);
outbreakRadiusInput.addEventListener("input", changeVisibleParam);
document.querySelector("#blur-reset").addEventListener("click", function () {
  blurRadius = "55";
  blurRadiusInput.value = blurRadius;
});
document
  .querySelector("#outbreak-reset")
  .addEventListener("click", function () {
    outbreakRadius = "13";
    outbreakRadiusInput.value = outbreakRadius;
  });

// Animations
document.querySelector(".settings-ico").addEventListener("click", function () {
  document
    .querySelector(".settings-ico")
    .classList.toggle("settings-ico-active");
  document
    .querySelector(".settings-wrap")
    .classList.toggle("settings-wrap-active");
});

document.querySelector(".open-left-btn").addEventListener("click", function () {
  document
    .querySelector(".left-menu-wrapper")
    .classList.toggle("left-menu-wrapper-active");
});

// Functions
function colorized(e) {
  if (e.buttons === 1) {
    deColorized(e);
    return;
  }
  if (e.target.classList.contains("colorized")) {
    return;
  }
  setLight(e.target);
}

function getRandInt() {
  return Math.floor(Math.random() * HexColor.length);
}

function getRandHex() {
  let hex = "#";
  for (i = 0; i < 6; i++) {
    hex += HexColor[getRandInt()];
  }
  return hex;
}

function deColorized(e) {
  if (e.target.classList.contains("colorized")) {
    setDark(e.target);
    scoreFunc();
  }
}

function scoreFunc() {
  score++;
  scoreArea.textContent = score;
}

function drawing(coords) {
  coords.forEach((coord) => {
    setLight(app.querySelector(`.${coord}`));
  });
}

function setLight(cubick) {
  let cubickColor = getRandHex();
  cubick.style.background = cubickColor;
  cubick.style.boxShadow = `0px 0px ${blurRadius}px ${outbreakRadius}px ${cubickColor}`;
  cubick.classList.add("colorized");
}

function setDark(cubick) {
  cubick.style.background = "transparent";
  cubick.style.boxShadow = `none`;
  cubick.classList.remove("colorized");
}

function removeAll() {
  allDark();

  score = -1;
  scoreFunc();
}

function allDark() {
  let cubes = document.querySelectorAll(".cube");

  cubes.forEach((cubi) => {
    setDark(cubi);
  });
}

function changeVisibleParam() {
  blurRadius = blurRadiusInput.value;
  outbreakRadius = outbreakRadiusInput.value;
}
