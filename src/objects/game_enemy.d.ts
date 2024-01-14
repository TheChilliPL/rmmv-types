/**
 * The game object class for an enemy.
 */
declare class Game_Enemy extends Game_Battler {
  initialize(...constructorParams: unknown[]): void;

  _enemyId: number;
  _letter: string;
  _plural: boolean;
  _screenX: number;
  _screenY: number;

  override initMembers(): void;
  setup(enemyId: number, x: number, y: number): void;

  override isActor(): false;
  override isEnemy(): true;
  friendsUnit(): Game_Troop;
  opponentsUnit(): Game_Party;
  index(): number;
  isBattleMember(): boolean;
  enemyId(): number;
  enemy(): Data_Enemy;
  traitObjects(): Data_TraitObject[];

  paramBase(paramId: number): number;
  exp(): number;
  gold(): number;
  makeDropItems(): Data_DropItem[];
  dropItemRate(): number;

  itemObject(kind: 1, dataId: number): Data_Item;
  itemObject(kind: 2, dataId: number): Data_Weapon;
  itemObject(kind: 3, dataId: number): Data_Armor;
  itemObject(kind: number, dataId: number): Maybe<Data_ItemBase>;

  isSpriteVisible(): boolean;
  screenX(): number;
  screenY(): number;

  battlerName(): string;
  battlerHue(): number;
  originalName(): string;
  name(): string;
  isLetterEmpty(): boolean;
  setLetter(letter: string): void;
  setPlural(plural: boolean): void;

  override performActionStart(action: Game_Action): void;
  override performAction(action: Game_Action): void;
  override performActionEnd(): void;
  override performDamage(): void;
  override performCollapse(): void;
  transform(enemyId: number): void;

  meetsCondition(action: Data_EnemyAction): boolean;
  meetsTurnCondition(param1: number, param2: number): boolean;
  meetsHpCondition(param1: number, param2: number): boolean;
  meetsMpCondition(param1: number, param2: number): boolean;
  meetsStateCondition(param: number): boolean;
  meetsPartyLevelCondition(param: number): boolean;
  meetsSwitchCondition(param: number): boolean;
  isActionValid(action: Data_EnemyAction): boolean;
  selectAction(
    actionList: Data_EnemyAction[],
    ratingZero: number,
  ): Maybe<Data_EnemyAction>;
  selectAllActions(actionList: Data_EnemyAction[]): void;
  makeActions(): void;
}
