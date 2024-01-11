/**
 * The superclass of Scene_Item and Scene_Skill.
 */
declare class Scene_ItemBase extends Scene_MenuBase {
  initialize(constructorParams: unknown[]): void;

  _itemWindow?: Window_Selectable;
  _actorWindow?: Window_MenuActor;

  override create(): void;
  createActorWindow();

  item(): Maybe<Data_ItemBase>;
  user(): Maybe<Game_Actor>;

  isCursorLeft(): boolean;
  showSubWindow(window: Window_Base): void;
  hideSubWindow(window: Window_Base): void;

  onActorOk(): void;
  onActorCancel(): void;

  determineItem(): void;
  useItem(): void;
  activateItemWindow(): void;
  itemTargetActors(): Game_Actor[];
  canUse(): boolean;
  isItemEffectsValid(): boolean;
  applyItem(): void;
  checkCommonEvent(): void;
}
