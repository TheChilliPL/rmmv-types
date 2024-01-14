/**
 * The game object class for a battle action.
 */
declare class Game_Action {
  // Consts
  static EFFECT_RECOVER_HP: Data_ItemEffectType.RecoverHP;
  static EFFECT_RECOVER_MP: Data_ItemEffectType.RecoverMP;
  static EFFECT_GAIN_TP: Data_ItemEffectType.GainTP;
  static EFFECT_ADD_STATE: Data_ItemEffectType.AddState;
  static EFFECT_REMOVE_STATE: Data_ItemEffectType.RemoveState;
  static EFFECT_ADD_BUFF: Data_ItemEffectType.AddBuff;
  static EFFECT_ADD_DEBUFF: Data_ItemEffectType.AddDebuff;
  static EFFECT_REMOVE_BUFF: Data_ItemEffectType.RemoveBuff;
  static EFFECT_REMOVE_DEBUFF: Data_ItemEffectType.RemoveDebuff;
  static EFFECT_SPECIAL: Data_ItemEffectType.Special;
  static EFFECT_GROW: Data_ItemEffectType.Grow;
  static EFFECT_LEARN_SKILL: Data_ItemEffectType.LearnSkill;
  static EFFECT_COMMON_EVENT: Data_ItemEffectType.CommonEvent;
  static SPECIAL_EFFECT_ESCAPE: Data_ItemEffectType.SpecialEscape;
  static HITTYPE_CERTAIN: Data_HitType.CertainHit;
  static HITTYPE_PHYSICAL: Data_HitType.PhysicalAttack;
  static HITTYPE_MAGICAL: Data_HitType.MagicalAttack;

  /**
   * @param forcing Default: false
   */
  constructor(subject: Game_Battler, forcing?: boolean);
  initialize(...constructorParams: unknown[]): void;

  clear();
  setSubject(subject: Game_Battler): void;
  subject(): Game_Battler;

  friendsUnit(): Game_Unit;
  opponentsUnit(): Game_Unit;

  setEnemyAction(action: Data_EnemyAction): void;

  setAttack(): void;
  setGuard(): void;
  setSkill(skillId: number): void;
  setItem(itemId: number): void;
  setItemObject(object: Data_UsableItem): void;
  setTarget(targetIndex: number): void;

  item(): Data_ItemBase;
  isSkill(): boolean;
  isItem(): boolean;

  numRepeats(): number;

  checkItemScope(list: Data_ItemScope[]): boolean;
  isForOpponent(): boolean;
  isForFriend(): boolean;
  isForDeadFriend(): boolean;
  isForUser(): boolean;
  isForOne(): boolean;
  isForRandom(): boolean;
  isForAll(): boolean;

  needsSelection(): boolean;
  numTargets(): number;

  checkDamageType(list: Data_DamageType[]): boolean;
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
  testItemEffect(target: Game_Battler, effect: Data_ItemEffect): boolean; // ?

  // TODO Add documentation
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
  applyItemEffect(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectRecoverHp(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectRecoverMp(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectGainTp(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectAddState(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectAddAttackState(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectAddNormalState(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectRemoveState(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectAddBuff(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectAddDebuff(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectRemoveBuff(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectRemoveDebuff(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectSpecial(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectGrow(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectLearnSkill(target: Game_Battler, effect: Data_ItemEffect): void;
  itemEffectCommonEvent(target: Game_Battler, effect: Data_ItemEffect): void;
  makeSuccess(target: Game_Battler): void;
  applyItemUserEffect(target: Game_Battler): void;
  lukEffectRate(target: Game_Battler): number;
  applyGlobal(): void;
}
