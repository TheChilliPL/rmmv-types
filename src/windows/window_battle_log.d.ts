declare type Window_BattleLogMethod = {
  [K in keyof Window_BattleLog]: Window_BattleLog[K] extends (
    ...args: never
  ) => unknown
    ? {
        name: K;
        params: Parameters<Window_BattleLog[K]>;
      }
    : never;
}[Exclude<keyof Window_BattleLog, "_methods" | "initialize" | "push">];

declare type Window_BattleLogMethodAsArray = {
  [K in keyof Window_BattleLog]: Window_BattleLog[K] extends (
    ...args: never
  ) => unknown
    ? [K, ...Parameters<Window_BattleLog[K]>]
    : never;
}[Exclude<keyof Window_BattleLog, "_methods" | "initialize" | "push">];

declare const enum Window_BattleLogWaitMode {
  None = "",
  Effect = "effect",
  Movement = "movement",
}

/**
 * The window for displaying battle progress. No frame is displayed, but it is
 * handled as a window for convenience.
 */
declare class Window_BattleLog extends Window_Selectable {
  initialize(...constructorParams: unknown[]): void;

  _lines: string[];
  _methods: Window_BattleLogMethod[];
  _waitCount: number;
  _waitMode: Window_BattleLogWaitMode;
  _baseLineStack: number[];
  _spriteset: Maybe<Spriteset_Battle>;
  _backBitmap: Bitmap;
  _backSprite: Sprite;

  setSpriteset(spriteset: Maybe<Spriteset_Battle>): void;

  windowWidth(): number;
  windowHeight(): number;
  maxLines(): number;

  createBackBitmap(): void;
  createBackSprite(): void;

  numLines(): number;
  messageSpeed(): number;

  isBusy(): boolean;

  override update(): void;
  updateWait(): boolean;
  updateWaitCount(): boolean;
  updateWaitMode(): boolean;
  setWaitMode(waitMode: Window_BattleLogWaitMode): void;

  callNextMethod(): void;

  isFastForward(): boolean;

  push(
    ...method: Window_BattleLogMethodAsArray
  ): void;
  clear(): void;

  wait(): void;
  waitForEffect(): void;
  waitForMovement(): void;

  addText(text: string): void;
  pushBaseLine(): void;
  popBaseLine(): void;
  waitForNewLine(): void;

  popupDamage(target: Game_Battler): void;

  performActionStart(subject: Game_Battler, action: Game_Action): void;
  performAction(subject: Game_Battler, action: Game_Action): void;
  performActionEnd(subject: Game_Battler): void;
  performDamage(target: Game_Battler): void;
  performMiss(target: Game_Battler): void;
  performRecovery(target: Game_Battler): void;
  performEvasion(target: Game_Battler): void;
  performMagicEvasion(target: Game_Battler): void;
  performCounter(target: Game_Battler): void;
  performReflection(target: Game_Battler): void;
  performSubstitute(substitute: Game_Battler, target: Game_Battler): void;
  performCollapse(target: Game_Battler): void;

  /**
   * @param animationId Animation ID, or negative value for attack animation.
   * If using attack animation, the {@link targets} array is unused.
   *
   * @see Window_BattleLog#showAttackAnimation
   */
  showAnimation(subject: Game_Battler, targets: Game_Battler[], animationId: number): void;
  showAttackAnimation(subject: Game_Battler, targets: Game_Battler[]): void;
  showActorAttackAnimation(subject: Game_Actor, targets: Game_Battler[]): void;
  showEnemyAttackAnimation(subject: Game_Enemy, targets: Game_Battler[]): void;
  showNormalAnimation(targets: Game_Battler[], animationId: number, mirror: boolean): void;

  animationBaseDelay(): number;
  animationNextDelay(): number;

  override refresh(): void;
  drawBackground(): void;

  backRect(): Rectangle;
  backColor(): string;
  backPaintOpacity(): number;

  drawLineText(index: number): void;

  startTurn(): void;
  startAction(subject: Game_Battler, action: Game_Action, targets: Game_Battler[]): void;
  endAction(subject: Game_Battler): void;

  displayCurrentState(subject: Game_Battler): void;
  displayRegeneration(subject: Game_Battler): void;
  displayAction(subject: Game_Battler, item: Data_Item): void;
  displayCounter(target: Game_Battler): void;
  displayReflection(target: Game_Battler): void;
  displaySubstitute(substitute: Game_Battler, target: Game_Battler): void;
  displayActionResults(subject: Game_Battler, target: Game_Battler): void;
  displayFailure(target: Game_Battler): void;
  displayCritical(target: Game_Battler): void;
  displayDamage(target: Game_Battler): void;
  displayMiss(target: Game_Battler): void;
  displayEvasion(target: Game_Battler): void;
  displayHpDamage(target: Game_Battler): void;
  displayMpDamage(target: Game_Battler): void;
  displayTpDamage(target: Game_Battler): void;
  displayAffectedStatus(target: Game_Battler): void;
  displayAutoAffectedStatus(target: Game_Battler): void;
  displayChangedStates(target: Game_Battler): void;
  displayAddedStates(target: Game_Battler): void;
  displayRemovedStates(target: Game_Battler): void;
  displayChangedBuffs(target: Game_Battler): void;
  displayBuffs(target: Game_Battler, buffs: number[], fmt: string): void;
  makeHpDamageText(target: Game_Battler): string;
  makeMpDamageText(target: Game_Battler): string;
  makeTpDamageText(target: Game_Battler): string;
}
