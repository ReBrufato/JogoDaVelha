let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message")
let messagetext = document.querySelector("#message p")
let secondPlayer

//contador de jogadas para cada player
let player1 = 0
let player2 = 0

for(i=0; i<boxes.length; i++){

    boxes[i].addEventListener("click", function() {

        let elemento = checkElemento(player1,player2)

        player1 == player2? elemento = x : elemento = o

        if(this.childNodes.length == 0){ 
            let cloneElemento = elemento.cloneNode(true)
            this.appendChild(cloneElemento)

            player1 == player2? player1++ : player2 ++
        }

    })
}

//verifica se é 'x' ou 'o' que vai jogar
function checkElemento(player1, player2){
    player1 == player2? elemento = x : elemento = o
    return elemento
}