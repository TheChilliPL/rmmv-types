/**
 * The window for displaying the skill user's status on the skill screen.
 */
declare class Window_SkillStatus extends Window_Base {
  constructor(x: number, y: number, width: number, height: number);

  initialize(...constructorParams: unknown[]): void;

  _actor: Maybe<Game_Actor>;

  setActor(actor: Maybe<Game_Actor>): void;

  refresh(): void;
}
