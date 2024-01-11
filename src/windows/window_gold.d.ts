/**
 * The window for displaying the party's gold.
 */
declare class Window_Gold extends Window_Base {
  constructor(x: number, y: number);
  initialize(constructorParams: unknown[]): void;

  windowWidth(): number;
  windowHeight(): number;

  refresh(): void;

  value(): number;
  currencyUnit(): string;

  override open(): void;
}
