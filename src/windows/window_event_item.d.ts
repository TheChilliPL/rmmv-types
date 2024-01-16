/**
 * The window used for the event command
 * {@link Data_CommandType.SelectItem [Select Item]}.
 */
declare class Window_EventItem extends Window_ItemList {
  constructor(messageWindow: Window_Message);
  initialize(...constructorParams: unknown[]): void;

  _messageWindow: Window_Message;

  windowHeight(): number;
  numVisibleRows(): number;

  start(): void;
  updatePlacement(): void;

  override includes(item: Data_ItemBase): boolean;
  override isEnabled(item: Data_ItemBase): boolean;

  onOk(): void;
  onCancel(): void;
}
