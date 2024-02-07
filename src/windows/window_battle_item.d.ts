/**
 * The window for selecting an item to use on the battle screen.
 */
declare class Window_BattleItem extends Window_ItemList {
  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  override includes(item: Data_ItemBase): boolean;

  override show(): void;
  override hide(): void;
}
