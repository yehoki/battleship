import Ship from "../modules/Ship";

describe("Ship", () => {
    let ship;
  beforeEach(() => {
    ship = new Ship(5);
  })
  test("Ship can be created", () => {
    expect(ship).toEqual({length: 5, hits: 0, sunk: false});
  });

  test("Ship can be hit", () => {
    ship.hit();
    expect(ship.hits).toEqual(1);
  });
  test("Ship not sunk when not enough hits", () => {
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
  });
  test("Ship sunk once enough hits took place", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  })
});
