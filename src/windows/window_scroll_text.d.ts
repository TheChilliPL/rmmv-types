/**
 * The window for displaying scrolling text. No frame is displayed, but it is
 * handled as a window for convenience.
 */
declare class Window_ScrollText extends Window_Base {
  initialize(...constructorParams: unknown[]): void;

  _text: string;
  _allTextHeight: number;

  override update(): void;
  startMessage(): void;
  refresh(): void;
  override contentsHeight(): number;
  updateMessage(): void;

  scrollSpeed(): number;
  isFastForward(): boolean;
  fastForwardRate(): number;

  terminateMessage(): void;
}
