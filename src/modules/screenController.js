import GithubIcon from "../images/github-mark.svg";

export default class ScreenController {
  static makeHeader() {
    const header = document.createElement("header");
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "Battleship";
    header.appendChild(headerTitle);
    return header;
  }

  static makeMain() {
    const main = document.createElement("main");
    main.appendChild(this.makeGrid());
    main.appendChild(this.placeShips());
    return main;
  }

  static makeGrid(){
    const grid = document.createElement("div");
    grid.className = "grid";
    for (let i = 0; i < 100; i++){
      const gridElement = document.createElement("button");
      gridElement.className = "grid-element"
      gridElement.id = i;
      gridElement.addEventListener("click", (e) => {
        console.log(e.target.id);
      })
      grid.appendChild(gridElement);
    }
    return grid;
  }

  static placeShips() {
    const shipArea = document.createElement("div");
    shipArea.id = "ship-area";
    
    return shipArea;
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
  }
}
