import promptSync from 'prompt-sync';
import { Player } from './Player';
import { DeckOfCards } from './Deck';
import { displayHandAndTotal } from './util';
import { Card } from './Card';
const prompt = promptSync();
// Ask for the user's name
const name = prompt('What is your name? ');

// Set up game
const player = new Player(name);
const deck = new DeckOfCards();
let gameOn = true;

deck.shuffleDeck();

// For now, game will run in a loop
// Loop stays on so long as player has credit
while (gameOn) {
  console.log(`Player's name: ${player.getName()}`)
  console.log(`Player's funds: $${player.getCredit()}`)
  let bet: unknown = prompt('Enter your bet: $')
  // Player can quit game by typing 'quit'
  if (bet as string === "quit") {
    gameOn = false;
    break;
  }
  while (bet as number > player.getCredit()) {
    console.log('Declined. Insufficient funds.')
    bet = prompt('Enter your bet: $')
  }

  const playerHand: Card[] = [];
  let showPlayerHand = '';
  let playerTotal = 0;
  for (let i=0; i<2; i++ ) {
    const card = deck.drawCard();
    playerHand.push(card!);
  }
  displayHandAndTotal(playerHand, playerTotal);

  const dealerHand: Card[] = [];
  let showDealerHand = '';
  let dealerTotal = 0;
  for (let i=0; i<2; i++ ) {
    const card = deck.drawCard();
    dealerHand.push(card!);
  }
  for (let i=0; i<dealerHand.length;i++) {
    if (i === dealerHand.length-1) {
      showDealerHand += '[hidden]';
    } else {
      showDealerHand += playerHand[i]?.unicode  + ', ';
    }
    dealerTotal += playerHand[i]?.value!;
  }
  console.log(`Dealer's Hand: ${showDealerHand}`);

  const playerAction = prompt('Your action (hit/stand): ');
  if (playerAction === 'hit') {
    playerHand.push(deck.drawCard()!)
  }
  displayHandAndTotal(playerHand, playerTotal);
}