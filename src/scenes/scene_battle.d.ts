/**
 * The scene class of the battle screen.
 */
declare class Scene_Battle extends Scene_Base {
  override initialize(): void;

  _spriteset: Spriteset_Battle;
  override _windowLayer: WindowLayer;
  _logWindow: Window_BattleLog;
  _statusWindow: Window_BattleStatus;
  _partyCommandWindow: Window_PartyCommand;
  _actorCommandWindow: Window_ActorCommand;
  _helpWindow: Window_Help;
  _skillWindow: Window_BattleSkill;
  _itemWindow: Window_BattleItem;
  _actorWindow: Window_BattleActor;
  _enemyWindow: Window_BattleEnemy;
  _messageWindow: Window_Message;
  _scrollTextWindow: Window_ScrollText;

  override create(): void;
  override start(): void;
  override update(): void;
  updateBattleProcess(): void;
  isAnyInputWindowActive(): boolean;
  changeInputWindow(): void;
  override stop(): void;
  override terminate(): void;

  needsSlowFadeOut(): boolean;

  updateStatusWindow(): void;
  updateWindowPositions(): void;
  createDisplayObjects(): void;
  createSpriteset(): void;
  createAllWindows(): void;
  createLogWindow(): void;
  createStatusWindow(): void;
  createPartyCommandWindow(): void;
  createActorCommandWindow(): void;
  createHelpWindow(): void;
  createSkillWindow(): void;
  createItemWindow(): void;
  createActorWindow(): void;
  createEnemyWindow(): void;
  createMessageWindow(): void;
  createScrollTextWindow(): void;
  refreshStatus(): void;

  startPartyCommandSelection(): void;
  commandFight(): void;
  commandEscape(): void;

  startActorCommandSelection(): void;
  commandAttack(): void;
  commandSkill(): void;
  commandGuard(): void;
  commandItem(): void;
  selectNextCommand(): void;
  selectPreviousCommand(): void;

  selectActorSelection(): void;
  onActorOk(): void;
  onActorCancel(): void;

  selectEnemySelection(): void;
  onEnemyOk(): void;
  onEnemyCancel(): void;

  onSkillOk(): void;
  onSkillCancel(): void;

  onItemOk(): void;
  onItemCancel(): void;

  onSelectAction(): void;
  endCommandSelection(): void;
}
