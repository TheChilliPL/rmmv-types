/**
 * The scene class of the status screen.
 */
declare class Scene_Status extends Scene_MenuBase {
  override initialize(): void;

  override _statusWindow: Window_Status;

  override create(): void;
  override start(): void;

  refreshActor(): void;

  override onActorChange(): void;
}
