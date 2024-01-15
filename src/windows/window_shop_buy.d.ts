/**
 * The window for selecting an item to buy on the shop screen.
 */
declare class Window_ShopBuy extends Window_Selectable {
  constructor(x: number, y: number, height: number, shopGoods: Data_ShopGood[]);
  initialize(...constructorParams: unknown[]): void;

  _shopGoods: Data_ShopGood[];
  _money: number;
  _data: Data_Item[];
  _price: number[];
  _statusWindow?: Maybe<Window_ShopStatus>;

  windowWidth(): number;
  override maxItems(): number;

  item(): Data_Item;

  setMoney(money: number): void;

  override isCurrentItemEnabled(): boolean;
  price(item: Data_Item): number;
  isEnabled(item: Data_Item): boolean;

  override refresh(): void;
  makeItemList(): void;
  drawItem(index: number): void;

  setStatusWindow(statusWindow: Maybe<Window_ShopStatus>): void;
  override updateHelp(): void;
}
