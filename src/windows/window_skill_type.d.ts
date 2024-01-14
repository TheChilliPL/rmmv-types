/**
 * The window for selecting a skill type on the skill screen.
 */
declare class Window_SkillType extends Window_Command {
  constructor(x: number, y: number);
  initialize(...constructorParams: unknown[]): void;

  _actor: Maybe<Game_Actor>;

  override windowWidth(): number;

  setActor(actor: Maybe<Game_Actor>): void;

  override numVisibleRows(): number;
  override makeCommandList(): void;

  override update(): void;

  setSkillWindow(skillWindow: Maybe<Window_SkillList>): void;
  selectLast(): void;
}
