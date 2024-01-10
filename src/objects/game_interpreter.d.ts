/**
 * The interpreter for running event commands.
 */
declare class Game_Interpreter {
  constructor(depth: number);
  initialize(constructorParams: unknown[]): void;

  _depth: number;
  _branch: { [indent: number]: number };
  _params: unknown[];
  _indent: number;
  _frameCount: number;
  _freezeChecker: number;
  _mapId: number;
  _eventId: number;
  _list: Maybe<Data_Command[]>;
  _index: number;
  _waitCount: number;
  _waitMode: Data_EventWaitMode;
  _comments: string;
  _character: Maybe<Game_Character>;
  _childInterpreter: Maybe<Game_Interpreter>;

  checkOverflow(): void;
  clear(): void;
  setup(list: Data_Command[], eventId?: number): void;
  eventId(): number;
  isOnCurrentMap(): boolean;
  setupReservedCommonEvent(): boolean;
  isRunning(): boolean;

  update(): void;
  updateChild(): boolean;
  updateWait(): boolean;
  updateWaitCount(): boolean;
  updateWaitMode(): boolean;

  setWaitMode(waitMode: Data_EventWaitMode): void;
  wait(duration: number): void;
  fadeSpeed(): number;

  executeCommand(): boolean;
  checkFreeze(): boolean;
  terminate(): void;
  skipBranch(): void;
  currentCommand(): Maybe<Data_Command>;
  nextEventCode(): number;

  iterateActorId(actorId: number, callback: (actor: Game_Actor) => void): void;
  iterateActorEx(
    operandType: Data_IterateActorOperandType.Constant,
    actorId: number,
    callback: (actor: Game_Actor) => void,
  ): void;
  iterateActorEx(
    operandType: Data_IterateActorOperandType.Variable,
    actorVariable: number,
    callback: (actor: Game_Actor) => void,
  ): void;
  iterateActorIndex(index: number, callback: (actor: Game_Actor) => void): void;
  iterateEnemyIndex(index: number, callback: (enemy: Game_Enemy) => void): void;
  iterateBattler(
    type: Data_BattlerIteratorType,
    index: number,
    callback: (battler: Game_Battler) => void,
  ): void;

  character(eventId: number, callback: (character: Game_Player) => void): void;

  operateValue(
    operation: Data_OperateValueOperation,
    operandType: Data_OperateValueOperandType,
    operand: number,
  ): number;

  changeHp(target: Game_Battler, value: number, allowDeath: boolean): void;

  setupChoices(
    params: Data_CommandParameters[Data_CommandType.ShowChoices],
  ): void;
  setupNumInput(
    params: Data_CommandParameters[Data_CommandType.InputNumber],
  ): void;
  setupItemChoice(
    params: Data_CommandParameters[Data_CommandType.SelectItem],
  ): void;
  setupChild(list: Data_Command[], eventId: number): void;
  jumpTo(index: number): void;
  gameDataOperand(...params: Data_ControlVariablesByGameDataOperand): number;
  operateVariable(
    variableId: number,
    operationType: Data_ControlVariablesOperationType,
    value: number,
  ): void;
  videoFileExt(): `.${string}`;
  pluginCommand(command: string, args: string[]): void;
  static requestImages(list: Data_Command[], commonList?: Data_Command[]): void;
}
declare interface Game_Interpreter extends Data_HasCommandMethods {}
