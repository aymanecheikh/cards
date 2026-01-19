// Enum type dedclation for 4 suites
export type Suite = "hearts" | "spades" | "diamonds" | "clubs";
// Enum type declaration for different ranks
export type Rank =
  | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K"
  | "A";

// Assigns integer values to each rank
export const valueCards = {
  2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
  // J, Q, K = 11 as specified by briefing
  J: 10, Q: 10, K: 10,
  // A is either 1 or 11 depending on what makes most sense according to
  // briefing
  A: 1 | 11
}

// For console logging per suite
const symbolUnicodes = {
  clubs: "\u2663",
  hearts: "\u2665",
  spades: "\u2660",
  diamonds: "\u2666"
}

// Card object declaration
  // Reuiqres rank and suite
  // Rank is used in constructor to retrieve value
  // Suite is used in constructor for game logic + console logging
export class Card {
  public rank: Rank;
  public suite: Suite;
  public value: number;
  public unicode: string;

  constructor(rank: Rank, suite: Suite) {
    this.rank = rank;
    this.suite = suite;
    this.value = valueCards[rank];
    this.unicode = `${rank}${symbolUnicodes[this.suite]}`
  }

  // Not sure if we'll need it for blackjack
  compare = (otherCard: Card) => {
    if (this.value == otherCard.value) {return 0}
    if (this.value > otherCard.value) {return 1}
    if (this.value < otherCard.value) {return -1}
  }

  // Will be required for basic game logic for most games
  isSameCard = (otherCard: Card) => {
    if (this.value === otherCard.value && this.suite === otherCard.suite) {
      return true
    }
    return false
  }
}