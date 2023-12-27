declare const enum BattlerEffectType {
  Whiten = "whiten",
  Blink = "blink",
  Collapse = "collapse",
  BossCollapse = "bossCollapse",
  InstantCollapse = "instantCollapse",
}

declare const enum BattlerMotionType {
  Guard = "guard",
  Spell = "spell",
  Skill = "skill",
  Item = "item",

  Thrust = "thrust",
  Swing = "swing",
  Missile = "missile",

  Damage = "damage",
  Evade = "evade",
  Victory = "victory",
  Escape = "escape",
}

declare const enum BattlerActionState {
  Undecided = "undecided",
  Inputting = "inputting",
  Waiting = "waiting",
  Acting = "acting",
  Done = "done",
}

/**
 * The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
 * and actions.
 */
declare class Game_Battler extends Game_BattlerBase {
  override initialize(): void;

  _actions: Game_Action[];
  _speed: number;
  _result: Game_ActionResult;
  _actionState: string;
  _lastTargetIndex: number;
  _animations: Data_Animation[]; // TODO ?
  _damagePopup: boolean;
  _effectType: Maybe<Data_Effect>;
  _motionType: BattlerMotionType;
  _weaponImageId: number;
  _motionRefresh: boolean;
  _selected: boolean;

  clearAnimations(): void;
  clearDamagePopup(): void;
  clearWeaponAnimation(): void;
  clearEffect(): void;
  clearMotion(): void;

  requestEffect(effectType: BattlerEffectType): void;
  requestMotion(motionType: BattlerMotionType): void;
  requestMotionRefresh(): void;

  select(): void;
  deselect(): void;

  isAnimationRequested(): boolean;
  isDamagePopupRequested(): boolean;
  isEffectRequested(): boolean;
  isMotionRequested(): boolean;
  isWeaponAnimationRequested(): boolean;
  isMotionRefreshRequested(): boolean;

  isSelected(): boolean;

  effectType(): BattlerEffectType;
  motionType(): BattlerMotionType;
  weaponImageId(): number;

  shiftAnimation(): Data_Animation;
  startAnimation(animationId: number, mirror: boolean, delay: number): void;
  startDamagePopup(): void;
  startWeaponAnimation(weaponImageId: number): void;

  action(index: number): Game_Action;
  setAction(index: number, action: Game_Action): void;
  numActions(): number;
  clearActions(): void;

  result(): Game_ActionResult;
  clearResult(): void;

  override refresh(): void;

  addState(stateId: number): void;
  isStateAddable(stateId: number): boolean;
  isStateRestrict(stateId: number): boolean;
  override onRestrict(): void;
  removeState(stateId: number): void;

  escape(): void;

  addBuff(paramId: number, turns: number): void;
  addDebuff(paramId: number, turns: number): void;
  removeBuff(paramId: number): void;
  removeBattleStates(): void;
  removeAllBuffs(): void;
  removeStatesAuto(timing: number): void;
  removeBuffsAuto(): void;
  removeStatesByDamage(): void;

  makeActionTimes(): number;
  makeActions(): void;

  speed(): number;
  makeSpeed(): void;

  currentAction(): Game_Action;
  removeCurrentAction(): void;
  setLastTarget(target: Game_Battler): void;
  forceAction(skillId: number, targetIndex: number): void;

  useItem(item: Data_UsableItem): void;
  consumeItem(item: Data_UsableItem): void;

  gainHp(value: number): void;
  gainMp(value: number): void;
  gainTp(value: number): void;
  gainSilentTp(value: number): void;
  initTp(): void;
  clearTp(): void;
  chargeTpByDamage(damageRate: number): void;
  regenerateHp(): void;
  maxSlipDamage(): number;
  regenerateMp(): void;
  regenerateTp(): void;
  regenerateAll(): void;

  onBattleStart(): void;
  onAllActionsEnd(): void;
  onTurnEnd(): void;
  onBattleEnd(): void;
  onDamage(value: number): void;

  setActionState(actionState: BattlerActionState): void;

  isUndecided(): boolean;
  isInputting(): boolean;
  isWaiting(): boolean;
  isActing(): boolean;
  isChanting(): boolean;
  isGuardWaiting(): boolean;

  performActionStart(action: Game_Action): void;
  performAction(action: Game_Action): void;
  performActionEnd(): void;
  performDamage(): void;
  performMiss(): void;
  performRecovery(): void;
  performEvasion(): void;
  performMagicEvasion(): void;
  performCounter(): void;
  performReflection(): void;
  performSubstitute(target: Game_Battler): void;
  performCollapse(): void;
}
