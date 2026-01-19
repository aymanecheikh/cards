"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckOfCards = void 0;
const Card_1 = require("./Card");
const util_1 = require("./util");
const validSuites = ["hearts", "spades", "diamonds", "clubs"];
const validRanks = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
];
class DeckOfCards {
    deck = [];
    cardsDrawn = [];
    numberofCards;
    constructor() {
        this.numberofCards = 52;
        this.buildDeck();
    }
    buildDeck() {
        this.deck = [];
        this.cardsDrawn = [];
        validSuites.forEach(suite => {
            validRanks.forEach(rank => {
                this.deck.push(new Card_1.Card(rank, suite));
            });
        });
    }
    drawCard() {
        if (!this.isEmpty()) {
            const cardFromTop = this.deck.pop();
            this.cardsDrawn.push(cardFromTop);
            return cardFromTop;
        }
        return null;
    }
    shuffleDeck(times = 1) {
        for (var i = 1; i <= times; i++) {
            (0, util_1.shuffleArray)(this.deck);
        }
    }
    isEmpty() {
        return this.deck.length === 0;
    }
}
exports.DeckOfCards = DeckOfCards;
