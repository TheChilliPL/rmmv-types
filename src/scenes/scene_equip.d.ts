/**
 * The scene class of the equipment screen.
 */
declare class Scene_Equip extends Scene_MenuBase {
  initialize(...constructorParams: unknown[]): void;

  override _helpWindow: Window_Help;
  _statusWindow: Window_EquipStatus;
  _commandWindow: Window_EquipCommand;
  _slotWindow: Window_EquipSlot;
  _itemWindow: Window_EquipItem;

  override create(): void;
  createStatusWindow(): void;
  createCommandWindow(): void;
  createSlotWindow(): void;
  createItemWindow(): void;

  refreshActor(): void;

  commandEquip(): void;
  commandOptimize(): void;
  commandClear(): void;
  onSlotOk(): void;
  onSlotCancel(): void;
  onItemOk(): void;
  onItemCancel(): void;
  override onActorChange(): void;
}
