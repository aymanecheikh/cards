"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = shuffleArray;
exports.displayHandAndTotal = displayHandAndTotal;
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function displayHandAndTotal(hand, total) {
    let showHand = '';
    for (let i = 0; i < hand.length; i++) {
        if (i === hand.length - 1) {
            showHand += hand[i]?.unicode;
        }
        else {
            showHand += hand[i]?.unicode + ', ';
        }
        total += hand[i]?.value;
    }
    console.log(`Your Hand: ${showHand} (Total: ${total})`);
}
