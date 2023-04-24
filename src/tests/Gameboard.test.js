import Gameboard from "../modules/Gameboard";
describe("Gameboard", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard();
    gameboard.makeBoard();
  });

  test("Gameboard has 100 entries", () => {
    expect(gameboard.board.length).toEqual(100);
  });

  test("Places a ship of length 1", () => {
    gameboard.placeShip(0, 0, 1);
    expect(gameboard.board[0]).toEqual({ length: 1, hits: [], sunk: false });
  });

  test("Places a ship of length 5", () => {
    gameboard.placeShip(0, 0, 5);
    expect(gameboard.board[0]).toEqual({ length: 5, hits: [], sunk: false });
    expect(gameboard.board[4]).toEqual({ length: 5, hits: [], sunk: false });
    expect(gameboard.board[5]).toEqual(0);
  });

  test("Does not place a ship when it would go out of bounds horizontally", () => {
    expect(gameboard.placeShip(9, 0, 2)).toBeFalsy();
    expect(gameboard.board[9]).toBe(0);
  });

  test("Does not place a ship when it would go out of bounds vertically", () => {
    expect(gameboard.placeShip(1, 9, 2, "vertical")).toBeFalsy();
    expect(gameboard.board[91]).toBe(0);
  });

  test("Attacking open waters changes its value to 1", () => {
    gameboard.receiveAttack(0, 0);
    expect(gameboard.board[0]).toEqual(1);
  });

  test("Attacking a missed shot area has no effect", () => {
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 0);
    expect(gameboard.board[0]).toEqual(1);
  });

  test("Attacking a ship returns true", () => {
    gameboard.placeShip(0, 0, 1);
    expect(gameboard.receiveAttack(0, 0)).toBeTruthy();
  });

  test("Empty board means all ships are sunk", () => {
    expect(gameboard.allShipsSunk()).toBeTruthy();
  });

  test("Ship sunk correctly shown", () => {
    gameboard.placeShip(0, 0, 1);
    expect(gameboard.allShipsSunk()).toBeFalsy();
    gameboard.receiveAttack(0, 0);
    expect(gameboard.allShipsSunk()).toBeTruthy();
  });
});
