/**
 * The scene class of the shop screen.
 */
declare class Scene_Shop extends Scene_MenuBase {
  override initialize(constructorParams: unknown[]): void;

  _goods: Data_ShopGood[];
  _purchaseOnly: boolean;
  _item: Data_ItemBase;
  _goldWindow: Window_Gold;
  _commandWindow: Window_ShopCommand;
  _dummyWindow: Window_Base;
  _numberWindow: Window_ShopNumber;
  _statusWindow: Window_ShopStatus;
  _buyWindow: Window_ShopBuy;
  _categoryWindow: Window_ItemCategory;
  _sellWindow: Window_ShopSell;

  prepare(goods: Data_ShopGood[], purchaseOnly: boolean): void;

  override create(): void;

  createGoldWindow(): void;
  createCommandWindow(): void;
  createDummyWindow(): void;
  createNumberWindow(): void;
  createStatusWindow(): void;
  createBuyWindow(): void;
  createCategoryWindow(): void;
  createSellWindow(): void;

  activateBuyWindow(): void;
  activateSellWindow(): void;

  commandBuy(): void;
  commandSell(): void;

  onBuyOk(): void;
  onBuyCancel(): void;
  onCategoryOk(): void;
  onCategoryCancel(): void;
  onSellOk(): void;
  onSellCancel(): void;
  onNumberOk(): void;
  onNumberCancel(): void;

  doBuy(number: number): void;
  doSell(number: number): void;

  endNumberInput(): void;

  maxBuy(): number;
  maxSell(): number;
  money(): number;
  currencyUnit(): string;
  buyingPrice(): number;
  sellingPrice(): number;
}
