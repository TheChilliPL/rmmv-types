declare const enum Scene_File_Mode {
  Save = "save",
  Load = "load",
}

/**
 * The superclass of Scene_Save and Scene_Load.
 */
declare class Scene_File extends Scene_MenuBase {
  override initialize(constructorParams: unknown[]): void;

  override _helpWindow: Window_Help;
  _listWindow: Window_SavefileList;

  override create(): void;
  override start(): void;

  savefileId(): number;

  override createHelpWindow(): void;
  createListWindow(): void;

  mode(): Maybe<Scene_File_Mode>;

  activateListWindow(): void;
  helpWindowText(): string;
  firstSavefileIndex(): number;

  onSavefileOk(): void;
}
