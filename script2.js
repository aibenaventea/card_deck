let deckColours = ["corazones", "treboles", "diamantes", "picas"];
let deckTxtValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let deckNumValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let cardColour = deckColours[Math.floor(Math.random() * deckColours.length)];
let cardTxtValue = deckTxtValues[Math.floor(Math.random() * deckTxtValues.length)];
let cardNumValue = deckNumValues[Math.floor(Math.random() * deckNumValues.length)];


class Cards {
    constructor(cardColour, cardTxtValue, cardNumValue){
        this.pip = cardColour;
        this.type = cardTxtValue;
        this.value = cardNumValue; 
    }
    showCard(){
        console.log(`${this.type} de ${this.pip}`);
    };
}


class Decks {
    constructor(deckColours, deckTxtValues, deckNumValues){
        let deck = [];
        let card = {
        pip : "",
        type: "",
        value: ""            
        }
        for(let deckColoursIndex = 0; deckColoursIndex < deckColours.length; deckColoursIndex ++){
            for(let valuesIndex = 0; valuesIndex < deckTxtValues.length; valuesIndex++){
                    card = {
                        pip: deckColours[deckColoursIndex],
                        type: deckTxtValues[valuesIndex],
                        value: deckNumValues[valuesIndex]
                    }
                    deck.push(card);
                }
            }
        return deck;         
    }
    shuffleDeck(){
        let deckIndex = deck.length;
        let randomCardIndex = 0;
        let randomCard ={};

        while(deckIndex>0){
            randomCardIndex = Math.floor(Math.random() * deckIndex)
            randomCard = deck[randomCardIndex];
            deck[deckIndex] = deck[randomCardIndex];
            deck[randomCardIndex] = randomCard
        }
        return deck;
    }

}

let card = new Cards (cardColour, cardTxtValue, cardNumValue);
console.log(card);
card.showCard();

let deck = new Decks(deckColours, deckTxtValues, deckNumValues);
console.log(deck);
deck.shuffleDeck();
