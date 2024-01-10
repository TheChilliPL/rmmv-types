/**
 * The sprite for displaying a picture.
 */
declare class Sprite_Picture extends Sprite {
  constructor(pictureId: number);
  override initialize(constructorParams: unknown[]): void;

  _pictureId: number;
  _pictureName: string;
  override _isPicture: true;

  picture(): Game_Picture;

  override update(): void;
  updateBitmap(): void;
  updateOrigin(): void;
  updatePosition(): void;
  updateScale(): void;
  updateTone(): void;
  updateOther(): void;

  loadBitmap(): void;
}
