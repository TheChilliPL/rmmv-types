/**
 * The window for selecting New Game/Continue on the title screen.
 */
declare class Window_TitleCommand extends Window_Command {
  static _lastCommandSymbol: string;

  override initialize(...constructorParams: unknown[]): void;

  initCommandPosition(): void;

  override windowWidth(): number;

  updatePlacement(): void;

  override makeCommandList(): void;
  isContinueEnabled(): boolean;

  override processOk(): void;
  selectLast(): void;
}
