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

# Splitting code into multiple lines
Unions allow line splitting by default