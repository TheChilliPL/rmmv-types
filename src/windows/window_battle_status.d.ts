/**
 * The window for displaying the status of party members on the battle screen.
 */
declare class Window_BattleStatus extends Window_Selectable {
  initialize(...constructorParams: unknown[]): void;

  windowWidth(): number;
  windowHeight(): number;
  numVisibleRows(): number;
  override maxItems(): number;

  override refresh(): void;
  override drawItem(index: number): void;
  basicAreaRect(index: number): Rectangle;
  gaugeAreaRect(index: number): Rectangle;
  gaugeAreaWidth(): number;
  drawBasicArea(rect: Rectangle, actor: Game_Actor): void;
  drawGaugeArea(rect: Rectangle, actor: Game_Actor): void;
  drawGaugeAreaWithTp(rect: Rectangle, actor: Game_Actor): void;
  drawGaugeAreaWithoutTp(rect: Rectangle, actor: Game_Actor): void;
}
