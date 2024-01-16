/**
 * The window used for the event command
 * {@link Data_CommandType.InputNumber [Input Number]}.
 */
declare class Window_NumberInput extends Window_Selectable {
  constructor(messageWindow: Window_Message);
  initialize(...constructorParams: unknown[]): void;

  _messageWindow: Window_Message;
  _number: number;
  _maxDigits: number;
  _buttons: Sprite_Button[];

  start(): void;
  updatePlacement(): void;
  windowWidth(): number;
  windowHeight(): number;
  override maxCols(): number;
  override maxItems(): number;
  override spacing(): number;
  override itemWidth(): number;

  createButtons(): void;
  placeButtons(): void;
  updateButtonsVisiblity(): void;
  showButtons(): void;
  hideButtons(): void;
  buttonY(): number;

  override update(): void;
  processDigitChange(): void;
  changeDigit(up: boolean): void;

  override isTouchOkEnabled(): boolean;
  override isOkEnabled(): boolean;
  override isCancelEnabled(): boolean;
  override isOkTriggered(): boolean;
  override processOk(): void;

  override drawItem(index: number): void;

  onButtonUp(): void;
  onButtonDown(): void;
  onButtonOk(): void;
}
