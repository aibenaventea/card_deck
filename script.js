let discardPile=[];

class Cards {

    constructor(pip, type, value){
        this.pip = pip,
        this.type = type,
        this.value = value        
    }
    showCard(){
        console.log(`La carta es ${this.type} de ${this.pip}`);
    };
};

class Decks {
    
    constructor(){
        let deckPip = ["corazones", "treboles", "diamantes", "picas"];
        let deckType = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let deckValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.deck = [];
        for(let pipIndex = 0; pipIndex < deckPip.length; pipIndex ++){
            for(let typeIndex = 0; typeIndex < deckType.length; typeIndex ++){
                let card = new Cards (deckPip[pipIndex], deckType[typeIndex], deckValues[typeIndex])
                this.deck.push(card);
            };
        };
    };

    getRandomIndex(){

        let randomDeckIndex = Math.floor(Math.random() * this.deck.length);
        return randomDeckIndex;
    };

    dealRandomCard(){

        let deckIndex = deck.getRandomIndex();
        let dealedCard = this.deck.splice(deckIndex,1);
        let randomCard = dealedCard[0];
        return randomCard;
    };

    shuffleDeck(){

        let deckIndex = this.deck.length;
        let randomCardIndex = 0;
        let randomCard ={};
        
        while(deckIndex){
            randomCardIndex = Math.floor(Math.random() * deckIndex--);
            randomCard = this.deck[deckIndex];
            this.deck[deckIndex] = this.deck[randomCardIndex];
            this.deck[randomCardIndex] = randomCard;
        }
        return this.deck;
    };
    
    restoreDeck(){

        for(let discardPileIndex = 0; discardPileIndex < discardPile.length; discardPileIndex ++){
            this.deck.push(discardPile[discardPileIndex]);
        };
        discardPile.splice(0,discardPile.length);
    };
};

class Player{
    constructor(playerName, card1, card2){
        this.playerName = playerName;
        this.mano = [];
        this.mano.push(card1);
        this.mano.push(card2);
    }

    dropCard(indiceMano){
        let dropCard = this.mano[indiceMano];
        discardPile.push(dropCard);
        if(indiceMano == 0){
            this.mano.shift();
        } else if( indiceMano == 1){
            this.mano.pop();
        }
    };

    takeCard(nuevaCarta){
        this.mano.push(nuevaCarta)
    }
}

let deck = new Decks();
console.log(`La baraja tiene ${deck.deck.length} cartas`);
console.log('La baraja inicial es: ', deck.deck);

deck.shuffleDeck();

console.log(`La baraja revuelta tiene ${deck.deck.length} cartas`);
console.log('La baraja inicial se revolvio: ', deck.deck);

let randomIndex = deck.getRandomIndex();
console.log(`Indice para crear una carta: ${randomIndex}`);

let card = new Cards(deck.deck[randomIndex].pip, deck.deck[randomIndex].type, deck.deck[randomIndex].value);
card.showCard();

let player = new Player('PizzaGuy', deck.dealRandomCard(), deck.dealRandomCard())
console.log(`El jugador es ${player.playerName} y tiene la siguiente mano: `, player.mano);
console.log(`Ahora la baraja tiene: ${deck.deck.length} cartas`);

player.dropCard(1);
console.log(`El jugador ${player.playerName}, descarto la segunda carta y ahora su mano es: `, player.mano);
console.log(`Ahora la pila de descarte tiene: ${discardPile.length} cartas`);

player.takeCard(deck.dealRandomCard())
console.log(`El jugador ${player.playerName}, saco una carta aleatoria de la baraja y ahora su mano es: `, player.mano);
console.log(`Ahora la baraja tiene: ${deck.deck.length} cartas`);

player.dropCard(0);
console.log(`El jugador ${player.playerName}, descarto una carta y ahora su mano es: `, player.mano);
console.log(`Ahora la pila de descarte tiene: ${discardPile.length} cartas`);

player.dropCard(0);
console.log(`El jugador ${player.playerName}, descarto una carta y ahora su mano es: `, player.mano);
console.log(`Ahora la pila de descarte tiene: ${discardPile.length} cartas`);

deck.restoreDeck();
console.log(`Se restauro la baraja y ahora tiene: ${deck.deck.length} cartas`);