/**
 * The window for displaying the map name on the map screen.
 */
declare class Window_MapName extends Window_Base {
  initialize(...constructorParams: unknown[]): void;

  _showCount: number;

  windowWidth(): number;
  windowHeight(): number;

  override update(): void;
  updateFadeIn(): void;
  updateFadeOut(): void;

  override open(): void;
  override close(): void;

  refresh(): void;
  drawBackground(x: number, y: number, width: number, height: number): void;
}
