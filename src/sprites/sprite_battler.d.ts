/**
 * The superclass of {@link Sprite_Actor} and {@link Sprite_Enemy}.
 */
declare class Sprite_Battler<
  TBattler extends Game_Battler = Game_Battler,
> extends Sprite_Base {
  constructor(battler: TBattler);
  initialize(...constructorParams: unknown[]): void;

  /**
   * @remarks
   * For whatever reason, seems to be almost unused in derived classes.
   *
   * {@link Sprite_Actor} uses {@link Sprite_Actor#_actor} instead and
   * {@link Sprite_Enemy} uses {@link Sprite_Enemy#_enemy} instead.
   */
  _battler: TBattler;
  _damages: Sprite_Damage[];
  _homeX: number;
  _homeY: number;
  _offsetX: number;
  _offsetY: number;
  _targetOffsetX: number;
  _targetOffsetY: number;
  _movementDuration: number;
  _selectionEffectCount: number;

  initMembers(): void;
  setBattler(battler: TBattler): void;
  setHome(x: number, y: number): void;

  override update(): void;
  override updateVisibility(): void;
  updateMain(): void;
  updateBitmap(): void;
  updateFrame(): void;
  updateMove(): void;
  updatePosition(): void;
  updateAnimation(): void;
  updateDamagePopup(): void;
  updateSelectionEffect(): void;

  setupAnimation(): void;

  setupDamagePopup(): void;
  damageOffsetX(): number;
  damageOffsetY(): number;

  startMove(x: number, y: number, duration: number): void;
  onMoveEnd(): void;

  isEffecting(): boolean;
  isMoving(): boolean;
  inHomePosition(): boolean;
}
