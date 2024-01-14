declare const enum Window_ItemListCategory {
  None = "none",
  Item = "item",
  Weapon = "weapon",
  Armor = "armor",
  KeyItem = "keyItem",
}

/**
 * The window for selecting an item on the item screen.
 */
declare class Window_ItemList<
  TItem extends Data_ItemBase = Data_ItemBase,
> extends Window_Selectable {
  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  _category: Window_ItemListCategory;
  /**
   * For some reason, it can contain null values.
   * @see Implementation of {@link Window_ItemList#makeItemList}
   */
  _data: Maybe<TItem>[];

  setCategory(category: Window_ItemListCategory): void;

  override maxCols(): number;
  override spacing(): number;
  override maxItems(): number;

  item(): Maybe<TItem>;
  override isCurrentItemEnabled(): boolean;
  includes(item: TItem): boolean;
  needsNumber(): boolean;
  isEnabled(item: TItem): boolean;

  makeItemList(): void;
  selectLast(): void;

  override drawItem(index: number): void;
  numberWidth(): number;
  drawItemNumber(item: TItem, x: number, y: number, width: number): void;

  override updateHelp(): void;

  override refresh(): void;
}
