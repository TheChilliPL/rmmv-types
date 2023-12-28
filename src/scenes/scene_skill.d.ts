/**
 * The scene class of the skill screen.
 */
declare class Scene_Skill extends Scene_ItemBase {
  override initialize(): void;

  override _helpWindow: Window_Help;
  _skillTypeWindow: Window_SkillType;
  _statusWindow: Window_SkillStatus;
  override _itemWindow: Window_SkillList;
  override _actorWindow: Window_MenuActor;

  override create(): void;
  override start(): void;
  createSkillTypeWindow(): void;
  createStatusWindow(): void;
  createItemWindow(): void;

  refreshActor(): void;
  override user(): Game_Actor;

  commandSkill(): void;
  onItemOk(): void;
  onItemCancel(): void;

  playSeForItem(): void;

  override useItem(): void;

  override onActorChange(): void;
}
