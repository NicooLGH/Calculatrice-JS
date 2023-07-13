const buttons = document.querySelectorAll(".button");
const calcul = document.getElementById("calcul");
const arrow = document.querySelector(".fa-arrow-left");
const egal = document.getElementById("egal");
const reset = document.getElementById("reset");
const resultatbas = document.getElementById("resultatbas");
const palette = document.querySelector(".fa-palette");
const choixCouleur = document.getElementById("choix-couleur");
const body = document.getElementsByTagName("body")[0];
const rouge = document.getElementById("rouge");
const beige = document.getElementById("beige");
const vert = document.getElementById("vert");
const bleu = document.getElementById("bleu");
const violet = document.getElementById("violet");
const blanc = document.getElementById("blanc");

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.background = "#5e5e5e";
        button.style.fontSize = "1.2rem";
  });
  button.addEventListener("mouseup", () => {
    button.style.background = "#1f1f1f";
    button.style.fontSize = "1.5rem";
  });
  button.addEventListener("mouseover", () => {
    button.style.background = "#3c3c3c";
  });
  button.addEventListener("mouseleave", () => {
    button.style.background = "#1f1f1f";
  });  
  button.addEventListener("click", (e) => {
    calcul.textContent += e.target.id;
    console.log(calcul.textContent);
    resultatbas.textContent = eval(calcul.textContent);
  });
});

arrow.addEventListener("click", () => {
  calcul.textContent = calcul.textContent.substring(0, calcul.textContent.length - 1);
  console.log(calcul.textContent);
});

egal.addEventListener("click", () => {
  calcul.textContent = eval(calcul.textContent);
  resultatbas.textContent = "";
});

reset.addEventListener("click", () => {
  calcul.textContent = "";
  resultatbas.textContent = "";
});

palette.addEventListener("click", () => {
  palette.style.display = "none";
  choixCouleur.style.left = "30px";
  choixCouleur.style.opacity = "1";
  choixCouleur.style.zIndex = "1";
});

rouge.addEventListener("click", (e) => {
  palette.style.display = "block";
  choixCouleur.style.left = "-500px";
  body.style.backgroundColor = "var(--rouge)";
  egal.style.backgroundColor = "var(--rouge)";
  choixCouleur.style.opacity = "0";
  choixCouleur.style.zIndex = "-1";
});

jaune.addEventListener("click", (e) => {
  palette.style.display = "block";
  choixCouleur.style.left = "-500px";
  body.style.backgroundColor = "var(--jaune)";
  egal.style.backgroundColor = "var(--jaune)";
  choixCouleur.style.opacity = "0";
  choixCouleur.style.zIndex = "-1";
});

beige.addEventListener("click", (e) => {
  palette.style.display = "block";
  choixCouleur.style.left = "-500px";
  body.style.backgroundColor = "var(--beige)";
  egal.style.backgroundColor = "var(--beige)";
  choixCouleur.style.opacity = "0";
  choixCouleur.style.zIndex = "-1";
});

vert.addEventListener("click", (e) => {
  palette.style.display = "block";
  choixCouleur.style.left = "-500px";
  body.style.backgroundColor = "var(--vert)";
  egal.style.backgroundColor = "var(--vert)";
  choixCouleur.style.opacity = "0";
  choixCouleur.style.zIndex = "-1";
});

bleu.addEventListener("click", (e) => {
  palette.style.display = "block";
  choixCouleur.style.left = "-500px";
  body.style.backgroundColor = "var(--bleu)";
  egal.style.backgroundColor = "var(--bleu)";
  choixCouleur.style.opacity = "0";
  choixCouleur.style.zIndex = "-1";
});

violet.addEventListener("click", (e) => {
  palette.style.display = "block";
  choixCouleur.style.left = "-500px";
  body.style.backgroundColor = "var(--violet)";
  egal.style.backgroundColor = "var(--violet)";
  choixCouleur.style.opacity = "0";
  choixCouleur.style.zIndex = "-1";
});

blanc.addEventListener("click", (e) => {
  palette.style.display = "block";
  choixCouleur.style.left = "-500px";
  body.style.backgroundColor = "var(--blanc)";
  egal.style.backgroundColor = "var(--blanc)";
  choixCouleur.style.opacity = "0";
  choixCouleur.style.zIndex = "-1";
});





