/**
 * The sprite class with a feature which displays animations.
 *
 * @remarks
 * Despite the name, it does not serve as a base class for all other sprites.
 * Sprites that don't require the feature of displaying animations such as
 * {@link Sprite_Button} are **not** derived from this class, but directly
 * from {@link Sprite} instead.
 */
declare class Sprite_Base extends Sprite {
  constructor();
  override initialize(): void;

  _animationSprites: Sprite[];
  _effectTarget: Sprite_Base;
  _hiding: boolean;

  override update(): void;
  hide(): void;
  show(): void;
  updateVisibility(): void;
  updateAnimationSprites(): void;

  startAnimation(
    animation: Sprite_Animation,
    mirror: boolean,
    delay: number,
  ): void;
  isAnimationPlaying(): boolean;
}
