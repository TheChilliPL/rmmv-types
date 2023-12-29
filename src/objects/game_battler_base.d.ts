/**
 * The superclass of {@link Game_Battler}. It mainly contains parameters calculation.
 */
declare class Game_BattlerBase {
  static TRAIT_ELEMENT_RATE: Data_TraitType.ElementRate;
  static TRAIT_DEBUFF_RATE: Data_TraitType.DebuffRate;
  static TRAIT_STATE_RATE: Data_TraitType.StateRate;
  static TRAIT_STATE_RESIST: Data_TraitType.StateResist;
  static TRAIT_PARAM: Data_TraitType.Param;
  static TRAIT_XPARAM: Data_TraitType.XParam;
  static TRAIT_SPARAM: Data_TraitType.SParam;
  static TRAIT_ATTACK_ELEMENT: Data_TraitType.AttackElement;
  static TRAIT_ATTACK_STATE: Data_TraitType.AttackState;
  static TRAIT_ATTACK_SPEED: Data_TraitType.AttackSpeed;
  static TRAIT_ATTACK_TIMES: Data_TraitType.AttackTimes;
  static TRAIT_STYPE_ADD: Data_TraitType.StypeAdd;
  static TRAIT_STYPE_SEAL: Data_TraitType.StypeSeal;
  static TRAIT_SKILL_ADD: Data_TraitType.SkillAdd;
  static TRAIT_SKILL_SEAL: Data_TraitType.SkillSeal;
  static TRAIT_EQUIP_WTYPE: Data_TraitType.EquipWtype;
  static TRAIT_EQUIP_ATYPE: Data_TraitType.EquipAtype;
  static TRAIT_EQUIP_LOCK: Data_TraitType.EquipLock;
  static TRAIT_EQUIP_SEAL: Data_TraitType.EquipSeal;
  static TRAIT_SLOT_TYPE: Data_TraitType.SlotType;
  static TRAIT_ACTION_PLUS: Data_TraitType.ActionPlus;
  static TRAIT_SPECIAL_FLAG: Data_TraitType.SpecialFlag;
  static TRAIT_COLLAPSE_TYPE: Data_TraitType.CollapseType;
  static TRAIT_PARTY_ABILITY: Data_TraitType.PartyAbility;

  static FLAG_ID_AUTO_BATTLE: Data_TraitFlag.AutoBattle;
  static FLAG_ID_GUARD: Data_TraitFlag.Guard;
  static FLAG_ID_SUBSTITUTE: Data_TraitFlag.Substitute;
  static FLAG_ID_PRESERVE_TP: Data_TraitFlag.PreserveTp;

  static ICON_BUFF_START: number;
  static ICON_DEBUFF_START: number;

  initialize(): void;

  _hp: number;
  _mp: number;
  _tp: number;

  _paramPlus: Data_BattlerParams;
  _states: number[];
  _stateTurns: { [stateId: number]: number };
  _buffs: Data_BattlerParams;
  _buffTurns: Data_BattlerParams;

  /** Hit points */
  get hp(): number;
  /** Magic points */
  get mp(): number;
  /** Tactical points */
  get tp(): number;
  /** Maximum hit points */
  get mhp(): number;
  /** Maximum magic points */
  get mmp(): number;
  /** Attack power */
  get atk(): number;
  /** Defense power */
  get def(): number;
  /** Magical attack power */
  get mat(): number;
  /** Magical defense power */
  get mdf(): number;
  /** Agility */
  get agi(): number;
  /** Luck */
  get luk(): number;
  /** Hit rate */
  get hit(): number;
  /** Evasion rate */
  get eva(): number;
  /** Critical rate */
  get cri(): number;
  /** Critical evasion rate */
  get cev(): number;
  /** Magic evasion rate */
  get mev(): number;
  /** Magic reflection rate */
  get mrf(): number;
  /** Counter attack rate */
  get cnt(): number;
  /** HP regeneration rate */
  get hrg(): number;
  /** MP regeneration rate */
  get mrg(): number;
  /** TP regeneration rate */
  get trg(): number;
  /** Target rate */
  get tgr(): number;
  /** Guard effect rate */
  get grd(): number;
  /** Recovery effect rate */
  get rec(): number;
  /** Pharmacology */
  get pha(): number;
  /** MP cost rate */
  get mcr(): number;
  /** TP charge rate */
  get tcr(): number;
  /** Physical damage rate */
  get pdr(): number;
  /** Magical damage rate */
  get mdr(): number;
  /** Floor damage rate */
  get fdr(): number;
  /** Experience rate */
  get exr(): number;

  initMembers(): void;

  clearParamPlus(): void;

  clearStates(): void;
  eraseState(stateId: number): void;
  isStateAffected(stateId: number): boolean;
  isDeathStateAffected(): boolean;
  deathStateId(): number;
  resetStateCounts(stateId: number): void;
  isStateExpired(stateId: number): boolean;
  updateStateTurns(): void;

  clearBuffs(): void;
  eraseBuff(paramId: number): void;
  buffLength(): number;
  buff(paramId: number): number;
  isBuffAffected(paramId: number): boolean;
  isDebuffAffected(paramId: number): boolean;
  isBuffOrDebuffAffected(paramId: number): boolean;
  isMaxBuffAffected(paramId: number): boolean;
  isMaxDebuffAffected(paramId: number): boolean;
  increaseBuff(paramId: number): void;
  decreaseBuff(paramId: number): void;
  overwriteBuffTurns(paramId: number, turns: number): void;
  isBuffExpired(paramId: number): boolean;
  updateBuffTurns(): void;

  die(): void;
  revive(): void;
  states(): Data_State[];

  stateIcons(): number[];
  buffIcons(): number[];
  buffIconIndex(buffLevel: number, paramId: number): number;
  allIcons(): number[];

  traitObjects(): Data_TraitObject[];
  allTraits(): Data_Trait[];
  traits(code: number): Data_Trait[];
  traitsWithId(code: number, id: number): Data_Trait[];
  /** All traits returned by {@link traitsWithId} multiplied together. */
  traitsPi(code: number, id: number): number;
  traitsSum(code: number, id: number): number;
  traitsSumAll(code: number): number;
  traitsSet(code: number): number[];

  paramBase(paramId: number): number;
  paramPlus(paramId: number): number;
  paramMin(paramId: number): number;
  paramMax(paramId: number): number;
  paramRate(paramId: number): number;
  paramBuffRate(paramId: number): number;
  param(paramId: number): number;
  xparam(xparamId: number): number;
  sparam(sparamId: number): number;

  elementRate(elementId: number): number;
  debuffRate(paramId: number): number;

  stateRate(stateId: number): number;
  stateResistSet(): number[];
  isStateResist(stateId: number): boolean;
  attackElements(): number[];
  attackStates(): number[];
  attackStatesRate(stateId: number): number;

  attackSpeed(): number;
  attackTimesAdd(): number;

  addedSkillTypes(): number[];
  isSkillTypeSealed(stypeId: number): boolean;
  addedSkills(): number[];
  isSkillSealed(skillId: number): boolean;
  isEquipWtypeOk(wtypeId: number): boolean;
  isEquipAtypeOk(atypeId: number): boolean;
  isEquipTypeLocked(etypeId: number): boolean;
  isEquipTypeSealed(etypeId: number): boolean;

  slotType(): number;
  isDualWield(): boolean;

  actionPlusSet(): number[];
  specialFlag(flagId: number): boolean;

  collapseType(): number;
  partyAbility(abilityId: number): boolean;

  isAutoBattle(): boolean;
  isGuard(): boolean;
  isSubstitute(): boolean;
  isPreserveTp(): boolean;

  addParam(paramId: number, value: number): void;
  setHp(hp: number): void;
  setMp(mp: number): void;
  setTp(tp: number): void;
  maxTp(): number;

  refresh(): void;

  recoverAll(): void;

  hpRate(): number;
  mpRate(): number;
  tpRate(): number;

  hide(): void;
  appear(): void;
  isHidden(): boolean;
  isAppeared(): boolean;

  isDead(): boolean;
  isAlive(): boolean;
  isDying(): boolean;
  isRestricted(): boolean;
  canInput(): boolean;
  canMove(): boolean;
  isConfused(): boolean;
  confusionLevel(): number;
  isActor(): this is Game_Actor;
  isEnemy(): this is Game_Enemy;

  sortStates(): void;
  restriction(): number;
  addNewState(stateId: number): void;
  onRestrict(): void;

  mostImportantStateText(): string;

  stateMotionIndex(): number;
  stateOverlayIndex(): number;

  isSkillWtypeOk(skill: Data_Skill): boolean;
  skillMpCost(skill: Data_Skill): number;
  skillTpCost(skill: Data_Skill): number;
  canPaySkillCost(skill: Data_Skill): boolean;
  paySkillCost(skill: Data_Skill): void;
  isOccasionOk(item: Data_UsableItem): boolean;
  meetsUsableItemConditions(item: Data_UsableItem): boolean;
  meetsSkillConditions(skill: Data_Skill): boolean;
  meetsItemConditions(item: Data_UsableItem): boolean;
  canUse(item: Data_UsableItem): boolean;
  canEquip(item: Data_EquipItem): boolean;
  canEquipWeapon(item: Data_Weapon): boolean;
  canEquipArmor(item: Data_Armor): boolean;

  attackSkillId(): number;
  guardSkillId(): number;
  canAttack(): boolean;
  canGuard(): boolean;
}
