function btn(){
    let botao = document.querySelector(".btnResultado")
    let opcoes = document.querySelector("#opcoes")

    botao.addEventListener("click", function(event){
        // event.preventDefault();
        if(opcoes.value=="base"){
            base64()
        }else {
            validaRotacao()
        }
    })
}