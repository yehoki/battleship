export default class Ship {
  constructor(length, hits = [], sunk = false) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }
  // refers to a ship getting hit
  hit(gridPosition) {
    if (gridPosition !== undefined && !this.hits.includes(gridPosition) && this.sunk == false){
      this.hits.push(gridPosition)
      this.isSunk();
    }
  }
  // changes the ship's sunk value if it gets hit everywhere
  isSunk() {
    return this.sunk = this.hits.length === this.length;
  }
}
