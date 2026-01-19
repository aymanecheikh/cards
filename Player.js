"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    name;
    credit;
    constructor(name, credit = 100) {
        this.name = name;
        this.credit = credit;
        this.credit = credit;
        this.name = name ? name : 'aymane';
    }
    setCredit(newCredit) { this.credit = newCredit; }
    getCredit() { return this.credit; }
    setName(name) { this.name = name; }
    getName() { return `${this.name}`; }
}
exports.Player = Player;
