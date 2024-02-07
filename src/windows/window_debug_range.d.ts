declare const enum Window_DebugRangeMode {
  switch = "switch",
  variable = "variable",
}

/**
 * The window for selecting a block of switches/variables on the debug screen.
 */
declare class Window_DebugRange extends Window_Selectable {
  static lastTopRow: number;
  static lastIndex: number;

  constructor(x: number, y: number);
  initialize(...constructorParams: unknown[]): void;

  _editWindow?: Maybe<Window_DebugEdit>;

  /**
   * @remarks Despite the name, it's the maximum number of **blocks** of switches.
   */
  _maxSwitches: number;
  /**
   * @remarks Despite the name, it's the maximum number of **blocks** of variables.
   */
  _maxVariables: number;

  windowWidth(): number;
  windowHeight(): number;

  override maxItems(): number;

  override update(): void;

  mode(): Window_DebugRangeMode;
  /**
   * @returns The ID of the first switch/variable in the current block.
   * @see Window_DebugRange#mode
   */
  topId(): number;

  override refresh(): void;

  override drawItem(index: number): void;

  override isCancelTriggered(): boolean;
  override processCancel(): void;

  setEditWindow(editWindow: Maybe<Window_DebugEdit>): void;
}
