/**
 * The scene class of the debug screen.
 */
declare class Scene_Debug extends Scene_MenuBase {
  override initialize(): void;

  _rangeWindow: Window_DebugRange;
  _editWindow: Window_DebugEdit;
  _debugHelpWindow: Window_Base;

  override create(): void;
  createRangeWindow(): void;
  createEditWindow(): void;
  createDebugHelpWindow(): void;

  onRangeOk(): void;
  onEditCancel(): void;
  refreshHelpWindow(): void;
  helpText(): string;
}
