/**
 * The window for inputting quantity of items to buy or sell on the shop screen.
 */
declare class Window_ShopNumber extends Window_Selectable {
  constructor(x: number, y: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  _item: Maybe<Data_Item>;
  _max: number;
  _price: number;
  _number: number;
  _currencyUnit: string;
  _buttons?: Sprite_Button[];

  windowWidth(): number;

  number(): number;

  setup(item: Data_Item, max: number, price: number): void;
  setCurrencyUnit(currencyUnit: string): void;
  createButtons(): void;
  placeButtons(): void;
  updateButtonsVisibility(): void;
  showButtons(): void;
  hideButtons(): void;

  override refresh(): void;
  drawMultiplicationSign(): void;
  drawNumber(): void;
  drawTotalPrice(): void;

  itemY(): number;
  priceY(): number;
  buttonY(): number;
  cursorWidth(): number;
  cursorX(): number;
  maxDigits(): number;

  override update(): void;

  override isOkTriggered(): boolean;
  override playOkSound(): void;

  processNumberChange(): void;
  changeNumber(amount: number): void;

  updateCursor(): void;

  onButtonUp(): void;
  onButtonUp2(): void;
  onButtonDown(): void;
  onButtonDown2(): void;
  onButtonOk(): void;
}
