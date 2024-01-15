/**
 * The window for displaying number of items in possession and the actor's
 * equipment on the shop screen.
 */
declare class Window_ShopStatus extends Window_Base {
  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  _item: Maybe<Data_Item>;
  _pageIndex: number;

  refresh(): void;

  setItem(item: Maybe<Data_Item>): void;
  isEquipItem(): boolean;

  drawPossession(x: number, y: number): void;
  drawEquipInfo(x: number, y: number): void;

  // TODO
}
