/**
 * The sprite for displaying a popup damage.
 */
declare class Sprite_Damage extends Sprite {
  initialize(...constructorParams: unknown[]): void;

  _duration: number;
  _flashColor: RGBAColor;
  _flashDuration: number;
  _damageBitmap: Bitmap;

  setup(target: Game_Battler): void;
  setupCriticalEffect(): void;
  digitWidth(): number;
  digitHeight(): number;
  createMiss(): void;
  createDigits(baseRow: number, value: number): void;
  createChildSprite(): Sprite;

  override update(): void;
  updateChild(sprite: Sprite): void;
  updateFlash(): void;
  updateOpacity(): void;

  isPlaying(): boolean;
}
