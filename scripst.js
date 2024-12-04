let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".video");
let botao = document.querySelector(".link-info");
let modal = document.querySelector(".modal");
let audio = document.querySelector(".audio");


botaoSom.addEventListener("click", ligaSom);

function ligaSom() {
    video.muted = !video.muted;
   
    if (video.muted) {
        botaoSom.textContent = "Ligar Som";
    } else {
        botaoSom.textContent = "Desligar Som";
    }
}


botao.addEventListener("click", mostrarModal);
modal.addEventListener("click", esconderModal);

function mostrarModal() {
    modal.style.display = "block";
}

function esconderModal(event) {
  
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


window.addEventListener("load", function() {
   
    audio.play().catch((error) => {
        console.log("Erro ao tentar tocar o áudio:", error);
    });
});
