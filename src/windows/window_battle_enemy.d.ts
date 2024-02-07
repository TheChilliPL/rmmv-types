/**
 * The window for selecting a target enemy on the battle screen.
 */
declare class Window_BattleEnemy extends Window_Selectable {
  constructor(x: number, y: number);
  initialize(...constructorParams: unknown[]): void;

  windowWidth(): number;
  windowHeight(): number;
  numVisibleRows(): number;
  override maxCols(): number;
  override maxItems(): number;

  enemy(): Game_Enemy;
  enemyIndex(): number;

  override drawItem(index: number): void;
  override show(): void;
  override hide(): void;
  override refresh(): void;
  override select(index: number): void;
}
