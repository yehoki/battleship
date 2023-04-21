import Ship from "../modules/Ship";

export default class Gameboard {
  constructor() {
    this.board = [];
  }
  //   creates a grid for 100 entries to store the battleship board
  makeBoard() {
    for (let i = 0; i < 100; i++) {
      this.board.push(0);
    }
  }
  // place ship at (x,y) using the Ship factory function
  // ships are placed:
  //   to the right of the coordinatae if horizontal
  //   below the coordinate if vertical
  //   logic to determine whether or not it will fit in the grid will be made in the DOM  
  placeShip(x, y, shipLength, direction = "horizontal") {
    const ship = new Ship(shipLength);
    if (direction === "horizontal") {
      for (let i = 0; i < shipLength; i++) {
        this.board[10 * y + x + i] = ship;
      }
    } else if (direction === "vertical") {
        for (let i = 0; i < shipLength; i++){
            this.board[(10 * y) + x + (10 * i)] = ship;
        }
    }
  }
  receiveAttack(x, y) {
    if (x > 9 || y > 9 || x < 0 || y < 0) {
      return;
    }
  }
}
