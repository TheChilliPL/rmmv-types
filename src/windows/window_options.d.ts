/**
 * The window for changing various settings on the options screen.
 */
declare class Window_Options extends Window_Command {
  initialize(...constructorParams: unknown[]): void;

  override windowWidth(): number;
  override windowHeight(): number;

  updatePlacement(): void;

  override makeCommandList(): void;
  addGeneralOptions(): void;
  addVolumeOptions(): void;

  override drawItem(index: number): void;

  statusWidth(): number;
  statusText(index: number): string;
  isVolumeSymbol(symbol: string): boolean;
  booleanStatusText(value: boolean): string;
  volumeStatusText(value: number): string;

  override processOk(): void;
  override cursorRight(wrap?: boolean): void;
  override cursorLeft(wrap?: boolean): void;

  volumeOffset(): number;

  changeValue(symbol: string, value: boolean | number): void;
  getConfigValue(symbol: string): boolean | number;

  /**
   * @param volume Despite the name, this can be a boolean or a number.
   * For volume options, it's a number. For other options, it's a boolean,
   * meaning the value.
   */
  setConfigValue(symbol: string, volume: boolean | number): void;
}
