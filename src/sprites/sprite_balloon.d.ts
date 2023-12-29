/**
 * The sprite for displaying a balloon icon.
 */
declare class Sprite_Balloon extends Sprite_Base {
  override initialize(): void;

  _balloonId: number;
  _duration: number;

  initMembers(): void;

  loadBitmap(): void;
  setup(balloonId: number): void;

  override update(): void;
  updateFrame(): void;

  speed(): number;
  waitTime(): number;
  frameIndex(): number;
  isPlaying(): boolean;
}
