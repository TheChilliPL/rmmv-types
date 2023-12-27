declare interface Data_EventConditions {
  actorId: number;
  actorValid: boolean;
  itemId: number;
  itemValid: boolean;
  selfSwitchCh: string;
  selfSwitchValid: boolean;
  switch1Id: number;
  switch1Valid: boolean;
  switch2Id: number;
  switch2Valid: boolean;
  variableId: number;
  variableValid: boolean;
  variableValue: number;
}

declare interface Data_EventImage {
  tileId: number;
  characterName: string;
  direction: number;
  pattern: number;
  characterIndex: number;
}

/**
 * @see Game_Event.updateSelfMovement
 */
declare const enum Data_EventMoveType {
  Fixed,
  Random,
  Approach,
  Custom,
}

declare const enum Data_EventMoveFrequency {
  Lowest = 1,
  Lower,
  Normal,
  Higher,
  Highest,
}

declare const enum Data_RouteCommandType {
  End,

  MoveDown,
  MoveLeft,
  MoveRight,
  MoveUp,

  MoveLowerLeft,
  MoveLowerRight,
  MoveUpperLeft,
  MoveUpperRight,

  MoveRandom,
  MoveToward,
  MoveAway,
  MoveForward,
  MoveBackward,

  Jump,

  Wait,

  TurnDown,
  TurnLeft,
  TurnRight,
  TurnUp,

  Turn90degRight,
  Turn90degLeft,
  Turn180deg,
  Turn90degRightOrLeft,

  TurnRandom,
  TurnToward,
  TurnAway,

  SwitchOn,
  SwitchOff,

  ChangeSpeed,
  ChangeFrequency,

  WalkAnimeOn,
  WalkAnimeOff,
  StepAnimeOn,
  StepAnimeOff,
  DirectionFixOn,
  DirectionFixOff,
  ThroughOn,
  ThroughOff,
  TransparentOn,
  TransparentOff,

  ChangeImage,
  ChangeOpacity,
  ChangeBlendMode,

  PlaySE,

  Script,
}

declare type Data_RouteCommandParameters = {
  [Data_RouteCommandType.End]: void;

  [Data_RouteCommandType.MoveDown]: void;
  [Data_RouteCommandType.MoveLeft]: void;
  [Data_RouteCommandType.MoveRight]: void;
  [Data_RouteCommandType.MoveUp]: void;

  [Data_RouteCommandType.MoveLowerLeft]: void;
  [Data_RouteCommandType.MoveLowerRight]: void;
  [Data_RouteCommandType.MoveUpperLeft]: void;
  [Data_RouteCommandType.MoveUpperRight]: void;

  [Data_RouteCommandType.MoveRandom]: void;
  [Data_RouteCommandType.MoveToward]: void;
  [Data_RouteCommandType.MoveAway]: void;
  [Data_RouteCommandType.MoveForward]: void;
  [Data_RouteCommandType.MoveBackward]: void;

  [Data_RouteCommandType.Jump]: [x: number, y: number];
  [Data_RouteCommandType.Wait]: [frames: number];

  [Data_RouteCommandType.TurnDown]: void;
  [Data_RouteCommandType.TurnLeft]: void;
  [Data_RouteCommandType.TurnRight]: void;
  [Data_RouteCommandType.TurnUp]: void;

  [Data_RouteCommandType.Turn90degRight]: void;
  [Data_RouteCommandType.Turn90degLeft]: void;
  [Data_RouteCommandType.Turn180deg]: void;
  [Data_RouteCommandType.Turn90degRightOrLeft]: void;

  [Data_RouteCommandType.TurnRandom]: void;
  [Data_RouteCommandType.TurnToward]: void;
  [Data_RouteCommandType.TurnAway]: void;

  [Data_RouteCommandType.SwitchOn]: [switchId: number];
  [Data_RouteCommandType.SwitchOff]: [switchId: number];

  [Data_RouteCommandType.ChangeSpeed]: [speed: Data_EventMoveSpeed];
  [Data_RouteCommandType.ChangeFrequency]: [frequency: Data_EventMoveFrequency];

  [Data_RouteCommandType.WalkAnimeOn]: void;
  [Data_RouteCommandType.WalkAnimeOff]: void;
  [Data_RouteCommandType.StepAnimeOn]: void;
  [Data_RouteCommandType.StepAnimeOff]: void;
  [Data_RouteCommandType.DirectionFixOn]: void;
  [Data_RouteCommandType.DirectionFixOff]: void;
  [Data_RouteCommandType.ThroughOn]: void;
  [Data_RouteCommandType.ThroughOff]: void;
  [Data_RouteCommandType.TransparentOn]: void;
  [Data_RouteCommandType.TransparentOff]: void;

  [Data_RouteCommandType.ChangeImage]: [
    characterName: string,
    characterIndex: number,
  ];
  [Data_RouteCommandType.ChangeOpacity]: [opacity: number];
  [Data_RouteCommandType.ChangeBlendMode]: [blendMode: PIXI.BLEND_MODES];

  [Data_RouteCommandType.PlaySE]: [se: AudioObject];

  [Data_RouteCommandType.Script]: [script: string];
};

declare interface Data_RouteCommand<
  T extends Data_RouteCommandType = Data_RouteCommandType,
> {
  code: T;
  indent?: null; // ? TODO
  parameters?: Data_RouteCommandParameters[T];
}

declare interface Data_EventMoveRoute {
  list: Data_RouteCommand[];
  repeat: boolean;
  skippable: boolean;
  wait: boolean;
}

declare const enum Data_EventMoveSpeed {
  X8Slower = 1,
  X4Slower,
  X2Slower,
  Normal,
  X2Faster,
  X4Faster,
}

declare const enum Data_EventPriorityType {
  BelowCharacters,
  SameAsCharacters,
  AboveCharacters,
}

declare const enum Data_EventTrigger {
  ActionButton,
  PlayerTouch,
  EventTouch,
  Autorun,
  Parallel,
}

declare interface Data_EventPage {
  conditions: Data_EventConditions;
  directionFix: boolean;
  image: Data_EventImage;
  list: Data_Command[];
  moveFrequency: Data_EventMoveFrequency;
  moveRoute: Data_EventMoveRoute;
  moveSpeed: Data_EventMoveSpeed;
  moveType: Data_EventMoveType;
  priorityType: Data_EventPriorityType;
  stepAnime: boolean;
  through: boolean;
  trigger: Data_EventTrigger;
  walkAnime: boolean;
}

declare interface Data_Event {
  id: number;
  name: string;
  note: string;
  pages: Data_EventPage[];
  x: number;
  y: number;
}
