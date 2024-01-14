/**
 * The window for selecting a target actor on the item and skill screens.
 */
declare class Window_MenuActor extends Window_MenuStatus {
  initialize(...constructorParams: unknown[]): void;

  override processOk(): void;
  override selectLast(): void;
  selectForItem(item: Data_UsableItem): void;
}
