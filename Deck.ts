import { Card, Suite, Rank } from "./Card";
import { shuffleArray } from "./util";

const validSuites: Suite[] = ["hearts", "spades", "diamonds", "clubs"];
const validRanks: Rank[] = [
  "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
];

export type validNumberOfCards = 52;

export class DeckOfCards {
  public deck: Card[] = [];
  public cardsDrawn: Card[] = [];
  public numberofCards: validNumberOfCards;

  constructor() {
    this.numberofCards = 52;
    this.buildDeck();
  }

  buildDeck() {
    this.deck = [];
    this.cardsDrawn = [];

    validSuites.forEach(suite => {
      validRanks.forEach(rank => {
        this.deck.push(new Card(rank, suite));
      })
    });
  }

  drawCard() {
    if (!this.isEmpty()) {
      const cardFromTop = this.deck.pop()
      this.cardsDrawn.push(cardFromTop!)
      return cardFromTop
    }
    return null
  }

  shuffleDeck(times = 1) {
    for (var i=1; i <= times; i++) {
      shuffleArray(this.deck);
    }
  }

  isEmpty() {
    return this.deck.length === 0;
  }
}