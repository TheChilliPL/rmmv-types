/**
 * The sprite for displaying an animation.
 */
declare class Sprite_Animation extends Sprite {
  constructor();
  override initialize(constructorParams: unknown[]): void;

  _reduceArtifacts: boolean;
  _target: Maybe<Sprite_Base>;
  _animation: Maybe<Data_Animation>;
  _mirror: boolean;
  _delay: number;
  _rate: number;
  _duration: number;
  _flashColor: RGBAColor;
  _flashDuration: number;
  _screenFlashDuration: number;
  _hidingDuration: number;
  _bitmap1: Maybe<Bitmap>;
  _bitmap2: Maybe<Bitmap>;
  _cellSprites: Sprite[];
  _screenFlashSprite: Maybe<ScreenSprite>;
  _duplicated: boolean;

  static _checker1: Record<string, boolean>;
  static _checker2: Record<string, boolean>;

  initMembers(): void;
  setup(
    target: Sprite_Base,
    animation: Data_Animation,
    mirror: boolean,
    delay: number,
  ): void;
  remove(): void;
  setupRate(): void;
  setupDuration(): void;

  override update(): void;
  updateFlash(): void;
  updateScreenFlash(): void;

  absoluteX(): number;
  absoluteY(): number;

  updateHiding(): void;

  isPlaying(): boolean;

  loadBitmaps(): void;
  isReady(): boolean;
  createSprites(): void;
  createCellSprites(): void;
  createScreenFlashSprite(): void;

  updateMain(): void;
  updatePosition(): void;
  updateFrame(): void;
  currentFrameIndex(): number;
  updateAllCellSprites(frame: Data_AnimationFrame): void;
  updateCellSprite(sprite: Sprite, cell: Data_AnimationCell): void;

  processTimingData(timing: Data_AnimationTiming): void;
  startFlash(color: RGBAColor, duration: number): void;
  startScreenFlash(color: RGBAColor, duration: number): void;
  startHiding(duration: number): void;
}
