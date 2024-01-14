/**
 * The window for selecting a category of items on the item and shop screens.
 */
declare class Window_ItemCategory extends Window_HorzCommand {
  initialize(...constructorParams: unknown[]): void;

  _itemWindow?: Maybe<Window_ItemList>;

  override windowWidth(): number;
  override maxCols(): number;

  override update(): void;

  override makeCommandList(): void;

  setItemWindow(itemWindow: Maybe<Window_ItemList>): void;
}
