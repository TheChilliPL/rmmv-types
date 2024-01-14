/**
 * The scene class of the game end screen.
 */
declare class Scene_GameEnd extends Scene_MenuBase {
  initialize(...constructorParams: unknown[]): void;

  _commandWindow: Window_GameEnd;

  override create(): void;
  override stop(): void;

  override createBackground(): void;
  createCommandWindow(): void;
  commandToTitle(): void;
}
