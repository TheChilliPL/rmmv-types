/**
 * The sprite for displaying state icons.
 */
declare class Sprite_StateIcon extends Sprite {
  static _iconWidth: number;
  static _iconHeight: number;

  constructor();
  override initialize(constructorParams: unknown[]): void;

  _battler: Maybe<Game_Battler>;
  _iconIndex: number;
  _animationCount: number;
  _animationIndex: number;

  initMembers(): void;

  loadBitmap(): void;
  setup(battler: Game_Battler): void;

  override update(): void;
  animationWait(): number;
  updateIcon(): void;
  updateFrame(): void;
}
