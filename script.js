let deckPip = ["corazones", "treboles", "diamantes", "picas"];
let deckType = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let deckValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let cardPip = deckPip[Math.floor(Math.random() * deckPip.length)];
let cardType = deckType[Math.floor(Math.random() * deckType.length)];
let cardValue = deckValues[Math.floor(Math.random() * deckValues.length)];


class Cards {
    constructor(pip, type, value){
        this.card = {
        pip: pip,
        type: type,
        value: value
        } 
    }
    showCard(){
        console.log(`${this.card.type} de ${this.card.pip}`);
    };
}


class Decks {
    constructor(pip, type, value){
        // super(pip, type, value)
        this.deck = [];
        this.card = {
        pip : "",
        type: "",
        value: ""            
        }
        for(let pipIndex = 0; pipIndex < pip.length; pipIndex ++){
            for(let typeIndex = 0; typeIndex < type.length; typeIndex++){
                    card = {
                        pip: pip[pipIndex],
                        type: type[typeIndex],
                        value: value[typeIndex]
                    }
                    this.deck.push(card);
                }
            }
        return this.deck;         
    }
    shuffleDeck(){
        let deckIndex = this.deck.length;
        let randomCardIndex = 0;
        let randomCard ={};

        while(deckIndex>0){
            randomCardIndex = Math.floor(Math.random() * deckIndex)
            randomCard = this.deck[randomCardIndex];
            this.deck[deckIndex] = this.deck[randomCardIndex];
            this.deck[randomCardIndex] = randomCard
        }
        return this.deck;
    };

}

let card = new Cards (cardPip, cardType, cardValue);
console.log(card);
card.showCard();

let deck = new Decks(deckPip, deckType, deckValues);
console.log(deck);
deck.shuffleDeck();
