/**
 * The window for displaying party member status on the menu screen.
 */
declare class Window_MenuStatus extends Window_Selectable {
  constructor(x: number, y: number);
  initialize(x: number, y: number): void;

  _formationMode: boolean;
  _pendingIndex: number;

  windowWidth(): number;
  windowHeight(): number;

  override maxItems(): number;
  override itemHeight(): number;
  numVisibleRows(): number;

  loadImages(): void;
  override drawItem(index: number): void;
  drawItemBackground(index: number): void;
  drawItemImage(index: number): void;
  drawItemStatus(index: number): void;

  override processOk(): void;
  override isCurrentItemEnabled(): boolean;

  selectLast(): void;

  formationMode(): boolean;
  setFormationMode(formationMode: boolean): void;

  pendingIndex(): number;
  setPendingIndex(pendingIndex: number): void;
}
