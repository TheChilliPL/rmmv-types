/**
 * The scene class of the save screen.
 */
declare class Scene_Save extends Scene_File {
  initialize(constructorParams: unknown[]): void;

  override mode(): Scene_File_Mode.Save;

  override helpWindowText(): string;
  override firstSavefileIndex(): number;

  override onSavefileOk(): void;
  onSaveSuccess(): void;
  onSaveFailure(): void;
}
