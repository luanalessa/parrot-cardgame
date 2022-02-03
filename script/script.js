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
                                <p class="front-face face"></p>
                                <p class="back-face face">
                                    ${cards[i]}
                                </p>
                            </li>`;
    }   
}

function shuffle() { 
	return Math.random() - 0.5; 
}

function flipCard(card) {
    const boardCard = document.getElementsByClassName(`card ${card}`)
    const front = boardCard[0].querySelector(`.front-face`);
    const back = boardCard[0].querySelector(`.back-face`);

    boardCard[0].style.pointerEvents = "none";
    front.style.transform = "rotateY(-180deg)"
    back.style.transform = "rotateY(0deg)"

    chooseCard(back.innerText, card)
}

function chooseCard(value, cardPosition) {
    turn = !turn

    if(turn) {
        firstFlipped = [value, cardPosition];
        return
    }
    secondFlipped = [value, cardPosition];

    matchCards()
}

function matchCards() {
    if (typeof(firstFlipped[0]) && typeof(secondFlipped[0])) {
        const cardOne = document.getElementsByClassName(`card`)[firstFlipped[1]];
        const cardTwo = document.getElementsByClassName(`card`)[secondFlipped[1]];

        if (firstFlipped[0] != secondFlipped[0]) {
            
            setTimeout(() => {
                cardOne.querySelector(`.front-face`).style.transform = "rotateY(0deg)";
                cardOne.querySelector(`.back-face`).style.transform = "rotateY(-180deg)";
                cardOne.style.pointerEvents = "all";

                cardTwo.querySelector(`.front-face`).style.transform = "rotateY(0deg)";
                cardTwo.querySelector(`.back-face`).style.transform = "rotateY(-180deg)";
                cardTwo.style.pointerEvents = "all";
            }, 1000)
            
        } else {
            cardOne.style.pointerEvents = "none";
            cardTwo.style.pointerEvents = "none";
            
            firstFlipped = false;
            secondFlipped = false;
        }
    }
}