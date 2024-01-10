/**
 * The scene class of the title screen.
 */
declare class Scene_Title extends Scene_Base {
  override initialize(constructorParams: unknown[]): void;

  _backSprite1: Sprite;
  _backSprite2: Sprite;
  _gameTitleSprite: Sprite;
  override _windowLayer: WindowLayer;
  _commandWindow: Window_TitleCommand;

  override create(): void;
  override start(): void;
  override update(): void;
  override isBusy(): boolean;
  override terminate(): void;

  createBackground(): void;
  createForeground(): void;
  createCommandWindow(): void;

  commandNewGame(): void;
  commandContinue(): void;
  commandOptions(): void;

  playTitleMusic(): void;
}
