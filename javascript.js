const botao = document.querySelectorAll(".fechar");
const alerta = document.querySelectorAll("#alerta");
      
function first(){
    alerta.style.display = "none";
}

botao.addEventListener("click", first)