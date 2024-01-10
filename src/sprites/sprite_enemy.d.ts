/**
 * The sprite for displaying an enemy.
 */
declare class Sprite_Enemy extends Sprite_Battler<Game_Enemy> {
  override initialize(constructorParams: unknown[]): void;

  _enemy: Game_Enemy;
  _appeared: boolean;
  _battlerName: string;
  _battlerHue: number;
  _effectType: Maybe<Data_BattlerEffectType>;
  _effectDuration: number;
  _shake: number;
  _stateIconSprite: Sprite_StateIcon;

  override initMembers(): void;
  createStateIconSprite(): void;
  override setBattler(battler: Game_Enemy): void;

  override update(): void;
  override updateBitmap(): void;
  loadBitmap(name: string, hue: number): void;
  override updateFrame(): void;
  override updatePosition(): void;
  updateStateSprite(): void;

  initVisibility(): void;
  setupEffect(): void;
  startEffect(effectType: Data_BattlerEffectType): void;
  startAppear(): void;
  startDisappear(): void;
  startWhiten(): void;
  startBlink(): void;
  startCollapse(): void;
  startBossCollapse(): void;
  startInstantCollapse(): void;

  updateEffect(): void;
  override isEffecting(): boolean;
  revertToNormal(): void;

  updateWhiten(): void;
  updateBlink(): void;
  updateAppear(): void;
  updateDisappear(): void;
  updateCollapse(): void;
  updateBossCollapse(): void;
  updateInstantCollapse(): void;

  override damageOffsetX(): number;
  override damageOffsetY(): number;
}
