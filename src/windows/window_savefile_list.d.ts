/**
 * The window for selecting a save file on the save and load screens.
 */
declare class Window_SavefileList extends Window_Selectable {
  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  _mode: Maybe<Scene_File_Mode>;

  setMode(mode: Scene_File_Mode): void;

  override maxItems(): number;
  maxVisibleItems(): number;

  override itemHeight(): number;

  override drawItem(index: number): void;
  drawFileId(id: number, x: number, y: number): void;
  drawContents(info: SavefileInfo, rect: Rectangle, valid: boolean): void;
  drawGameTitle(info: SavefileInfo, x: number, y: number, width: number): void;
  drawPartyCharacters(info: SavefileInfo, x: number, y: number): void;
  drawPlaytime(info: SavefileInfo, x: number, y: number, width: number): void;

  override playOkSound(): void;
}
