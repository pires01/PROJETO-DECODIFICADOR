function base64(){
        let mensagem = document.querySelector("#mensagem").value 
        
        if(document.querySelector("#cod1").checked){
            event.preventDefault
            let resposta = btoa(mensagem)
            document.querySelector("#resultado").innerText  = resposta
        }else if(document.querySelector("#cod2").checked) {
            event.preventDefault
            let resposta = atob(mensagem)
            document.querySelector("#resultado").innerText  = resposta
        }
    } 

