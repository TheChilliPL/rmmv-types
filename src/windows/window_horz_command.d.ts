/**
 * The command window for the horizontal selection format.
 */
declare class Window_HorzCommand extends Window_Command {
  constructor(x: number, y: number);
  initialize(constructorParams: unknown[]): void;

  override numVisibleRows(): number;
  override maxCols(): number;
  override itemTextAlign(): CanvasTextAlign;
}
