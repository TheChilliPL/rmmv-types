/**
 * The window for selecting a skill on the skill screen.
 */
declare class Window_SkillList extends Window_Selectable {
  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  _actor: Maybe<Game_Actor>;
  _stypeId: number;
  _data: Data_Skill[];

  setActor(actor: Maybe<Game_Actor>): void;
  setStypeId(stypeId: number): void;

  override maxCols(): number;
  override spacing(): number;
  override maxItems(): number;

  item(): Maybe<Data_Skill>;
  override isCurrentItemEnabled(): boolean;
  includes(item: Maybe<Data_Skill>): boolean;
  isEnabled(item: Maybe<Data_Skill>): boolean;

  makeItemList(): void;
  selectLast(): void;
  override drawItem(index: number): void;
  costWidth(): number;
  drawSkillCost(skill: Data_Skill, x: number, y: number, width: number): void;
  override updateHelp(): void;
  override refresh(): void;
}
