declare const enum Sprite_ActorMotionType {
  Walk = "walk",
  Wait = "wait",
  Chant = "chant",
  Guard = "guard",
  Damage = "damage",
  Evade = "evade",
  Thrust = "thrust",
  Swing = "swing",
  Missile = "missile",
  Skill = "skill",
  Spell = "spell",
  Item = "item",
  Escape = "escape",
  Victory = "victory",
  Dying = "dying",
  Abnormal = "abnormal",
  Sleep = "sleep",
  Dead = "dead",
}

declare interface Sprite_ActorMotion {
  index: number;
  loop: boolean;
}

/**
 * The sprite for displaying an actor during battle.
 */
declare class Sprite_Actor extends Sprite_Battler<Game_Actor> {
  static MOTIONS: Record<Sprite_ActorMotionType, Sprite_ActorMotion>;

  override initialize(constructorParams: unknown[]): void;

  _actor: Game_Actor;
  _battlerName: string;
  _motion: Maybe<Sprite_ActorMotion>;
  _motionCount: number;
  _pattern: number;
  _shadowSprite: Sprite;
  _weaponSprite: Sprite_Weapon;
  _mainSprite: Sprite_Base;
  _stateSprite: Sprite_StateOverlay;

  override initMembers(): void;
  createMainSprite(): void;
  createShadowSprite(): void;
  createWeaponSprite(): void;
  createStateSprite(): void;

  setBattler(battler: Game_Actor): void;
  moveToStartPosition(): void;
  setActorHome(index: number): void;

  override update(): void;
  updateShadow(): void;
  override updateMain(): void;

  setupMotion(): void;
  setupWeaponAnimation(): void;

  startMotion(motionType: Sprite_ActorMotionType): void;

  updateTargetPosition(): void;
  override updateBitmap(): void;
  override updateFrame(): void;
  override updateMove(): void;
  updateMotion(): void;
  updateMotionCount(): void;

  motionSpeed(): number;

  refreshMotion(): void;

  startEntryMotion(): void;
  stepForward(): void;
  stepBack(): void;
  retreat(): void;

  override onMoveEnd(): void;
  override damageOffsetX(): number;
  override damageOffsetY(): number;
}
