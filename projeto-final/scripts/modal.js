
import { empurroezinhos } from "./empurroezinhos.js";

const Mmodal = document.getElementById("modal");
const fecharBtn = document.getElementById("fechar");
const modalTitle = document.getElementById("modal-titulo");
const modalList = document.getElementById("modal-lista");

document.querySelectorAll(".abrir-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    const tipo = btn.dataset.type;
    const itens = empurroezinhos[tipo];

    modalTitle.textContent = tipo.replace("_", " ");

    modalList.innerHTML = itens
      .map(item => `<li>${item}</li>`)
      .join("");

    Mmodal.style.display = "block";
  });
});

fecharBtn.onclick = () => Mmodal.style.display = "none";

window.onclick = (e) => {
  if (e.target === Mmodal) Mmodal.style.display = "none";
};
