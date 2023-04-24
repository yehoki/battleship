import Ship from "./Ship";

export default class Player {
  // player name
  // player type: either computer or PvP if implemented
  // board: the players board - a Gameboard class object
  constructor(playerBoard, enemyBoard) {
    this.playerBoard = playerBoard;
    this.enemyBoard = enemyBoard;
  }

  setEnemyBoard(enemyBoard) {}
  makeComputerMove() {
    // enemyBoard
  }
}
