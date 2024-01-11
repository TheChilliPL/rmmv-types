declare class Sprite_Weapon extends Sprite_Base {
  initialize(constructorParams: unknown[]): void;

  _weaponImageId: number;
  _animationCount: number;
  _pattern: number;

  initMembers(): void;

  setup(weaponImageId: number): void;

  override update(): void;
  animationWait(): number;
  updatePattern(): void;

  loadBitmap(): void;
  updateFrame(): void;

  isPlaying(): boolean;
}
