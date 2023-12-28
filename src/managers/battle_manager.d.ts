declare const enum BattlePhase {
  Init = "init",
  Start = "start",
  Turn = "turn",
  Action = "action",
  TurnEnd = "turnEnd",
  Aborting = "aborting",
  BattleEnd = "battleEnd",
}

declare const enum BattleResult {
  Victory,
  Abort,
  Defeat,
}

declare interface BattleRewards {
  gold?: number;
  exp?: number;
  items?: Data_Item[];
}

declare class BattleManager {
  private constructor();

  static setup(troopId: number, canEscape: boolean, canLose: boolean): void;
  static initMembers(): void;

  static _phase: Maybe<BattlePhase>;
  static _canEscape: boolean;
  static _canLose: boolean;
  static _battleTest: boolean;
  static _eventCallback: Maybe<(result: BattleResult) => void>;
  static _preemptive: boolean;
  static _surprise: boolean;
  static _actorIndex: number;
  static _actionForcedBattler: Maybe<Game_Battler>;
  static _mapBgm: Maybe<AudioObject>;
  static _mapBgs: Maybe<AudioObject>;
  static _actionBattlers: Game_Battler[];
  static _subject: Maybe<Game_Battler>;
  static _action: Maybe<Game_Action>;
  static _targets: Game_Battler[];
  static _logWindow: Maybe<Window_BattleLog>;
  static _statusWindow: Maybe<Window_BattleStatus>;
  static _spriteset: Maybe<Spriteset_Battle>;
  static _escapeRatio: number;
  static _escaped: boolean;
  static _rewards: BattleRewards;
  static _turnForced: boolean;

  static isBattleTest(): boolean;
  static setBattleTest(battleTest: boolean): void;
  static setEventCallback(callback: Maybe<BattleResult>): void;
  static setLogWindow(logWindow: Maybe<Window_BattleLog>): void;
  static setStatusWindow(statusWindow: Maybe<Window_BattleStatus>): void;
  static setSpriteset(spriteset: Maybe<Spriteset_Battle>): void;

  static onEncounter(): void;
  static ratePreemptive(): number;
  static rateSurprise(): number;

  static saveBgmAndBgs(): void;
  static playBattleBgm(): void;
  static playVictoryMe(): void;
  static playDefeatMe(): void;
  static replayBgmAndBgs(): void;

  static makeEscapeRatio(): number;

  static update(): void;
  static updateEvent(): void;
  static updateEventMain(): void;
  static isBusy(): boolean;

  static isInputting(): boolean;
  static isInTurn(): boolean;
  static isTurnEnd(): boolean;
  static isAborting(): boolean;
  static isBattleEnd(): boolean;
  static canEscape(): boolean;
  static canLose(): boolean;
  static isEscaped(): boolean;

  static actor(): Maybe<Game_Actor>;
  static clearActor(): void;
  static changeActor(
    newActorIndex: number,
    lastActorActionState: Data_BattlerActionState,
  ): void;

  static startBattle(): void;
  static displayStartMessages(): void;
  static startInput(): void;
  static inputtingAction(): Maybe<Game_Action>;
  static selectNextCommand(): void;
  static selectPreviousCommand(): void;
  static refreshStatus(): void;
  static startTurn(): void;
  static updateTurn(): void;
  static processTurn(): void;
  static endTurn(): void;
  static isForcedTurn(): boolean;
  static updateTurnEnd(): void;

  static getNextSubject(): Maybe<Game_Battler>;
  static allBattleMembers(): Game_Battler[];
  static makeActionOrders(): void;
  static startAction(): void;
  static updateAction(): void;
  static endAction(): void;

  static invokeAction(subject: Game_Battler, target: Game_Battler): void;
  static invokeNormalAction(subject: Game_Battler, target: Game_Battler): void;
  static invokeCounterAttack(subject: Game_Battler, target: Game_Battler): void;
  static invokeMagicReflection(
    subject: Game_Battler,
    target: Game_Battler,
  ): void;

  static applySubstitute(target: Game_Battler): Game_Battler;
  static checkSubstitute(target: Game_Battler): boolean;

  static isActionForced(): void;
  static forceAction(battler: Game_Battler): void;
  static processForcedAction(): void;

  static abort(): void;

  static checkBattleEnd(): boolean;
  static checkAbort(): void | false;
  static processVictory(): void;
  static processEscape(): boolean;
  static processAbort(): void;
  static processDefeat(): void;
  static endBattle(result: BattleResult): void;
  static updateBattleEnd(): void;
  static makeRewards(): void;

  static displayVictoryMessage(): void;
  static displayDefeatMessage(): void;
  static displayEscapeSuccessMessage(): void;
  static displayEscapeFailureMessage(): void;

  static displayRewards(): void;
  static displayExp(): void;
  static displayGold(): void;
  static displayDropItems(): void;

  static gainRewards(): void;
  static gainExp(): void;
  static gainGold(): void;
  static gainDropItems(): void;
}
