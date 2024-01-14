/**
 * The scene class of the menu screen.
 */
declare class Scene_Menu extends Scene_MenuBase {
  initialize(...constructorParams: unknown[]): void;

  _commandWindow: Window_MenuCommand;
  _goldWindow: Window_Gold;
  _statusWindow: Window_MenuStatus;

  override create(): void;
  override start(): void;
  createCommandWindow(): void;
  createGoldWindow(): void;
  createStatusWindow(): void;

  commandItem(): void;
  commandPersonal(): void;
  commandFormation(): void;
  commandOptions(): void;
  commandSave(): void;
  commandGameEnd(): void;

  onPersonalOk(): void;
  onPersonalCancel(): void;
  onFormationOk(): void;
  onFormationCancel(): void;
}
