import Ship from "../modules/Ship";

describe("Ship", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(5);
  });
  test("Ship can be created", () => {
    expect(ship).toEqual({ length: 5, hits: [], sunk: false });
  });

  test("Ship include the grid position where they were hit", () => {
    ship.hit(1);
    expect(ship.hits).toEqual([1]);
  });

  test("Ship not sunk when not enough hits", () => {
    ship.hit(0);
    expect(ship.isSunk()).toBeFalsy();
  });

  test("Ship sunk once enough hits took place", () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    ship.hit(4);
    expect(ship.isSunk()).toBeTruthy();
  });
});
