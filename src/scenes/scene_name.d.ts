/**
 * The scene class of name input screen.
 */
declare class Scene_Name extends Scene_MenuBase {
  override initialize(constructorParams: unknown[]): void;

  _actorId: number;
  _maxLength: number;
  _actor: Game_Actor;
  _editWindow: Window_NameEdit;
  _inputWindow: Window_NameInput;

  prepare(actorId: number, maxLength: number): void;

  override create(): void;

  override start(): void;

  createEditWindow(): void;
  createInputWindow(): void;

  onInputOk(): void;
}
