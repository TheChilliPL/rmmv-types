/**
 * The game object class for the troop and the battle-related data.
 */
declare class Game_Troop extends Game_Unit<Game_Enemy> {
  static LETTER_TABLE_HALF: string[];
  static LETTER_TABLE_FULL: string[];

  initialize(...constructorParams: unknown[]): void;

  _interpreter: Game_Interpreter;

  isEventRunning(): boolean;

  updateInterpreter(): void;
  turnCount(): number;

  override members(): Game_Enemy[];

  clear(): void;

  troop(): Data_Troop;

  setup(troopId: number): void;
  makeUniqueNames(): void;
  letterTable(): string[];
  enemyNames(): string[];

  meetsConditions(page: Data_TroopPage): boolean;
  setupBattleEvent(): void;
  increaseTurn(): void;

  expTotal(): number;
  goldTotal(): number;
  goldRate(): number;
  makeDropItems(): Data_DropItem[];
}
