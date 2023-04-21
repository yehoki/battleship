import Gameboard from "../modules/Gameboard";
describe("Gameboard", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("Gameboard has 100 entries", () => {
    gameboard.makeBoard();
    expect(gameboard.board.length).toEqual(100);
  });

  test("Places a ship of length 1", () => {
    gameboard.makeBoard();
    gameboard.placeShip(0, 0, 1);
    expect(gameboard.board[0]).toEqual({ length: 1, hits: 0, sunk: false });
  });

  test("Places a ship of length 5", () => {
    gameboard.makeBoard();
    gameboard.placeShip(0, 0, 5);
    expect(gameboard.board[0]).toEqual({ length: 5, hits: 0, sunk: false });
    expect(gameboard.board[4]).toEqual({ length: 5, hits: 0, sunk: false });
    expect(gameboard.board[5]).toEqual(0);
  });
});
