"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Player_1 = require("./Player");
const Deck_1 = require("./Deck");
const util_1 = require("./util");
const prompt = (0, prompt_sync_1.default)();
// Ask for the user's name
const name = prompt('What is your name? ');
// Set up game
const player = new Player_1.Player(name);
const deck = new Deck_1.DeckOfCards();
let gameOn = true;
deck.shuffleDeck();
// For now, game will run in a loop
// Loop stays on so long as player has credit
while (gameOn) {
    console.log(`Player's name: ${player.getName()}`);
    console.log(`Player's funds: $${player.getCredit()}`);
    let bet = prompt('Enter your bet: $');
    // Player can quit game by typing 'quit'
    if (bet === "quit") {
        gameOn = false;
        break;
    }
    while (bet > player.getCredit()) {
        console.log('Declined. Insufficient funds.');
        bet = prompt('Enter your bet: $');
    }
    const playerHand = [];
    let showPlayerHand = '';
    let playerTotal = 0;
    for (let i = 0; i < 2; i++) {
        const card = deck.drawCard();
        playerHand.push(card);
    }
    (0, util_1.displayHandAndTotal)(playerHand, playerTotal);
    const dealerHand = [];
    let showDealerHand = '';
    let dealerTotal = 0;
    for (let i = 0; i < 2; i++) {
        const card = deck.drawCard();
        dealerHand.push(card);
    }
    for (let i = 0; i < dealerHand.length; i++) {
        if (i === dealerHand.length - 1) {
            showDealerHand += '[hidden]';
        }
        else {
            showDealerHand += playerHand[i]?.unicode + ', ';
        }
        dealerTotal += playerHand[i]?.value;
    }
    console.log(`Dealer's Hand: ${showDealerHand}`);
    const playerAction = prompt('Your action (hit/stand): ');
    if (playerAction === 'hit') {
        playerHand.push(deck.drawCard());
    }
    (0, util_1.displayHandAndTotal)(playerHand, playerTotal);
}
