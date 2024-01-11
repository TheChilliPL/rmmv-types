/**
 * The scene class for initializing the entire game.
 */
declare class Scene_Boot extends Scene_Base {
  initialize(constructorParams: unknown[]): void;

  _startDate: number;

  override create(): void;
  loadSystemWindowImage(): void;
  static loadSystemImages(): void;

  override isReady(): boolean;
  isGameFontLoaded(): boolean;

  override start(): void;
  updateDocumentTitle(): void;
  checkPlayerLocation(): void;
}
