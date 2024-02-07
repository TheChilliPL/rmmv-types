/**
 * The window for selecting a skill to use on the battle screen.
 */
declare class Window_BattleSkill extends Window_SkillList {
  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  override show(): void;
  override hide(): void;
}
