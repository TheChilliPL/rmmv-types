/**
 * The window for selecting an actor's action on the battle screen.
 */
declare class Window_ActorCommand extends Window_Command {
  initialize(...constructorParams: unknown[]): void;

  _actor: Maybe<Game_Actor>;

  override windowWidth(): number;

  override numVisibleRows(): number;

  override makeCommandList(): void;
  addAttackCommand(): void;
  addSkillCommands(): void;
  addGuardCommand(): void;
  addItemCommand(): void;

  setup(actor: Game_Actor): void;

  override processOk(): void;
  selectLast(): void;
}
