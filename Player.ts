export class Player {
  constructor(public name?: string, public credit=100) {
    this.credit = credit;
    this.name = name ? name: 'aymane';
  }

  setCredit(newCredit: number) { this.credit = newCredit }
  getCredit() { return this.credit }

  setName(name: string) { this.name = name }
  getName() { return `${this.name}` }
}