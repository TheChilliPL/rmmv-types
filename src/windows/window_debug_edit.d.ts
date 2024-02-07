/**
 * The window for displaying switches and variables on the debug screen.
 */
declare class Window_DebugEdit extends Window_Selectable {
  constructor(x: number, y: number, width: number);
  initialize(...constructorParams: unknown[]): void;

  _mode: Window_DebugRangeMode;
  _topId: number;

  override maxItems(): number;

  override refresh(): void;
  override drawItem(index: number): void;
  itemName(dataId: number): string;
  itemStatus(dataId: number): string;
  setMode(mode: Window_DebugRangeMode): void;
  setTopId(id: number): void;
  currentId(): number;

  override update(): void;
  updateSwitch(): void;
  updateVariable(): void;
}
