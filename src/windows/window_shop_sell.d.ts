/**
 * The window for selecting an item to sell on the shop screen.
 */
declare class Window_ShopSell extends Window_ItemList {
  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  override isEnabled(item: Maybe<Data_Item>): boolean;
}
