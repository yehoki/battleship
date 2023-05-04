import Player from "./Player";
import Gameboard from "./Gameboard";

export default class Game {
  constructor() {
    this.player = new Player(new Gameboard());
    this.computer = new Player(new Gameboard());
  }
}
