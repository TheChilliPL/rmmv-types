/**
 * The scene class of the load screen.
 */
declare class Scene_Load extends Scene_File {
  initialize(constructorParams: unknown[]): void;

  _loadSuccess: boolean;

  override terminate(): void;

  override mode(): Scene_File_Mode.Load;

  override helpWindowText(): string;
  override firstSavefileIndex(): number;

  override onSavefileOk(): void;
  onLoadSuccess(): void;
  onLoadFailure(): void;

  reloadMapIfUpdated(): void;
}
