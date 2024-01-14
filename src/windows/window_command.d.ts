declare interface Command<TExt = unknown> {
  name: string;
  symbol: string;
  enabled: boolean;
  ext: TExt;
}

/**
 * The superclass of window for selecting a command.
 */
declare class Window_Command<TExt = unknown> extends Window_Selectable {
  initialize(...constructorParams: unknown[]): void;

  _list: Command<TExt | undefined>[];

  windowWidth(): number;
  windowHeight(): number;
  numVisibleRows(): number;
  override maxItems(): number;

  clearCommandList(): void;
  makeCommandList(): void;
  addCommand(name: string, symbol: string, enabled?: boolean, ext?: TExt): void;

  commandName(index: number): string;
  commandSymbol(index: number): string;
  isCommandEnabled(index: number): boolean;
  currentData(): Maybe<Command>;
  isCurrentItemEnabled(): boolean;
  currentSymbol(): string;
  currentExt(): any;

  findSymbol(symbol: string): number;
  selectSymbol(symbol: string): void;
  findExt(ext: TExt): number;
  selectExt(ext: TExt): void;

  override drawItem(index: number): void;
  itemTextAlign(): CanvasTextAlign;

  override isOkEnabled(): boolean;
  override callOkHandler(): void;

  override refresh(): void;
}
