/**
 * The window class with cursor movement and scroll functions.
 */
declare class Window_Selectable extends Window_Base {
  constructor(x: number, y: number, width: number, height: number);
  initialize(constructorParams: unknown[]): void;

  _index: number;
  _cursorFixed: boolean;
  _cursorAll: boolean;
  _stayCount: number;
  _helpWindow: Maybe<Window_Help>;
  _handlers: Record<string, () => void>;
  _touching: boolean;
  _scrollX: number;
  _scrollY: number;

  index(): number;
  cursorFixed(): boolean;
  setCursorFixed(cursorFixed: boolean): void;
  cursorAll(): boolean;
  setCursorAll(cursorAll: boolean): void;
  maxCols(): number;
  maxItems(): number;
  spacing(): number;
  itemWidth(): number;
  itemHeight(): number;
  maxRows(): number;

  activate(): void;
  deactivate(): void;

  select(index: number): void;
  deselect(): void;
  reselect(): void;

  row(): number;
  topRow(): number;
  maxTopRow(): number;
  setTopRow(row: number): void;
  resetScroll(): void;
  maxPageRows(): number;
  maxPageItems(): number;
  isHorizontal(): boolean;
  bottomRow(): number;
  setBottomRow(row: number): void;
  topIndex(): number;
  itemRect(index: number): Rectangle;
  itemRectForText(index: number): Rectangle;

  setHelpWindow(helpWindow: Maybe<Window_Help>): void;
  showHelpWindow(): void;
  hideHelpWindow(): void;

  setHandler(symbol: string, method: () => void): void;
  isHandled(symbol: string): boolean;
  callHandler(symbol: string): void;

  isOpenAndActive(): boolean;
  isCursorMovable(): boolean;
  cursorDown(wrap: boolean): void;
  cursorUp(wrap: boolean): void;
  cursorRight(wrap: boolean): void;
  cursorLeft(wrap: boolean): void;
  cursorPagedown(): void;
  cursorPageup(): void;
  scrollDown(): void;
  scrollUp(): void;

  override update(): void;
  updateArrows(): void;
  processCursorMove(): void;
  processHandling(): void;
  processWheel(): void;
  processTouch(): void;

  isTouchedInsideFrame(): boolean;
  onTouch(triggered: boolean): void;
  hitTest(x: number, y: number): number;
  isContentsArea(x: number, y: number): boolean;

  isTouchOkEnabled(): boolean;
  isOkEnabled(): boolean;
  isCancelEnabled(): boolean;
  isOkTriggered(): boolean;
  isCancelTriggered(): boolean;

  processOk(): void;
  playOkSound(): void;
  playBuzzerSound(): void;
  callOkHandler(): void;

  processCancel(): void;
  callCancelHandler(): void;

  processPageup(): void;
  processPagedown(): void;

  updateInputData(): void;
  updateCursor(): void;
  isCursorVisible(): boolean;
  ensureCursorVisible(): boolean;
  callUpdateHelp(): void;
  updateHelp(): void;

  setHelpWindowItem(item: Data_ItemBase): void;
  isCurrentItemEnabled(): boolean;

  drawAllItems(): void;
  drawItem(index: number): void;
  clearItem(index: number): void;
  redrawItem(index: number): void;
  redrawCurrentItem(): void;
  refresh(): void;
}
