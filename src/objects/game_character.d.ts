/**
 * The superclass of {@link Game_Player}, {@link Game_Follower}, {@link Game_Vehicle}, and {@link Game_Event}.
 */
declare class Game_Character extends Game_CharacterBase {
  static ROUTE_END: Data_RouteCommandType.End;
  static ROUTE_MOVE_DOWN: Data_RouteCommandType.MoveDown;
  static ROUTE_MOVE_LEFT: Data_RouteCommandType.MoveLeft;
  static ROUTE_MOVE_RIGHT: Data_RouteCommandType.MoveRight;
  static ROUTE_MOVE_UP: Data_RouteCommandType.MoveUp;
  static ROUTE_MOVE_LOWER_L: Data_RouteCommandType.MoveLowerLeft;
  static ROUTE_MOVE_LOWER_R: Data_RouteCommandType.MoveLowerRight;
  static ROUTE_MOVE_UPPER_L: Data_RouteCommandType.MoveUpperLeft;
  static ROUTE_MOVE_UPPER_R: Data_RouteCommandType.MoveUpperRight;
  static ROUTE_MOVE_RANDOM: Data_RouteCommandType.MoveRandom;
  static ROUTE_MOVE_TOWARD: Data_RouteCommandType.MoveToward;
  static ROUTE_MOVE_AWAY: Data_RouteCommandType.MoveAway;
  static ROUTE_MOVE_FORWARD: Data_RouteCommandType.MoveForward;
  static ROUTE_MOVE_BACKWARD: Data_RouteCommandType.MoveBackward;
  static ROUTE_JUMP: Data_RouteCommandType.Jump;
  static ROUTE_WAIT: Data_RouteCommandType.Wait;
  static ROUTE_TURN_DOWN: Data_RouteCommandType.TurnDown;
  static ROUTE_TURN_LEFT: Data_RouteCommandType.TurnLeft;
  static ROUTE_TURN_RIGHT: Data_RouteCommandType.TurnRight;
  static ROUTE_TURN_UP: Data_RouteCommandType.TurnUp;
  static ROUTE_TURN_90D_R: Data_RouteCommandType.Turn90degRight;
  static ROUTE_TURN_90D_L: Data_RouteCommandType.Turn90degLeft;
  static ROUTE_TURN_180D: Data_RouteCommandType.Turn180deg;
  static ROUTE_TURN_90D_R_L: Data_RouteCommandType.Turn90degRightOrLeft;
  static ROUTE_TURN_RANDOM: Data_RouteCommandType.TurnRandom;
  static ROUTE_TURN_TOWARD: Data_RouteCommandType.TurnToward;
  static ROUTE_TURN_AWAY: Data_RouteCommandType.TurnAway;
  static ROUTE_SWITCH_ON: Data_RouteCommandType.SwitchOn;
  static ROUTE_SWITCH_OFF: Data_RouteCommandType.SwitchOff;
  static ROUTE_CHANGE_SPEED: Data_RouteCommandType.ChangeSpeed;
  static ROUTE_CHANGE_FREQ: Data_RouteCommandType.ChangeFrequency;
  static ROUTE_WALK_ANIME_ON: Data_RouteCommandType.WalkAnimeOn;
  static ROUTE_WALK_ANIME_OFF: Data_RouteCommandType.WalkAnimeOff;
  static ROUTE_STEP_ANIME_ON: Data_RouteCommandType.StepAnimeOn;
  static ROUTE_STEP_ANIME_OFF: Data_RouteCommandType.StepAnimeOff;
  static ROUTE_DIR_FIX_ON: Data_RouteCommandType.DirectionFixOn;
  static ROUTE_DIR_FIX_OFF: Data_RouteCommandType.DirectionFixOff;
  static ROUTE_THROUGH_ON: Data_RouteCommandType.ThroughOn;
  static ROUTE_THROUGH_OFF: Data_RouteCommandType.ThroughOff;
  static ROUTE_TRANSPARENT_ON: Data_RouteCommandType.TransparentOn;
  static ROUTE_TRANSPARENT_OFF: Data_RouteCommandType.TransparentOff;
  static ROUTE_CHANGE_IMAGE: Data_RouteCommandType.ChangeImage;
  static ROUTE_CHANGE_OPACITY: Data_RouteCommandType.ChangeOpacity;
  static ROUTE_CHANGE_BLEND_MODE: Data_RouteCommandType.ChangeBlendMode;
  static ROUTE_PLAY_SE: Data_RouteCommandType.PlaySE;
  static ROUTE_SCRIPT: Data_RouteCommandType.Script;

  initialize(...constructorParams: unknown[]): void;

  _moveRouteForcing: boolean;
  _moveRoute: Maybe<Data_EventMoveRoute>;
  _moveRouteIndex: number;
  _originalMoveRoute: Maybe<Data_EventMoveRoute>;
  _originalMoveRouteIndex: number;
  _waitCount: number;

  override initMembers(): void;

  memorizeMoveRoute(): void;
  restoreMoveRoute(): void;
  isMoveRouteForcing(): boolean;
  setMoveRoute(moveRoute: Data_EventMoveRoute): void;
  forceMoveRoute(moveRoute: Data_EventMoveRoute): void;

  override updateStop(): void;
  updateRoutineMove(): void;

  processMoveCommand(command: Data_RouteCommand): void;

  deltaXFrom(x: number): number;
  deltaYFrom(y: number): number;

  moveRandom(): void;
  moveTowardCharacter(character: Game_Character): void;
  moveAwayFromCharacter(character: Game_Character): void;

  turnTowardCharacter(character: Game_Character): void;
  turnAwayFromCharacter(character: Game_Character): void;

  turnTowardPlayer(): void;
  turnAwayFromPlayer(): void;

  moveTowardPlayer(): void;
  moveAwayFromPlayer(): void;

  moveForward(): void;
  moveBackward(): void;

  processRouteEnd(): void;

  advanceMoveRouteIndex(): void;

  turnRight90(): void;
  turnLeft90(): void;
  turn180(): void;
  turnRightOrLeft90(): void;
  turnRandom(): void;

  swap(character: Game_Character): void;

  findDirectionTo(goalX: number, goalY: number): Dir4;
  searchLimit(): number;
}
