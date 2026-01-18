# Type 'number | undefined' is not assignable to type 'number' Type 'undefined' is not assignable to type 'number'.
Fix by ensuring "!" is added at the end of each reference value
## Before
```[array[i], array[j]] = [array[j], array[i]];```
## After
```[array[i]!, array[j]!] = [array[j]!, array[i]!];```
# Building a Card Game System
## Card.ts
### Source
https://github.com/rafaelmarques7/cards-module-typescript/blob/master/src/Card.ts
### Code Narration
#### Two Custom Types
- Suite: For defining enum values for the four suites
- Rank: For defining enum values for values assigned to any given suited card
#### Two Objects
- valueCards: For assigning actual integer values to each rank to be stiched in Card class constructor
- symbolUnicodes: For assigning unicode values to each suit. For prettified console logging purposes. To be stiched in Card class constructor.
#### Main Card Class - Where it All Comes Together
- 4 attributes belonging to any instance of this class: rank, suite, value. and unicode
- When instantiating this class, you only need the rank and suite. The constructor will then fetch the integer value for game logic, and the unicode for console logging
- Comparison logic: if one card is greater than another card, less than, or equal. This method focuses on card rank only
- Is Same Card: this checks if two cards are the same. This is useful for adding constraints in the case of randomly generating cards.
## Deck.ts
### Code Narration
#### Dependencies
- Card Class, Suite Type, and Rank Type from Card.ts
- shuffleArray from util.ts
#### Two constant variables
- validSuites creates an array of Suites, prefilling them with the possible Suite values
  - Why do this twice?
- validRanks also creates an array of Ranks, prefilling them with the possible Rank values
  - Again, why do this twice? Seems thorough. Is this a design pattern I must stick to in future enum codes?
#### One type declaration
- validNumberOfCards set to 52. But does this need to be a type? In the original code on gh it was created as an enum type to capture either 40 decks or 52 but for my purposes I stuck with 52. Does it still need to be a type or can be switched to const?
#### Main DeckOfCards class
- Three variables:
  - deck, which is reset to 0 when a new deck is created
  - cardsDrawn, also set to 0 when a new deck is created
  - numberOfCards, typed with validNumberOfCards, which can only ever take the value of 52
- Constructor sets number of cards to 52. Well, it's already 52 as per type declaration
- Constructor also calls the buildDeck method, which is defined just below:
  - buildDeck begins by setting deck and cardsDrawn attributes to fresh empty arrays
  - It then loops through each of the valid Suites, where the ranks are looped over per suite
  - Within each nested loop, a new Card is added, with constructor params populated with the respective rank and suite.
  - By the end of this method, we should have a full set of 52 cards. In other words, this.deck should be an array of length 52, with each element being a Card object with an assigned rank and suite. Due to the card constructor, each Card within the array should also be assigned an integer value corresponding to its rank, and unicode emoji corresponding to its suite. This is obvious as per the code, but I am explaining this explicitly to reinforce the learning process.
- Next is the drawCard method
  - It first checks that the deck is not empty, in other words making sure that not all 52 cards have been played and that a new deck is not required (game logic, not deck logic since the purpose of this class is to handle one single deck. Deck management would vary based on the game)
  - As a side note, the empty checking is its own method later in the class, which basically returns a boolean value depending on whether the length of the class is equal to 0. Every time the card is drawn, this method is called. Why not make this method private? Well the game itself may need this method too, who knows?
  - It then pops the last element of the array and saves it as a variable, which is what will be returned and used in game logic
  - It then pushes that element from the array, effectively removing the card from the deck
- Now, the drawCard method is all well and good, but upon deck creation, immediately moving to drawing the card wouldn't be good design because it will take the last rank of the last suite. The deck needs to be shuffled before being appropriate for gameplay at runtime. Sooo, shuffleDeck exists to fulfil this.
  - shuffleDeck actually just calls the shuffleArray function which is imported from util.ts. All it does is shuffle elements in the array by looping through each element in the array, generating a random index, and swapping the values. The numbers randomly generated are between 0 and i, so there is no way that a number outside of the length of index can be generated. In this context, the numbers generated would be between 0 and 52.
# Splitting code into multiple lines
Unions allow line splitting by default