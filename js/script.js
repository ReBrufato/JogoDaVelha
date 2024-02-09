let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message")
let messagetext = document.querySelector("#message p")
let secondPlayer
let contBoxes = 0

//contador de jogadas para cada player
let player1 = 0
let player2 = 0

for(i=0; i<boxes.length; i++){

    boxes[i].addEventListener("click", function() {

        let elemento = checkElemento(player1,player2)

        if(this.childNodes.length == 0){ 
            let cloneElemento = elemento.cloneNode(true)
            this.appendChild(cloneElemento)

            player1 == player2? player1++ : player2 ++
        }

        checkWinCondition()
    })
}

//verifica se é 'x' ou 'o' que vai jogar
function checkElemento(player1, player2){
    player1 == player2? elemento = x : elemento = o
    return elemento
}

//verifica se alguém ganhou
function checkWinCondition(){
    contBoxes ++
    let b1 = document.querySelector("#block-1")
    let b2 = document.querySelector("#block-2")
    let b3 = document.querySelector("#block-3")
    let b4 = document.querySelector("#block-4")
    let b5 = document.querySelector("#block-5")
    let b6 = document.querySelector("#block-6")
    let b7 = document.querySelector("#block-7")
    let b8 = document.querySelector("#block-8")
    let b9 = document.querySelector("#block-9")

    let elHorizontal = checkWinConditionHorizontal(b1,b2,b3,b4,b5,b6,b7,b8,b9)
    let elVertical = checkWinConditionVertical(b1,b2,b3,b4,b5,b6,b7,b8,b9)
    let elDiagonal = checkWinConditionDiagonal(b1,b2,b3,b5,b7,b8,b9)

    if(elHorizontal != false){declareWinner(elHorizontal)}
    else if(elVertical != false){declareWinner(elVertical)}
    else if(elDiagonal != false){declareWinner(elDiagonal)}

    if(contBoxes == 9){
        messagetext.textContent = "Deu velha!"
        messageContainer.classList.remove("hide")
        contBoxes = 0
    }
}

function checkWinConditionVertical(b1,b2,b3,b4,b5,b6,b7,b8,b9){
    //vertical 1
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b1Child === b4Child && b1Child == b7Child){return b1Child}
    }

    //vertical 2
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if(b2Child === b5Child && b2Child == b8Child){return b2Child}
    }

    //vertical 3
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b3Child === b6Child && b3Child == b9Child){return b3Child}
    }

    return false
}

function checkWinConditionHorizontal(b1,b2,b3,b4,b5,b6,b7,b8,b9){
    //horizontal 1
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if(b1Child == b2Child && b1Child == b3Child){return b1Child}
    }

    //horizontal 2
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if(b4Child === b5Child && b4Child == b6Child){return b4Child}
    }

    //horizontal 3
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b7Child === b8Child && b7Child == b9Child){return b7Child}
    }

    return false
}

function checkWinConditionDiagonal(b1,b2,b3,b5,b7,b8,b9){
    //diagonal 1
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b1Child === b5Child && b1Child == b9Child){return b1Child}
    }

    //diagonal 2
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b3Child === b5Child && b3Child == b7Child){return b3Child}
    }

    return false
}

//limpa o jogo, atualiza placar e declara vencedor
function declareWinner(winner){
    let scoreBoardX = document.getElementById("scoreboard-1")
    let scoreBoardY = document.getElementById("scoreboard-2")
    let msg = ''

    if(winner == 'x'){
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1
        msg = "O jogador 1 venceu!"
        console.log(`${winner} venceu!`)
    }else if(winner = 'o'){
        scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1
        msg = "O jogador 2 venceu!"
        console.log(`${winner} venceu!`)
    }

    messagetext.textContent = msg
    messageContainer.classList.remove("hide")
}

