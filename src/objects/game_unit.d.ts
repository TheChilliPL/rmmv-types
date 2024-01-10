/**
 * The superclass of Game_Party and Game_Troop.
 */
declare class Game_Unit<TBattler extends Game_Battler = Game_Battler> {
  initialize(constructorParams: unknown[]): void;

  _inBattle: boolean;

  inBattle(): boolean;
  members(): TBattler[];
  aliveMembers(): TBattler[];
  deadMembers(): TBattler[];
  movableMembers(): TBattler[];

  clearActions(): void;

  agility(): number;
  /** Target rate sum */
  tgrSum(): number;

  randomTarget(): Game_Battler;
  randomDeadTarget(): Game_Battler;
  smoothTarget(index: number): Game_Battler;
  smoothDeadTarget(index: number): Game_Battler;
  clearResults(): void;

  onBattleStart(): void;
  onBattleEnd(): void;

  makeActions(): void;
  select(activeMember: TBattler): void;

  isAllDead(): boolean;

  substituteBattler(): Game_Battler;
}
