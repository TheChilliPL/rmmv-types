/**
 * The superclass of {@link Spriteset_Map} and {@link Spriteset_Battle}.
 */
declare class Spriteset_Base extends Sprite {
  constructor();
  initialize(...constructorParams: unknown[]): void;

  _tone: Tone;
  _baseSprite: Sprite;
  _blackScreen: ScreenSprite;
  /**
   * Available if using WebGL.
   *
   * @see Spriteset_Base#createToneChanger
   */
  _toneFilter?: ToneFilter;
  /**
   * Available if not using WebGL.
   *
   * @see Spriteset_Base#createToneChanger
   */
  _toneSprite?: ToneSprite;
  _pictureContainer: Sprite;
  _timerSprite: Sprite_Timer;
  _flashSprite: ScreenSprite;
  _fadeSprite: ScreenSprite;

  createLowerLayer(): void;
  createUpperLayer(): void;

  override update(): void;

  createBaseSprite(): void;

  /**
   * Creates either a {@link ToneFilter} ({@link Spriteset_Base#_toneFilter})
   * or a {@link ToneSprite} ({@link Spriteset_Base#_toneSprite}) depending on
   * whether the game is using WebGL.
   *
   * @see Graphics.isWebGL
   */
  createToneChanger(): void;
  /**
   * Creates a {@link ToneFilter} ({@link Spriteset_Base#_toneFilter}).
   * Available if using WebGL.
   *
   * @see Spriteset_Base#createToneChanger
   */
  createWebGLToneChanger(): void;
  /**
   * Creates a {@link ToneSprite} ({@link Spriteset_Base#_toneSprite}).
   * Called if not using WebGL.
   *
   * @see Spriteset_Base#createToneChanger
   */
  createCanvasToneChanger(): void;

  createPictures(): void;
  createTimer(): void;
  createScreenSprites(): void;

  updateScreenSprites(): void;
  updateToneChanger(): void;
  updateWebGLToneChanger(): void;
  updateCanvasToneChanger(): void;
  updatePosition(): void;
}
