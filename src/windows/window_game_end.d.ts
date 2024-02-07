/**
 * The window for selecting "Go to Title" on the game end screen.
 */
declare class Window_GameEnd extends Window_Command {
  initialize(...constructorParams: unknown[]): void;

  override windowWidth(): number;

  updatePlacement(): void;
  override makeCommandList(): void;
}
