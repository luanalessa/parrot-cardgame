let quantity = 0;
let cards = [];

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
        board.innerHTML += `<li class="card">
                                <p class="front-face face"></p>
                                <p class="back-face face" id= ${cards[i]}></p>
                            </li>`;
    }   
}

function shuffle() { 
	return Math.random() - 0.5; 
}

