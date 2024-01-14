/**
 * The window for selecting an equipment item on the equipment screen.
 */
declare class Window_EquipItem extends Window_ItemList {
  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  _actor: Maybe<Game_Actor>;
  _slotId: number;
  _statusWindow?: Maybe<Window_EquipStatus>;

  setActor(actor: Maybe<Game_Actor>): void;
  setSlotId(slotId: number): void;

  override includes(item: Maybe<Data_EquipItem>): boolean;
  override isEnabled(item: Maybe<Data_EquipItem>): boolean;

  override selectLast(): void;

  setStatusWindow(statusWindow: Maybe<Window_EquipStatus>): void;

  override updateHelp(): void;

  override playOkSound(): void;
}
