/**
 * The scene class of the game over screen.
 */
declare class Scene_Gameover extends Scene_Base {
  initialize(...constructorParams: unknown[]): void;

  _backSprite: Sprite;

  override create(): void;
  override start(): void;
  override update(): void;
  override stop(): void;
  override terminate(): void;

  playGameoverMusic(): void;
  createBackground(): void;

  isTriggered(): boolean;

  gotoTitle(): void;
}
