/**
 * The sprite for displaying the timer.
 */
declare class Sprite_Timer extends Sprite {
  constructor();
  override initialize(): void;

  _seconds: number;

  createBitmap(): void;

  override update(): void;
  updateBitmap(): void;
  redraw(): void;
  timerText(): string;
  updatePosition(): void;
  updateVisibility(): void;
}
