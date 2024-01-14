/**
 * The window for selecting an equipment slot on the equipment screen.
 */
declare class Window_EquipSlot extends Window_Selectable {
  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  _actor: Maybe<Game_Actor>;

  setActor(actor: Maybe<Game_Actor>): void;

  override update(): void;

  override maxItems(): number;

  item(): Maybe<Data_EquipItem>;

  override drawItem(index: number): void;
  slotName(index: number): string;
  isEnabled(index: number): boolean;
  override isCurrentItemEnabled(): boolean;

  setStatusWindow(statusWindow: Maybe<Window_EquipStatus>): void;
  setItemWindow(itemWindow: Maybe<Window_EquipItem>): void;

  override updateHelp(): void;
}
