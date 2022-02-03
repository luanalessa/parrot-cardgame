let quantity = 0;
let cards = [];

let firstFlipped = false;
let secondFlipped = false;
let turn = false;

while (true) {
    quantity = parseInt(prompt("Informe o numero de cartas (entre 4 e 14) "))
    
    if (quantity >= 4 && quantity <= 14 && quantity % 2 == 0) {
        showCards(quantity);
        break;
    }
}

function showCards(number) { 
    const board = document.getElementById("board");

    for(i = 0; i < number/2; i++) {
        cards.push(i);
        cards.push(i); 
    }

    cards.sort(shuffle)

    for(i = 0; i < number; i++){
        board.innerHTML += `<li class="card ${i}" onclick="flipCard(${i})">
                                <p class="front-face face  ${cards[i]}"></p>
                                <p class="back-face face  ${cards[i]}">
                                    ${cards[i]}
                                </p>
                            </li>`;
    }   
}

function shuffle() { 
	return Math.random() - 0.5; 
}

function flipCard(card) {
    const boardCards = document.getElementsByClassName(`card ${card}`)
    const front = boardCards[0].querySelector(`.front-face`);
    const back = boardCards[0].querySelector(`.back-face`);

    front.style.transform = "rotateY(-180deg)"
    back.style.transform = "rotateY(0deg)"

    chooseCard(back.innerText)
}

function chooseCard(value) {
    turn = !turn

    if(turn) {
        firstFlipped = value;
        return
    }
    secondFlipped = value;
    matchCards()
}

function matchCards() {
    if(typeof(firstFlipped) != "boolean" && typeof(secondFlipped) != "boolean") {
        if(firstFlipped != secondFlipped) {
            setTimeout(() => {
                document.getElementsByClassName(`front-face ${firstFlipped}`)[0].style.transform = "rotateY(0deg)"
                document.getElementsByClassName(`back-face ${firstFlipped}`)[0].style.transform = "rotateY(-180deg)"

                document.getElementsByClassName(`front-face ${secondFlipped}`)[0].style.transform = "rotateY(0deg)"
                document.getElementsByClassName(`back-face ${secondFlipped}`)[0].style.transform = "rotateY(-180deg)"
            }, 2000)
            
        }else {
            console.log("yes")

            firstFlipped = false;
            secondFlipped = false;
        }
    }
}