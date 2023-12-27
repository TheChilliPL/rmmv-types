/**
 * The game object class for a battle action.
 */
declare class Game_Action {
  // Consts
  // TODO Find a better way to do this
  static EFFECT_RECOVER_HP: 11;
  static EFFECT_RECOVER_MP: 12;
  static EFFECT_GAIN_TP: 13;
  static EFFECT_ADD_STATE: 21;
  static EFFECT_REMOVE_STATE: 22;
  static EFFECT_ADD_BUFF: 31;
  static EFFECT_ADD_DEBUFF: 32;
  static EFFECT_REMOVE_BUFF: 33;
  static EFFECT_REMOVE_DEBUFF: 34;
  static EFFECT_SPECIAL: 41;
  static EFFECT_GROW: 42;
  static EFFECT_LEARN_SKILL: 43;
  static EFFECT_COMMON_EVENT: 44;
  static SPECIAL_EFFECT_ESCAPE: 0;
  static HITTYPE_CERTAIN: 0;
  static HITTYPE_PHYSICAL: 1;
  static HITTYPE_MAGICAL: 2;

  initialize(subject: Game_Battler, forcing: boolean = false): void;

  clear();
  setSubject(subject: Game_Battler): void;
  subject(): Game_Battler;

  friendsUnit(): Game_Unit;
  opponentsUnit(): Game_Unit;

  setEnemyAction(
    action: Data_Action, // ? TODO
  ): void;

  setAttack(): void;
  setGuard(): void;
  setSkill(skillId: number): void;
  setItem(itemId: number): void;
  setItemObject(object: Data_UsableItem): void;
  setTarget(targetIndex: number): void;

  item(): Data_Item;
  isSkill(): boolean;
  isItem(): boolean;

  numRepeats(): number;

  checkItemScope(list: ItemScope[]): boolean;
  isForOpponent(): boolean;
  isForFriend(): boolean;
  isForDeadFriend(): boolean;
  isForUser(): boolean;
  isForOne(): boolean;
  isForRandom(): boolean;
  isForAll(): boolean;

  needsSelection(): boolean;
  numTargets(): number;

  checkDamageType(list: DamageType[]): boolean;
  isHpEffect(): boolean;
  isMpEffect(): boolean;
  isDamage(): boolean;
  isRecover(): boolean;
  isDrain(): boolean;
  isHpRecover(): boolean;
  isMpRecover(): boolean;

  isCertainHit(): boolean;
  isPhysical(): boolean;
  isMagical(): boolean;
  isAttack(): boolean;
  isGuard(): boolean;

  isMagicSkill(): boolean;

  decideRandomTarget(): void;

  setConfusion(): void;

  prepare(): void;
  isValid(): boolean;

  speed(): number;

  makeTargets(): Game_Battler[];
  repeatTargets(targets: Game_Battler[]): Game_Battler[];
  confusionTarget(): Game_Battler;
  targetsForOpponents(): Game_Battler[];
  targetsForFriends(): Game_Battler[];

  evaluate(): number; // ?
  itemTargetCandidates(): Game_Battler[];
  evaluateWithTarget(target: Game_Battler): number;
  testApply(target: Game_Battler): boolean; // ?
  hasItemAnyValidEffects(target: Game_Battler): boolean;
  testItemEffect(target: Game_Battler, effect: Data_Effect): boolean; // ?

  // TODO Add documentation
  itemCnt(target: Game_Battler): number;
  itemMrf(target: Game_Battler): number;
  itemHit(target: Game_Battler): number;
  itemEva(target: Game_Battler): number;
  itemCri(target: Game_Battler): number;

  apply(target: Game_Battler): void;
  makeDamageValue(target: Game_Battler, critical: boolean): number;
  evalDamageFormula(target: Game_Battler): number;
  calcElementRate(target: Game_Battler): number;
  elementsMaxRate(target: Game_Battler, elements: number[]): number;
  applyCritical(damage: number): number;
  applyVariance(damage: number, variance: number): number;
  applyGuard(damage: number, target: Game_Battler): number;
  executeDamage(target: Game_Battler, value: number): void;
  executeHpDamage(target: Game_Battler, value: number): void;
  executeMpDamage(target: Game_Battler, value: number): void;
  gainDrainedHp(value: number): void;
  gainDrainedMp(value: number): void;
  applyItemEffect(target: Game_Battler, effect: Data_Effect): void;
  itemEffectRecoverHp(target: Game_Battler, effect: Data_Effect): void;
  itemEffectRecoverMp(target: Game_Battler, effect: Data_Effect): void;
  itemEffectGainTp(target: Game_Battler, effect: Data_Effect): void;
  itemEffectAddState(target: Game_Battler, effect: Data_Effect): void;
  itemEffectAddAttackState(target: Game_Battler, effect: Data_Effect): void;
  itemEffectAddNormalState(target: Game_Battler, effect: Data_Effect): void;
  itemEffectRemoveState(target: Game_Battler, effect: Data_Effect): void;
  itemEffectAddBuff(target: Game_Battler, effect: Data_Effect): void;
  itemEffectAddDebuff(target: Game_Battler, effect: Data_Effect): void;
  itemEffectRemoveBuff(target: Game_Battler, effect: Data_Effect): void;
  itemEffectRemoveDebuff(target: Game_Battler, effect: Data_Effect): void;
  itemEffectSpecial(target: Game_Battler, effect: Data_Effect): void;
  itemEffectGrow(target: Game_Battler, effect: Data_Effect): void;
  itemEffectLearnSkill(target: Game_Battler, effect: Data_Effect): void;
  itemEffectCommonEvent(target: Game_Battler, effect: Data_Effect): void;
  makeSuccess(target: Game_Battler): void;
  applyItemUserEffect(target: Game_Battler): void;
  lukEffectRate(target: Game_Battler): number;
  applyGlobal(): void;
}
