/**
 * The superclass of all the menu-type scenes.
 */
declare class Scene_MenuBase extends Scene_Base {
  override initialize(constructorParams: unknown[]): void;

  _backgroundSprite: Sprite;
  _helpWindow?: Window_Help;
  _actor: Game_Actor;
  override _windowLayer: WindowLayer;

  override create(): void;
  actor(): Game_Actor;
  updateActor(): void;
  createBackground(): void;
  setBackgroundOpacity(opacity: number): void;
  createHelpWindow(): void;

  nextActor(): void;
  previousActor(): void;

  onActorChange(): void;
}
