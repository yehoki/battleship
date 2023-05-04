import GithubIcon from "../images/github-mark.svg";
import Game from "./Game";
import Gameboard from "./Gameboard";

export default class ScreenController {
  constructor() {
    this.game = new Game();
  }
  static makeHeader() {
    const header = document.createElement("header");
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "Battleship";
    header.appendChild(headerTitle);
    console.log(this.game);
    const test = new Game();
    console.log(test);
    return header;
  }

  static makeMain() {
    const main = document.createElement("main");
    main.appendChild(this.makeGrid());
    main.appendChild(this.placeShips());
    return main;
  }

  // Initialise game - place ships

  static placeShips() {
    const shipArea = document.createElement("div");
    shipArea.id = "ship-area";
    shipArea.className = "ship-area";
    const carrier = document.createElement("div");
    const battleship = document.createElement("div");
    const destroyer = document.createElement("div");
    const submarine = document.createElement("div");
    const patrolBoat = document.createElement("div");
    carrier.dataset.shipLength = 5;
    battleship.dataset.shipLength = 4;
    destroyer.dataset.shipLength = 3;
    submarine.dataset.shipLength = 3;
    patrolBoat.dataset.shipLength = 2;
    const ships = [carrier, battleship, destroyer, submarine, patrolBoat];
    for (const ship of ships) {
      ship.id = "ship";
      ship.className = "ship";
      this.makeShip(ship.dataset.shipLength, ship);
      ship.addEventListener("click", () => {
        ship.id = "ship selected";
        console.log("click");
      });
      shipArea.appendChild(ship);
    }
    console.log(ships);
    return shipArea;
  }

  static makeShip(shipLength, ship) {
    for (let i = 0; i < shipLength; i++) {
      const shipBlock = document.createElement("div");
      shipBlock.className = "ship-block";
      ship.appendChild(shipBlock);
    }
  }

  static makeGrid() {
    const grid = document.createElement("div");
    grid.className = "grid";
    for (let i = 0; i < 100; i++) {
      const gridElement = document.createElement("button");
      gridElement.className = "grid-element";
      gridElement.id = i;
      gridElement.addEventListener("click", (e) => {
        console.log(e.target.id);
      });
      grid.appendChild(gridElement);
    }
    return grid;
  }

  static displayGrid(gameboard) {
    for (let i = 0; i < 100; i++) {
      if (gameboard.board[i] !== 0 && gameboard.board[i] !== 1) {
      }
    }
  }

  static makeFooter() {
    const footer = document.createElement("footer");
    const footerText = document.createElement("h4");
    const githubLink = document.createElement("a");
    const githubImage = new Image();
    githubImage.src = GithubIcon;
    githubImage.alt = "Github logo";
    githubImage.classList.add("svg");
    githubLink.href = "https://github.com/yehoki/";
    footerText.innerHTML = "Copyright © 2023 yehoki";
    githubLink.appendChild(githubImage);
    footer.appendChild(footerText);
    footer.appendChild(githubLink);
    return footer;
  }

  static makeLayout() {
    document.body.appendChild(this.makeHeader());
    document.body.appendChild(this.makeMain());
    document.body.appendChild(this.makeFooter());
    const gameboard = new Gameboard();
    gameboard.makeBoard();
    gameboard.makeRandomBoard();
  }
}
