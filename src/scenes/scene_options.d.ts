/**
 * The scene class of the options screen.
 */
declare class Scene_Options extends Scene_MenuBase {
  override initialize(): void;

  override _optionsWindow: Window_Options;

  override create(): void;
  override terminate(): void;
  createOptionsWindow(): void;
}
