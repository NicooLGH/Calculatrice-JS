const buttons = document.querySelectorAll(".button");
const calcul = document.getElementById("calcul");
const arrow = document.querySelector(".fa-arrow-left");
const egal = document.getElementById("egal");
const reset = document.getElementById("reset");
const resultatbas = document.getElementById("resultatbas");

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.background = "#5e5e5e";
  });
  button.addEventListener("mouseup", () => {
    button.style.background = "#1f1f1f";
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
});


