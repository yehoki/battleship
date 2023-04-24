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
  placeShip(x, y, shipLength, direction = "horizontal") {
    const ship = new Ship(shipLength);
    if (direction === "horizontal") {
      if (10 * y + x + shipLength - 1 > (10 * (y + 1) - 1)){
        return false;
      }
      for (let i = 0; i < shipLength; i++) {
        this.board[10 * y + x + i] = ship;
      }
    } else if (direction === "vertical") {
      if (10 * y + x + (10 * (shipLength - 1)) > 99) {
        return false;
      }
      for (let i = 0; i < shipLength; i++) {
        this.board[10 * y + x + 10 * i] = ship;
      }
    }
    return true;
  }
  //   0 Represents open waters
  //   1 Represents a missed shot
  //   Anywhere else there is a ship object, which stores the grid value where it was hit
  receiveAttack(x, y) {
    const gridPos = x + 10 * y;
    const checkGrid = this.board[gridPos];
    if (checkGrid === 0) {
      this.board[gridPos] = 1;
      return false;
    } else if (checkGrid == 1) {
      return false;
    } else {
      this.board[gridPos].hit(gridPos);
      return true;
    }
  }

  makeRandomBoard() {
    const ships = [
      new Ship(2),
      new Ship(3),
      new Ship(3),
      new Ship(4),
      new Ship(5),
    ];

  }

  allShipsSunk() {
    let checkBoard = this.board
      .filter((entry) => entry !== 1)
      .filter((entry) => entry !== 0)
      .filter((entry) => entry.sunk === false);
    return checkBoard.length === 0;
  }
}
