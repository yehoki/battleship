export default class Ship {
  constructor(length, hits = 0, sunk = false) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }
  // refers to a ship getting hit
  hit() {
    this.hits++;
  }
  // changes the ship's sunk value if it gets hit everywhere
  isSunk() {
    return this.sunk = this.hits === this.length;
  }
}
