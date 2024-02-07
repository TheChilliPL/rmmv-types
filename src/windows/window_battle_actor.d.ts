/**
 * The window for selecting a target actor on the battle screen.
 */
declare class Window_BattleActor extends Window_BattleStatus {
  constructor(x: number, y: number);
  initialize(...constructorParams: unknown[]): void;

  override show(): void;
  override hide(): void;
  override select(index: number): void;

  actor(): Game_Actor;
}
