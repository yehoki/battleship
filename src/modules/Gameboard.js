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
    const startPlace = 10 * y + x;
    if (
      direction === "horizontal" &&
      startPlace + shipLength - 1 <= 10 * (y + 1) - 1 &&
      this.anyShips(startPlace, shipLength)
    ) {
      for (let i = 0; i < shipLength; i++) {
        this.board[startPlace + i] = ship;
      }
      return true;
    } else if (
      direction === "vertical" &&
      startPlace + 10 * (shipLength - 1) < 100 &&
      this.anyShips(startPlace, shipLength)
    ) {
      for (let i = 0; i < shipLength; i++) {
        this.board[startPlace + 10 * i] = ship;
      }
      return true;
    }
    return false;
  }

  // Helper function - checks if array is unoccupied in the area where we want to place a ship
  anyShips(startPlace, shipLength) {
    if (startPlace < 0 || startPlace > 99 || startPlace + shipLength > 99) {
      return false;
    }
    return (
      this.board
        .slice(startPlace, shipLength)
        .filter((entry) => typeof entry === "number").length ===
      this.board.slice(startPlace, shipLength).length
    );
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
    for (const ship of ships) {
      const shipLength = ship.length;
      const direction =
        Math.round(Math.random() * 2) === 0 ? "horizontal" : "vertical";
      this.placeRandomShip(shipLength, direction);
    }
  }

  placeRandomShip(shipLength, direction) {
    if (direction === "horizontal") {
      let x = Math.round(Math.random() * (10 - shipLength));
      let y = Math.round(Math.random() * 9);
      while (!this.anyShips(10 * y + x, shipLength)) {
        x = Math.round(Math.random() * (10 - shipLength));
        y = Math.round(Math.random() * 9);
      }
      this.placeShip(x, y, shipLength, "horizontal");
    } else if (direction === "vertical") {
      let x = Math.round(Math.random() * 9);
      let y = Math.round(Math.random() * (10 - shipLength));
      while (!this.anyShips(10 * y + x, shipLength)) {
        x = Math.round(Math.random() * 9);
        y = Math.round(Math.random() * (10 - shipLength));
      }
      this.placeShip(x, y, shipLength, "vertical");
    }
    return true;
  }

  howManyShips() {
    return this.board
      .filter((entry) => entry !== 1)
      .filter((entry) => entry !== 0).length;
  }

  allShipsSunk() {
    let checkBoard = this.board
      .filter((entry) => entry !== 1)
      .filter((entry) => entry !== 0)
      .filter((entry) => entry.sunk === false);
    return checkBoard.length === 0;
  }
}
