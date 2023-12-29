/**
 * The sprite for displaying the destination place of the touch input.
 */
declare class Sprite_Destination extends Sprite {
  constructor();
  override initialize(): void;

  _frameCount: number;

  update(): void;
  createBitmap(): void;
  updatePosition(): void;
  updateAnimation(): void;
}
