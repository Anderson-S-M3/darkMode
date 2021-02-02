<h1 align="center">
<a href="https://github.com/Anderson-S-M3/darkMode">:sunny: Dark Mode Leona 🌑</a>
</h1>

<p align="center">:new_moon_with_face: Dark Mode :full_moon_with_face: League of Legends do campeão Leona, desenvolvido para praticar js.</p>

<p align="center">
<img alt="License" src="https://img.shields.io/badge/license-MIT-green">
</p>

<h5 align="center">:rotating_light: Finalizado... :rotating_light:</h5>

<p align="center"><a href="#instalacao">Usar</a> • <a href="#tecnologias">Tecnologias</a> • <a href="#demonstracao">Código</a></p>

<img src="https://user-images.githubusercontent.com/65872811/106670643-12ca3280-658c-11eb-8ac8-19763f2a5512.gif">

<h2 id="instalacao">Usar:</h2>
<h4>Pré-requisito:</h4>

Antes de começar, você vai precisar ter em sua máquina o [Git](https://git-scm.com) instalado.

<h5 id="rodando">:ticket: Testando:</h5>

```
# Clone este repositório
git clone https://github.com/Anderson-S-M3/darkMode

# Acesse a pasta do projeto no terminal/cmd
cd darkMode

# Execute o index.html dando dois cliques
```

<h2 id="tecnologias">🛠 Tecnologias</h2>
<p>As seguintes ferramentas foram usadas na construção do projeto:</p>

- [Vanilla](https://micku7zu.github.io/vanilla-tilt.js/)

<h2 id="demonstracao">:eyes: Código :eyes:</h2>

<p align="center">Script.js</p>

```
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

```

<br>
<br>

## 📝 Licença
---

Este projeto esta sobe a licença [MIT](./LICENSE.md).

<br>
<br>

### Autor
---

Feito com :blue_heart: por Anderson S. 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/Anderson_S-0077B5?style=for-the-badge&logo=linkedin&logoColor=white/)](https://www.linkedin.com/in/anderson-s-antunes-b879251b9/) <br>
[![Email](https://img.shields.io/badge/Anderson__S__Antunes@hotmail.com-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:anderson_s_antunes@hotmail.com)
