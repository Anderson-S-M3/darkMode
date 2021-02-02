// Dark-mode
const html = document.querySelector("*");
const checkbox = document.querySelector("input[name=theme]");
const leonaImg = document.querySelector(".avatar-img img");

// Pegar Estilo
const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

// Light Colors
function leonaLight() {
  leonaImg.src =
    "./img/lunar_eclipse_leona___render_by_lol_overlay_dcri1eb-removebg-preview.png";
}

const initialColors = {
  pretoColor: getStyle(html, "--preto-color"),
  medio: getStyle(html, "--medio"),
  claro: getStyle(html, "--claro"),
};

// Dark Colors
function leonaDark() {
  leonaImg.src =
    "./img/solar_eclipse_leona____render_by_lol_overlay_dcri1ed-removebg-preview.png";
}

const darkMode = {
  pretoColor: "#dffdfb",
  medio: "#868be2",
  claro: "#141525",
};

// ex: --preto-color
const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

// trocar as cores
const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key]),
  );
};

// verifica se o checkbox está em True ou False
checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
  target.checked ? leonaLight() : leonaDark();
});
