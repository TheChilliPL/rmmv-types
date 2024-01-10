/**
 * The scene class of the item screen.
 */
declare class Scene_Item extends Scene_ItemBase {
  override initialize(constructorParams: unknown[]): void;

  override _helpWindow: Window_Help;
  _categoryWindow: Window_ItemCategory;
  override _itemWindow: Window_ItemList;
  override _actorWindow: Window_MenuActor;

  override create(): void;
  createCategoryWindow(): void;
  createItemWindow(): void;

  override user(): Game_Actor;

  onCategoryOk(): void;
  onItemOk(): void;
  onItemCancel(): void;

  playSeForItem(): void;
  override useItem(): void;
}
