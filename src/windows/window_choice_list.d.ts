/**
 * The window used for the event command
 * {@link Data_CommandType.ShowChoices [Show Choices]}.
 */
declare class Window_ChoiceList extends Window_Command {
  constructor(messageWindow: Window_Message);
  initialize(...constructorParams: unknown[]): void;

  _messageWindow: Window_Message;
  _background: number;

  start(): void;
  selectDefault(): void;
  updatePlacement(): void;
  updateBackground(): void;
  override windowWidth(): number;
  override numVisibleRows(): number;
  maxChoiceWidth(): number;

  textWidthEx(text: string): number;
  override contentsHeight(): number;

  override makeCommandList(): void;

  override drawItem(index: number): void;
  override isCancelEnabled(): boolean;
  override isOkTriggered(): boolean;
  override callOkHandler(): void;
  override callCancelHandler(): void;
}
