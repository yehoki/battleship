import Game from "../modules/Game";
import Player from "../modules/Player";

describe("Player", () => {
  let player;
  beforeEach(() => {
    player =  new Player("test", "test");
  });
  test("Can create a new player", () => {
    expect(player).toEqual({
      playerBoard: "test",
      enemyBoard: "test"
    });
  })
  test("Game", () => {
    expect(Game()).toBe(1);
  });
});
