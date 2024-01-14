/**
 * The window for selecting a command on the equipment screen.
 */
declare class Window_EquipCommand extends Window_HorzCommand {
  constructor(x: number, y: number, width: number);
  initialize(...constructorParams: unknown[]): void;

  _windowWidth: number;

  override windowWidth(): number;
  override maxCols(): number;

  override makeCommandList(): void;
}
