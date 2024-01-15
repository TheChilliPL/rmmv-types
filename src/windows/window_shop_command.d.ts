/**
 * The window for selecting buy/sell on the shop screen.
 */
declare class Window_ShopCommand extends Window_HorzCommand {
  constructor(width: number, purchaseOnly: boolean);
  initialize(...constructorParams: unknown[]): void;

  _windowWidth: number;
  _purchaseOnly: boolean;

  override windowWidth(): number;
  override maxCols(): number;

  override makeCommandList(): void;
}
