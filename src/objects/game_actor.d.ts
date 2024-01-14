/**
 * The game object class for an actor.
 */
declare class Game_Actor extends Game_Battler {
  constructor(actorId: number);
  initialize(...constructorParams: unknown[]): void;

  _actorId: number;
  _name: string;
  _nickname: string;
  _profile: string;
  _classId: number;
  _level: number;
  _characterName: string;
  _characterIndex: number;
  _faceName: string;
  _faceIndex: number;
  _battlerName: string;
  _exp: OneIndexedArray<number>; // ? TODO
  _skills: number[];
  _equips: Data_EquipItem[]; // ? TODO
  _actionInputIndex: number;
  _lastMenuSkill: Game_Item;
  _lastBattleSkill: Game_Item;
  _lastCommandSymbol: string;

  setup(actorId: number): void;
  actorId(): number;
  actor(): Data_Actor;
  name(): string;
  setName(name: string): void;
  nickname(): string;
  setNickname(nickname: string): void;
  profile(): string;
  setProfile(profile: string): void;
  get level(): number;
  characterName(): string;
  characterIndex(): number;
  faceName(): string;
  faceIndex(): number;
  battlerName(): string;

  override clearStates(): void;
  override eraseState(stateId: number): void;
  override resetStateCounts(stateId: number): void;

  initImages(): void;

  expForLevel(level: number): number;
  initExp(): void;
  currentExp(): number;
  currentLevelExp(): number;
  nextLevelExp(): number;
  nextRequiredExp(): number;
  maxLevel(): number;
  isMaxLevel(): boolean;

  initSkills(): void;
  initEquips(equips: number[]): void;
  equipSlots(): number[];
  equips(): Data_EquipItem[];
  weapons(): Data_Weapon[];
  armors(): Data_Armor[];
  hasWeapon(weapon: Data_Weapon): boolean;
  hasArmor(armor: Data_Armor): boolean;
  isEquipChangeOk(slotId: number): boolean;
  changeEquip(slotId: number, item: Data_EquipItem): void;
  forceChangeEquip(slotId: number, item: Data_EquipItem): void;
  tradeItemWithParty(newItem: Data_EquipItem, oldItem: Data_EquipItem): boolean;
  changeEquipById(etypeId: number, itemId: number): void;
  isEquipped(item: Data_EquipItem): boolean;
  discardEquip(item: Data_EquipItem): void;
  releaseUnequippableItems(forcing: boolean): void;
  clearEquipments(): void;
  optimizeEquipments(): void;
  bestEquipItem(slotId: number): Data_EquipItem;
  calcEquipItemPerformance(item: Data_EquipItem): number;
  override isSkillWtypeOk(skill: Data_Skill): boolean;
  isWtypeEquipped(wtypeId: number): boolean;

  override refresh(): void;

  override isActor(): true;
  override isEnemy(): false;
  friendsUnit(): Game_Party;
  opponentsUnit(): Game_Troop;
  index(): number;
  isBattleMember(): boolean;
  isFormationChangeOk(): boolean;

  currentClass(): Data_Class;
  isClass(gameClass: Data_Class): boolean;

  skills(): Data_Skill[];
  usableSkills(): Data_Skill[];

  override traitObjects(): Data_TraitObject[];
  override attackElements(): number[];

  hasNoWeapons(): boolean;
  bareHandsElementId(): number;

  override paramMax(paramId: number): number;
  override paramBase(paramId: number): number;
  override paramPlus(paramId: number): number;

  attackAnimationId1(): number;
  attackAnimationId2(): number;
  bareHandsAnimationId(): number;

  changeExp(exp: number, show: boolean): void;
  levelUp(): void;
  levelDown(): void;
  findNewSkills(lastSkills: Data_Skill[]): Data_Skill[];
  displayLevelUp(newSkills: Data_Skill[]): void;
  gainExp(exp: number): void;
  finalExpRate(): number;
  benchMembersExpRate(): number;
  shouldDisplayLevelUp(): boolean;
  changeLevel(level: number, show: boolean): void;
  learnSkill(skillId: number): void;
  forgetSkill(skillId: number): void;
  isLearnedSkill(skillId: number): boolean;
  hasSkill(skillId: number): boolean;

  changeClass(classId: number, keepExp: boolean): void;

  setCharacterImage(characterName: string, characterIndex: number): void;
  setFaceImage(faceName: string, faceIndex: number): void;
  setBattlerImage(battlerName: string): void;
  isSpriteVisible(): boolean;

  override startAnimation(
    animationId: number,
    mirror: boolean,
    delay: number,
  ): void;
  override performActionStart(action: Game_Action): void;
  override performAction(action: Game_Action): void;
  override performActionEnd(): void;
  performAttack(): void;
  override performDamage(): void;
  override performEvasion(): void;
  override performMagicEvasion(): void;
  override performCounter(): void;
  override performCollapse(): void;
  performVictory(): void;
  performEscape(): void;

  makeActionList(): Game_Action[];
  makeAutoBattleActions(): void;
  makeConfusionActions(): void;
  override makeActions(): void;

  onPlayerWalk(): void;
  updateStateSteps(state: Data_State): void;
  showAddedStates(): void;
  showRemovedStates(): void;
  stepsForTurn(): number;
  turnEndOnMap(): void;
  checkFloorEffect(): void;
  executeFloorDamage(): void;
  basicFloorDamage(): number;
  maxFloorDamage(): number;
  performMapDamage(): void;

  override clearActions(): void;
  inputtingAction(): Game_Action;
  selectNextCommand(): boolean;
  selectPreviousCommand(): boolean;
  lastMenuSkill(): Data_Skill;
  setLastMenuSkill(skill: Data_Skill): void;
  lastBattleSkill(): Data_Skill;
  setLastBattleSkill(skill: Data_Skill): void;
  lastCommandSymbol(): string;
  setLastCommandSymbol(symbol: string): void;

  testEscape(item: Data_ItemBase): boolean;

  override meetsUsableItemConditions(item: Data_ItemBase): boolean;
}
