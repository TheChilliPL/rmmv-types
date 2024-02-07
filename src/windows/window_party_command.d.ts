/**
 * The window for selecting whether to fight or escape on the battle screen.
 */
declare class Window_PartyCommand extends Window_Command {
  initialize(...constructorParams: unknown[]): void;

  override windowWidth(): number;
  override numVisibleRows(): number;

  override makeCommandList(): void;

  setup(): void;
}
