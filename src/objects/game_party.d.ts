/**
 * The game object class for the party. Information such as gold and items is
 * included.
 */
declare class Game_Party extends Game_Unit<Game_Actor> {
  static ABILITY_ENCOUNTER_HALF: 0;
  static ABILITY_ENCOUNTER_NONE: 1;
  static ABILITY_CANCEL_SURPRISE: 2;
  static ABILITY_RAISE_PREEMPTIVE: 3;
  static ABILITY_GOLD_DOUBLE: 4;
  static ABILITY_DROP_ITEM_DOUBLE: 5;

  override initialize();

  _gold: number;
  _steps: number;
  _lastItem: Data_Item;
  _menuActorId: number;
  _targetActorId: number;
  _actors: number[];
  _items: OneIndexedArray<number>;
  _weapons: OneIndexedArray<number>;
  _armors: OneIndexedArray<number>;

  initAllItems(): void;
  exists(): boolean;
  size(): number;
  isEmpty(): boolean;
  override members(): Game_Actor[];
  allMembers(): Game_Actor[];
  battleMembers(): Game_Actor[];
  maxBattleMembers(): number;
  leader(): Game_Actor;
  reviveBattleMembers(): void;

  items(): Data_NormalItem[];
  weapons(): Data_Weapon[];
  armors(): Data_Armor[];
  equipItems(): Data_EquipItem[];
  allItems(): (Data_NormalItem | Data_EquipItem)[];
  itemContainer(item: Data_Item): Maybe<OneIndexedArray<number>>;

  setupStartingMembers(): void;
  name(): string;
  setupBattleTest(): void;
  setupBattleTestMembers(): void;
  setupBattleTestItems(): void;

  highestLevel(): number;
  addActor(actorId: number): void;
  removeActor(actorId: number): void;
  gold(): number;
  gainGold(amount: number): void;
  loseGold(amount: number): void;
  maxGold(): number;
  steps(): number;
  increaseSteps(): void;
  numItems(item: Data_Item): number;
  maxItems(item: Data_Item): number;
  hasMaxItems(item: Data_Item): boolean;
  hasItem(item: Data_Item, includeEquip: boolean): boolean;
  isAnyMemberEquipped(item: Data_EquipItem): boolean;
  gainItem(item: Data_Item, amount: number, includeEquip: boolean): void;
  discardMembersEquip(item: Data_EquipItem, amount: number): void;
  loseItem(item: Data_Item, amount: number, includeEquip: boolean): void;
  consumeItem(item: Data_UsableItem): void;

  canUse(item: Data_UsableItem): boolean;
  canInput(): boolean;
  override isAllDead(): boolean;

  onPlayerWalk(): void;

  menuActor(): Game_Actor;
  setMenuActor(actor: Game_Actor): void;
  makeMenuActorNext(): void;
  makeMenuActorPrevious(): void;
  targetActor(): Game_Actor;
  setTargetActor(actor: Game_Actor): void;
  lastItem(): Data_Item;
  setLastItem(item: Data_Item): void;
  swapOrder(index1: number, index2: number): void;

  charactersForSavefile(): SavefileCharacter[];
  facesForSavefile(): SavefileFace[];

  partyAbility(abilityId: number): boolean;
  hasEncounterHalf(): boolean;
  hasEncounterNone(): boolean;
  hasCancelSurprise(): boolean;
  hasRaisePreemptive(): boolean;
  hasGoldDouble(): boolean;
  hasDropItemDouble(): boolean;

  ratePreemptive(troopAgi: number): number;
  rateSurprise(troopAgi: number): number;

  performVictory(): void;
  performEscape(): void;
  removeBattleStates(): void;

  requestMotionRefresh(): void;
}
