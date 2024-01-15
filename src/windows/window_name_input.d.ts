/**
 * The window for selecting text characters on the name input screen.
 */
declare class Window_NameInput extends Window_Selectable {
  static LATIN1: string[];
  static LATIN2: string[];
  static RUSSIA: string[];
  static JAPAN1: string[];
  static JAPAN2: string[];
  static JAPAN3: string[];

  constructor(editWindow: Window_NameEdit);
  initialize(...constructorParams: unknown[]): void;

  _editWindow: Window_NameEdit;
  _page: number;
  override _index: number;

  windowHeight(): number;

  table(): string[][];

  override maxCols(): number;
  override maxItems(): number;

  character(): string;
  isPageChange(): boolean;
  isOk(): boolean;

  override itemRect(index: number): Rectangle;
  override refresh(): void;
  override updateCursor(): void;
  override isCursorMovable(): boolean;

  override cursorDown(wrap: boolean): void;
  override cursorUp(wrap: boolean): void;
  override cursorRight(wrap: boolean): void;
  override cursorLeft(wrap: boolean): void;
  override cursorPagedown(): void;
  override cursorPageup(): void;
  override processCursorMove(): void;
  override processHandling(): void;
  override isCancelEnabled(): boolean;
  override processCancel(): void;
  processJump(): void;
  processBack(): void;
  override processOk(): void;

  onNameAdd(): void;
  onNameOk(): void;
}
