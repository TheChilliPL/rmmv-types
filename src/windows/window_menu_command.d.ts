/**
 * The window for selecting a command on the menu screen.
 */
declare class Window_MenuCommand {
  static _lastCommandSymbol: Maybe<string>;

  constructor(x: number, y: number);
  initialize(...constructorParams: unknown[]): void;

  initCommandPosition(): void;

  windowWidth(): number;
  numVisibleRows(): number;

  makeCommandList(): void;
  addMainCommands(): void;
  addFormationCommand(): void;
  addOriginalCommands(): void;
  addOptionsCommand(): void;
  addSaveCommand(): void;
  addGameEndCommand(): void;

  needsCommand(name: string): boolean;
  areMainCommandsEnabled(): boolean;
  isFormationEnabled(): boolean;
  isOptionsEnabled(): boolean;
  isSaveEnabled(): boolean;
  isGameEndEnabled(): boolean;

  processOk(): void;
  selectLast(): void;
}
