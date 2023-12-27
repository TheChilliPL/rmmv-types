declare type BattlerParams = [
  /** Maximum hit points */
  mhp: number,
  /** Maximum magic points */
  mmp: number,
  /** Attack power */
  atk: number,
  /** Defense power */
  def: number,
  /** Magical attack power */
  mat: number,
  /** Magical defense power */
  mdf: number,
  /** Agility */
  agi: number,
  /** Luck */
  luk: number,
];

declare type BattlerXParams = [
  /** Hit rate */
  hit: number,
  /** Evasion rate */
  eva: number,
  /** Critical rate */
  cri: number,
  /** Critical evasion rate */
  cev: number,
  /** Magic evasion rate */
  mev: number,
  /** Magic reflection rate */
  mrf: number,
  /** Counter attack rate */
  cnt: number,
  /** HP regeneration rate */
  hrg: number,
  /** MP regeneration rate */
  mrg: number,
  /** TP regeneration rate */
  trg: number,
];

declare type BattlerSParams = [
  /** Target rate */
  tgr: number,
  /** Guard effect rate */
  grd: number,
  /** Recovery effect rate */
  rec: number,
  /** Pharmacology */
  pha: number,
  /** MP cost rate */
  mcr: number,
  /** TP charge rate */
  tcr: number,
  /** Physical damage rate */
  pdr: number,
  /** Magical damage rate */
  mdr: number,
  /** Floor damage rate */
  fdr: number,
  /** Experience rate */
  exr: number,
];

declare interface BattlerTraitObject {
  traits: Data_Trait[];
}

/**
 * The superclass of Game_Battler. It mainly contains parameters calculation.
 */
declare class Game_BattlerBase {
  static TRAIT_ELEMENT_RATE: 11;
  static TRAIT_DEBUFF_RATE: 12;
  static TRAIT_STATE_RATE: 13;
  static TRAIT_STATE_RESIST: 14;
  static TRAIT_PARAM: 21;
  static TRAIT_XPARAM: 22;
  static TRAIT_SPARAM: 23;
  static TRAIT_ATTACK_ELEMENT: 31;
  static TRAIT_ATTACK_STATE: 32;
  static TRAIT_ATTACK_SPEED: 33;
  static TRAIT_ATTACK_TIMES: 34;
  static TRAIT_STYPE_ADD: 41;
  static TRAIT_STYPE_SEAL: 42;
  static TRAIT_SKILL_ADD: 43;
  static TRAIT_SKILL_SEAL: 44;
  static TRAIT_EQUIP_WTYPE: 51;
  static TRAIT_EQUIP_ATYPE: 52;
  static TRAIT_EQUIP_LOCK: 53;
  static TRAIT_EQUIP_SEAL: 54;
  static TRAIT_SLOT_TYPE: 55;
  static TRAIT_ACTION_PLUS: 61;
  static TRAIT_SPECIAL_FLAG: 62;
  static TRAIT_COLLAPSE_TYPE: 63;
  static TRAIT_PARTY_ABILITY: 64;
  static FLAG_ID_AUTO_BATTLE: 0;
  static FLAG_ID_GUARD: 1;
  static FLAG_ID_SUBSTITUTE: 2;
  static FLAG_ID_PRESERVE_TP: 3;
  static ICON_BUFF_START: 32;
  static ICON_DEBUFF_START: 48;

  _hp: number;
  _mp: number;
  _tp: number;

  _paramPlus: BattlerParams;
  _states: number[];
  _stateTurns: { [stateId: number]: number };
  _buffs: BattlerParams;
  _buffTurns: BattlerParams;

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

  initialize(): void;
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

  traitObjects(): BattlerTraitObject[];
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
