/**
 * The sprite for displaying an overlay image for a state.
 */
declare class Sprite_StateOverlay extends Sprite_Base {
  initialize(...constructorParams: unknown[]): void;

  _battler: Maybe<Game_Battler>;
  _overlayIndex: number;
  _animationCount: number;
  _pattern: number;

  initMembers(): void;

  loadBitmap(): void;
  setup(battler: Game_Battler): void;

  override update(): void;
  animationWait(): number;
  updatePattern(): void;
  updateFrame(): void;
}
