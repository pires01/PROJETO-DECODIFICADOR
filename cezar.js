let range = document.querySelector('#passo');
let result = document.querySelector('#result');

range.addEventListener('input', function(){
  result.textContent = this.value
})

function validaRotacao(){
    let passo = document.querySelector("#passo").value;
     passo%= 26;
    let radioDecodificar = document.querySelector("#cod2");
    if (radioDecodificar.checked) {
        passo *= (-1);
    }
    cesar(passo);
}

function cesar(passo) {

    let mensagemInicial = document.querySelector("#mensagem").value;
    let resultadoCript = document.querySelector("#resultado");
    let troca = "";
    resultadoCript.innerHTML = "";

    for (let i = 0; i < mensagemInicial.length; i++) {
        troca = mensagemInicial.charCodeAt(i);

        // Letras Maiúsculas
        if (troca >= 65 && troca <= 90) {
            troca += passo;
            if (troca > 90) {
                troca -= 26;
            } else if (troca < 65) {
                troca += 26;
            }
        }

        // Letras Minúsculas
        if (troca >= 97 && troca <= 122) {
            troca += passo;
            if (troca > 122) {
                troca -= 26;
            } else if (troca < 97) {
                troca += 26;
            }
        }

        resultadoCript.innerHTML += String.fromCharCode(troca);
    }
}