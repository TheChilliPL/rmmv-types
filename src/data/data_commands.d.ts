declare const enum Data_CommandType {
  End = 0,

  ShowText = 101,
  ShowChoices = 102,
  InputNumber = 103,
  SelectItem = 104,
  ShowScrollingText = 105,

  /**
   * The game itself doesn't do anything much with comments.
   * They're simply a way to comment the event behavior.
   *
   * The engine, after executing this function, leaves all the comments
   * in the {@link Game_Interpreter._comments} array, so the plugins can,
   * for example, read some metadata from it.
   *
   * TODO: Find out why {@link Data_CommandType.CommentTextData} exists.
   */
  Comment = 108,

  ConditionalBranch = 111,
  Loop = 112,
  BreakLoop = 113,
  ExitEventProcessing = 115,
  CommonEvent = 117,
  Label = 118,
  JumpToLabel = 119,

  ControlSwitches = 121,
  ControlVariables = 122,
  ControlSelfSwitch = 123,
  ControlTimer = 124,
  ChangeGold = 125,
  ChangeItems = 126,
  ChangeWeapons = 127,
  ChangeArmors = 128,
  ChangePartyMember = 129,
  ChangeBattleBgm = 132,
  ChangeVictoryMe = 133,
  ChangeSaveAccess = 134,
  ChangeMenuAccess = 135,
  ChangeEncounterDisable = 136,
  ChangeFormationAccess = 137,
  ChangeWindowColor = 138,
  ChangeDefeatMe = 139,
  ChangeVehicleBgm = 140,

  TransferPlayer = 201,
  SetVehicleLocation = 202,
  SetEventLocation = 203,
  ScrollMap = 204,
  SetMovementRoute = 205,
  GetOnOffVehicle = 206,
  ChangeTransparency = 211,
  ShowAnimation = 212,
  ShowBalloonIcon = 213,

  EraseEvent = 214,

  ChangePlayerFollowers = 216,
  GatherFollowers = 217,

  FadeoutScreen = 221,
  FadeinScreen = 222,
  TintScreen = 223,
  FlashScreen = 224,
  ShakeScreen = 225,

  Wait = 230,
  ShowPicture = 231,
  MovePicture = 232,
  RotatePicture = 233,
  TintPicture = 234,
  ErasePicture = 235,

  SetWeatherEffect = 236,

  PlayBgm = 241,
  FadeoutBgm = 242,
  SaveBgm = 243,
  ResumeBgm = 244,
  PlayBgs = 245,
  FadeoutBgs = 246,
  PlayMe = 249,
  PlaySe = 250,
  StopSe = 251,
  PlayMovie = 261,

  ChangeMapNameDisplay = 281,
  ChangeTileset = 282,
  ChangeBattleback = 283,
  ChangeParallax = 284,
  GetLocationInfo = 285,

  BattleProcessing = 301,
  ShopProcessing = 302,
  NameInputProcessing = 303,

  ChangeHp = 311,
  ChangeMp = 312,
  ChangeState = 313,
  RecoverAll = 314,
  ChangeExp = 315,
  ChangeLevel = 316,
  ChangeParameter = 317,
  ChangeSkill = 318,
  ChangeEquipment = 319,
  ChangeName = 320,
  ChangeClass = 321,
  ChangeActorImages = 322,
  ChangeVehicleImage = 323,
  ChangeNickname = 324,
  ChangeProfile = 325,
  ChangeTp = 326,

  ChangeEnemyHp = 331,
  ChangeEnemyMp = 332,
  ChangeEnemyState = 333,
  EnemyRecoverAll = 334,
  EnemyAppear = 335,
  EnemyTransform = 336,
  ShowBattleAnimation = 337,
  ForceAction = 339,
  AbortBattle = 340,
  ChangeEnemyTp = 342,

  OpenMenuScreen = 351,
  OpenSaveScreen = 352,
  GameOver = 353,
  ReturnToTitleScreen = 354,

  Script = 355,
  PluginCommand = 356,

  TextData = 401,
  When = 402,
  WhenCancel = 403,
  ScrollingTextData = 405,
  CommentTextData = 408,
  Else = 411,
  RepeatAbove = 413,

  IfWin = 601,
  IfEscape = 602,
  IfLose = 603,

  ShopGoodsData = 605,
}

declare const enum Data_ConditionalBranchType {
  Switch,
  Variable,
  SelfSwitch,
  Timer,
  Actor,
  Enemy,
  Character,
  Gold,
  Item,
  Weapon,
  Armor0,
  Button1,
  Script2,
  Vehicle3,
}

declare const enum Data_CommandSwitchState {
  On,
  Off,
}

declare const enum Data_ConditionalBranchVariableOperandType {
  Constant,
  Variable,
}

declare type Data_ConditionalBranchVariableOperand = [
  comparableType: number,
  otherParam: unknown,
] &
  (
    | [
        comparableType: Data_ConditionalBranchVariableOperandType.Constant,
        constant: number,
      ]
    | [
        comparableType: Data_ConditionalBranchVariableOperandType.Variable,
        variableId: number,
      ]
  );

declare const enum Data_ConditionalBranchVariableComparator {
  Equal,
  GreaterOrEqual,
  LessOrEqual,
  Greater,
  Less,
  NotEqual,
}

declare const enum Data_ConditionalBranchTimerComparator {
  GreaterOrEqual,
  LessOrEqual,
}

declare const enum Data_ConditionalBranchActorConditionType {
  InParty,
  Name,
  Class,
  Skill,
  Weapon,
  Armor,
  State,
}

declare type Data_ConditionalBranchActorCondition = [
  conditionType: number,
  otherParam: unknown,
] &
  (
    | [
        conditionType: Data_ConditionalBranchActorConditionType.InParty,
        dummy: unknown,
      ]
    | [
        conditionType: Data_ConditionalBranchActorConditionType.Name,
        name: string,
      ]
    | [
        conditionType: Data_ConditionalBranchActorConditionType.Class,
        classId: number,
      ]
    | [
        conditionType: Data_ConditionalBranchActorConditionType.Skill,
        skillId: number,
      ]
    | [
        conditionType: Data_ConditionalBranchActorConditionType.Weapon,
        weaponId: number,
      ]
    | [
        conditionType: Data_ConditionalBranchActorConditionType.Armor,
        armorId: number,
      ]
    | [
        conditionType: Data_ConditionalBranchActorConditionType.State,
        stateId: number,
      ]
  );

declare const enum Data_ConditionalBranchEnemyConditionType {
  Alive,
  State,
}

declare type Data_ConditionalBranchEnemyCondition = [
  conditionType: Data_ConditionalBranchEnemyConditionType,
  otherParam?: unknown,
] &
  (
    | [
        conditionType: Data_ConditionalBranchEnemyConditionType.Alive,
        dummy?: unknown,
      ]
    | [
        conditionType: Data_ConditionalBranchEnemyConditionType.State,
        stateId: number,
      ]
  );

declare const enum Data_ConditionalBranchGoldComparator {
  GreaterOrEqual,
  LessOrEqual,
  Less,
}

declare type Data_ConditionalBranchParameters = [
  type: number,
  ...params: unknown[],
] &
  (
    | [
        type: Data_ConditionalBranchType.Switch,
        switchId: number,
        state: Data_CommandSwitchState,
      ]
    | [
        type: Data_ConditionalBranchType.Variable,
        variableId: number,
        ...compareTo: Data_ConditionalBranchVariableOperand,
        comparator: Data_ConditionalBranchVariableComparator,
      ]
    | [
        type: Data_ConditionalBranchType.SelfSwitch,
        selfSwitchCh: string, //TODO
        state: Data_CommandSwitchState,
      ]
    | [
        type: Data_ConditionalBranchType.Timer,
        seconds: number,
        comparator: Data_ConditionalBranchTimerComparator,
      ]
    | [
        type: Data_ConditionalBranchType.Actor,
        actorId: number,
        ...condition: Data_ConditionalBranchActorCondition,
      ]
    | [
        type: Data_ConditionalBranchType.Enemy,
        enemyId: number,
        ...condition: Data_ConditionalBranchEnemyCondition,
      ]
    | [type: Data_ConditionalBranchType.Character, direction: Dir4]
    | [
        type: Data_ConditionalBranchType.Gold,
        amount: number,
        comparator: Data_ConditionalBranchGoldComparator,
      ]
    | [type: Data_ConditionalBranchType.Item, itemId: number]
    | [
        type: Data_ConditionalBranchType.Weapon,
        weaponId: number,
        includeEquipped: boolean,
      ]
    | [
        type: Data_ConditionalBranchType.Armor,
        armorId: number,
        includeEquipped: boolean,
      ]
    | [type: Data_ConditionalBranchType.Button, key: Key]
    | [type: Data_ConditionalBranchType.Script, script: string]
    | [type: Data_ConditionalBranchType.Vehicle, vehicle: Data_VehicleIdOrType]
  );

declare const enum Data_ControlVariablesOperationType {
  Set,
  Add,
  Subtract,
  Multiply,
  Divide,
  Modulo,
}

declare const enum Data_ControlVariablesOperandType {
  Constant,
  Variable,
  Random,
  GameData,
  Script,
}

declare const enum Data_ControlVariablesByGameDataOperandType {
  Item,
  Weapon,
  Armor,
  Actor,
  Enemy,
  Character,
  Party,
  Other,
}

/**
 * @see Data_BattlerParams
 */
declare const enum Data_ControlVariablesByGameDataActorOperandType {
  Level,
  Exp,
  Hp,
  Mp,
  // Parameters
  Mhp,
  Mmp,
  Atk,
  Def,
  Mat,
  Mdf,
  Agi,
  Luk,
}

/**
 * @see Data_BattlerParams
 */
declare const enum Data_ControlVariablesByGameDataEnemyOperandType {
  Hp,
  Mp,
  // Parameters
  Mhp,
  Mmp,
  Atk,
  Def,
  Mat,
  Mdf,
  Agi,
  Luk,
}

declare const enum Data_ControlVariablesByGameDataCharacterOperandType {
  MapX,
  MapY,
  Direction,
  ScreenX,
  ScreenY,
}

declare const enum Data_ControlVariablesByGameDataOtherOperand {
  MapId,
  PartyMembers,
  Gold,
  Steps,
  PlayTime,
  Timer,
  SaveCount,
  BattleCount,
  WinCount,
  EscapeCount,
}

declare type Data_ControlVariablesByGameDataOperand = [
  gameDataOperand: number,
  param1: unknown,
  param2?: unknown,
] &
  (
    | [
        gameDataOperand: Data_ControlVariablesByGameDataOperandType.Item,
        itemId: number,
      ]
    | [
        gameDataOperand: Data_ControlVariablesByGameDataOperandType.Weapon,
        weaponId: number,
      ]
    | [
        gameDataOperand: Data_ControlVariablesByGameDataOperandType.Armor,
        armorId: number,
      ]
    | [
        gameDataOperand: Data_ControlVariablesByGameDataOperandType.Actor,
        actorId: number,
        actorOperand: Data_ControlVariablesByGameDataActorOperandType,
      ]
    | [
        gameDataOperand: Data_ControlVariablesByGameDataOperandType.Enemy,
        enemyId: number,
        enemyOperand: Data_ControlVariablesByGameDataEnemyOperandType,
      ]
    | [
        gameDataOperand: Data_ControlVariablesByGameDataOperandType.Character,
        characterId: number,
        characterOperand: Data_ControlVariablesByGameDataCharacterOperandType,
      ]
    | [
        gameDataOperand: Data_ControlVariablesByGameDataOperandType.Party,
        memberId: number,
      ]
    | [
        gameDataOperand: Data_ControlVariablesByGameDataOperandType.Other,
        otherOperand: Data_ControlVariablesByGameDataOtherOperand,
      ]
  );

declare type Data_ControlVariablesComparator = [
  operand: number,
  ...params: unknown[],
] &
  (
    | [operand: Data_ControlVariablesOperandType.Constant, constant: number]
    | [operand: Data_ControlVariablesOperandType.Variable, variableId: number]
    | [
        operand: Data_ControlVariablesOperandType.Random,
        ...randomRange: [number, number],
      ]
    | [
        operand: Data_ControlVariablesOperandType.GameData,
        gameDataOperand: Data_ControlVariablesByGameDataOperand,
      ]
    | [operand: Data_ControlVariablesOperandType.Script, script: string]
  );

declare type Data_ControlVariablesParameters = [
  ...range: [number, number],
  operationType: Data_ControlVariablesOperationType,
  ...operand: Data_ControlVariablesComparator,
];

declare const enum Data_ControlTimerCommand {
  Start,
  Stop,
}

declare type Data_ControlTimerParameters = [
  command: number,
  otherParam?: unknown,
] &
  (
    | [command: Data_ControlTimerCommand.Start, seconds: number]
    | [command: Data_ControlTimerCommand.Stop]
  );

declare const enum Data_OperateValueOperation {
  Add,
  Subtract,
}

declare const enum Data_OperateValueOperandType {
  Constant,
  Variable,
}

declare type Data_OperateValueOperand = [operandType: number, value: unknown] &
  (
    | [operandType: Data_OperateValueOperandType.Constant, value: number]
    | [operandType: Data_OperateValueOperandType.Variable, variable: number]
  );

declare type Data_OperateValueParameters = [
  operation: Data_OperateValueOperation,
  ...operand: Data_OperateValueOperand,
];

declare const enum Data_ChangePartyMemberOperation {
  Add,
  Remove,
}

declare type Data_ChangePartyMemberParameters = [
  actorId: number,
  operation: number,
  otherParam?: unknown,
] &
  (
    | [
        actorId: number,
        operation: Data_ChangePartyMemberOperation.Add,
        reinitialize: boolean,
      ]
    | [actorId: number, operation: Data_ChangePartyMemberOperation.Remove]
  );

declare const enum Data_CommandAccess {
  Disabled,
  Enabled,
}

declare const enum Data_TransferDestinationType {
  Direct,
  Variables,
}

declare type Data_TransferParameters = [
  type: Data_TransferDestinationType,
  mapId: number,
  x: number,
  y: number,
];

declare const enum Data_FadeType {
  Black,
  White,
  None,
}

declare const enum Data_EventTransferDestinationType {
  Direct,
  Variables,
  Swap,
}

declare const enum Data_PlayerFollowersState {
  Show,
  Hide,
}

declare type Data_EventTransferParameters = [
  type: Data_EventTransferDestinationType,
  param1: unknown,
  param2?: unknown,
  direction?: number,
] &
  (
    | [
        type:
          | Data_EventTransferDestinationType.Direct
          | Data_EventTransferDestinationType.Variables,
        x: number,
        y: number,
      ]
    | [
        type: Data_EventTransferDestinationType.Swap,
        otherEventId: number,
        unused?: unknown,
        direction?: Dir4,
      ]
  );

declare const enum Data_PicturePositionDesignationType {
  Constant,
  Variable,
}

declare type Data_PicturePositionDesignation = [
  designationType: number,
  x: unknown,
  y: unknown,
] &
  (
    | [
        designationType: Data_PicturePositionDesignationType.Constant,
        x: number,
        y: number,
      ]
    | [
        designationType: Data_PicturePositionDesignationType.Variable,
        xVariable: number,
        yVariable: number,
      ]
  );

declare const enum Data_GetLocationInfoDataType {
  TerrainTag,
  EventId,
  TileLayer1,
  TileLayer2,
  TileLayer3,
  TileLayer4,
  RegionId,
}

declare const enum Data_GetLocationInfoDesignationType {
  Constant,
  Variable,
}

declare type Data_GetLocationInfoDesignation = [
  designationType: number,
  x: unknown,
  y: unknown,
] &
  (
    | [
        designationType: Data_GetLocationInfoDesignationType.Constant,
        x: number,
        y: number,
      ]
    | [
        designationType: Data_GetLocationInfoDesignationType.Variable,
        xVariable: number,
        yVariable: number,
      ]
  );

declare type Data_GetLocationInfoParameters = [
  variableId: number,
  dataType: Data_GetLocationInfoDataType,
  ...position: Data_GetLocationInfoDesignation,
];

declare const enum Data_BattleProcessingDesignationType {
  Constant,
  Variable,
}

declare type Data_BattleProcessingDesignation = [
  designationType: number,
  troop: unknown,
] &
  (
    | [
        designationType: Data_BattleProcessingDesignationType.Constant,
        troopId: number,
      ]
    | [
        designationType: Data_BattleProcessingDesignationType.Variable,
        troopVariable: number,
      ]
  );

declare const enum Data_ShopGoodType {
  Item,
  Weapon,
  Armor,
}

declare type Data_ShopGood = [
  type: Data_ShopGoodType,
  id: number,
  ...([customPrice: 0, _price: 0] | [customPrice: 1, price: number]),
];

declare const enum Data_IterateActorOperandType {
  Constant,
  Variable,
}

declare type Data_IterateActorExParameters = [
  operandType: number,
  actor: unknown,
] &
  (
    | [operandType: Data_IterateActorOperandType.Constant, actorId: number]
    | [
        operandType: Data_IterateActorOperandType.Variable,
        actorVariable: number,
      ]
  );

declare const enum Data_ChangeStateOperator {
  AddState,
  RemoveState,
}

declare const enum Data_ChangeSkillOperator {
  LearnSkill,
  ForgetSkill,
}

declare type Data_CommandParameters = {
  [key: Data_CommandType]: unknown[];
} & {
  [Data_CommandType.End]: [];

  [Data_CommandType.ShowText]: [
    faceName: string,
    faceIndex: number,
    background: MessageBackground,
    positionType: MessagePositionType,
  ];
  [Data_CommandType.TextData]: [string];
  [Data_CommandType.ShowChoices]: [
    choices: string[],
    cancelType: number,
    defaultType?: number,
    positionType?: number,
  ];
  [Data_CommandType.InputNumber]: [variableId: number, maxDigits: number];
  [Data_CommandType.SelectItem]: [variableId: number, itemType?: Data_ItemType];
  [Data_CommandType.ShowScrollingText]: [speed: number, noFast: boolean];
  [Data_CommandType.ScrollingTextData]: [string];

  [Data_CommandType.Comment]: [string];
  [Data_CommandType.CommentTextData]: [string];

  [Data_CommandType.ConditionalBranch]: Data_ConditionalBranchParameters;
  [Data_CommandType.Else]: [];

  [Data_CommandType.Loop]: [];
  [Data_CommandType.RepeatAbove]: [];
  [Data_CommandType.BreakLoop]: [];

  [Data_CommandType.ExitEventProcessing]: [];

  [Data_CommandType.CommonEvent]: [commonEventId: number];

  [Data_CommandType.Label]: [label: string];
  [Data_CommandType.JumpToLabel]: [label: string];

  [Data_CommandType.ControlSwitches]: [
    ...range: [number, number],
    state: Data_CommandSwitchState,
  ];
  [Data_CommandType.ControlVariables]: Data_ControlVariablesParameters;
  [Data_CommandType.ControlSelfSwitch]: [
    selfSwitchCh: SelfSwitchChar,
    state: Data_CommandSwitchState,
  ];
  [Data_CommandType.ControlTimer]: Data_ControlTimerParameters;

  [Data_CommandType.ChangeGold]: Data_OperateValueParameters;
  [Data_CommandType.ChangeItems]: [
    itemId: number,
    ...operation: Data_OperateValueParameters,
  ];
  [Data_CommandType.ChangeWeapons]: [
    itemId: number,
    ...operation: Data_OperateValueParameters,
    includeEquip: boolean,
  ];
  [Data_CommandType.ChangeArmors]: [
    itemId: number,
    ...operation: Data_OperateValueParameters,
    includeEquip: boolean,
  ];

  [Data_CommandType.ChangePartyMember]: Data_ChangePartyMemberParameters;

  [Data_CommandType.ChangeBattleBgm]: [AudioObject];
  [Data_CommandType.ChangeVictoryMe]: [AudioObject];

  [Data_CommandType.ChangeSaveAccess]: [Data_CommandAccess];
  [Data_CommandType.ChangeMenuAccess]: [Data_CommandAccess];
  [Data_CommandType.ChangeEncounterDisable]: [Data_CommandAccess];
  [Data_CommandType.ChangeFormationAccess]: [Data_CommandAccess];

  [Data_CommandType.ChangeWindowColor]: [RGBAColor];

  [Data_CommandType.ChangeDefeatMe]: [AudioObject];
  [Data_CommandType.ChangeVehicleBgm]: [Data_VehicleIdOrType, AudioObject];

  [Data_CommandType.TransferPlayer]: [
    ...transfer: Data_TransferParameters,
    direction: Dir4,
    fadeType: Data_FadeType,
  ];
  [Data_CommandType.SetVehicleLocation]: [
    vehicle: Data_VehicleIdOrType,
    ...transfer: Data_TransferParameters,
  ];
  [Data_CommandType.SetEventLocation]: [
    eventId: number,
    ...transfer: Data_EventTransferParameters,
  ];
  [Data_CommandType.ScrollMap]: [
    direction: Dir4,
    distance: number,
    speed: number,
  ];
  [Data_CommandType.SetMovementRoute]: [
    characterId: number,
    route: Data_EventMoveRoute,
  ];
  [Data_CommandType.GetOnOffVehicle]: [];

  [Data_CommandType.ChangeTransparency]: [Data_CommandSwitchState];
  [Data_CommandType.ShowAnimation]: [
    characterId: number,
    animationId: number,
    wait: boolean,
  ];
  [Data_CommandType.ShowBalloonIcon]: [
    characterId: number,
    balloonId: number,
    wait: boolean,
  ];

  [Data_CommandType.EraseEvent]: [];

  [Data_CommandType.ChangePlayerFollowers]: [Data_PlayerFollowersState];
  [Data_CommandType.GatherFollowers]: [];
  [Data_CommandType.FadeoutScreen]: [];
  [Data_CommandType.FadeinScreen]: [];
  [Data_CommandType.TintScreen]: [
    tone: number,
    duration: number,
    wait: boolean,
  ];
  [Data_CommandType.FlashScreen]: [
    color: RGBAColor,
    duration: number,
    wait: boolean,
  ];
  [Data_CommandType.ShakeScreen]: [
    power: number,
    speed: number,
    duration: number,
    wait: boolean,
  ];

  [Data_CommandType.Wait]: [duration: number];
  [Data_CommandType.ShowPicture]: [
    pictureId: number,
    name: string,
    origin: number, //TODO
    ...position: Data_PicturePositionDesignation,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number,
  ];
  [Data_CommandType.MovePicture]: [
    pictureId: number,
    unknown: unknown,
    origin: number, //TODO
    ...position: Data_PicturePositionDesignation,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number,
    duration: number,
    wait: boolean,
  ];
  [Data_CommandType.RotatePicture]: [pictureId: number, angle: number];
  [Data_CommandType.TintPicture]: [
    pictureId: number,
    tone: number,
    duration: number,
    wait: boolean,
  ];
  [Data_CommandType.ErasePicture]: [pictureId: number];

  [Data_CommandType.SetWeatherEffect]: [
    type: WeatherType,
    power: number,
    duration: number,
    wait: boolean,
  ];

  [Data_CommandType.PlayBgm]: [AudioObject];
  [Data_CommandType.FadeoutBgm]: [duration: number];
  [Data_CommandType.SaveBgm]: [];
  [Data_CommandType.ResumeBgm]: [];
  [Data_CommandType.PlayBgs]: [AudioObject];
  [Data_CommandType.FadeoutBgs]: [duration: number];
  [Data_CommandType.PlayMe]: [AudioObject];
  [Data_CommandType.PlaySe]: [AudioObject];
  [Data_CommandType.StopSe]: [];
  [Data_CommandType.PlayMovie]: [name: string];

  [Data_CommandType.ChangeMapNameDisplay]: [disable: 0 | 1];
  [Data_CommandType.ChangeTileset]: [tilesetId: number];
  [Data_CommandType.ChangeBattleback]: [
    battleback1Name: string,
    battleback2Name: string,
  ];
  [Data_CommandType.ChangeParallax]: [
    name: string,
    loopY: boolean,
    loopY: boolean,
    sx: number,
    sy: number,
  ];
  [Data_CommandType.GetLocationInfo]: Data_GetLocationInfoParameters;

  [Data_CommandType.BattleProcessing]: [
    ...designation: Data_BattleProcessingDesignation,
    canEscape: boolean,
    canLose: boolean,
  ];
  [Data_CommandType.IfWin]: [];
  [Data_CommandType.IfEscape]: [];
  [Data_CommandType.IfLose]: [];

  [Data_CommandType.ShopProcessing]: [
    ...shopGood: Data_ShopGood,
    purchaseOnly: boolean,
  ];
  [Data_CommandType.ShopGoodsData]: Data_ShopGood;

  [Data_CommandType.NameInputProcessing]: [actorId: number, maxLength: number];

  [Data_CommandType.ChangeHp]: [
    ...iterator: Data_IterateActorExParameters,
    ...operation: Data_OperateValueParameters,
    allowDeath: boolean,
  ];
  [Data_CommandType.ChangeMp]: [
    ...iterator: Data_IterateActorExParameters,
    ...operation: Data_OperateValueParameters,
  ];
  [Data_CommandType.ChangeTp]: [
    ...iterator: Data_IterateActorExParameters,
    ...operation: Data_OperateValueParameters,
  ];
  [Data_CommandType.ChangeState]: [
    ...iterator: Data_IterateActorExParameters,
    operator: Data_ChangeStateOperator,
    stateId: number,
  ];
  [Data_CommandType.RecoverAll]: [...iterator: Data_IterateActorExParameters];
  [Data_CommandType.ChangeExp]: [
    ...iterator: Data_IterateActorExParameters,
    ...operation: Data_OperateValueParameters,
    showLevelUp: boolean,
  ];
  [Data_CommandType.ChangeLevel]: [
    ...iterator: Data_IterateActorExParameters,
    ...operation: Data_OperateValueParameters,
    showLevelUp: boolean,
  ];
  [Data_CommandType.ChangeParameter]: [
    ...iterator: Data_IterateActorExParameters,
    param: number, //TODO
    ...operation: Data_OperateValueParameters,
  ];
  [Data_CommandType.ChangeSkill]: [
    ...iterator: Data_IterateActorExParameters,
    operator: Data_ChangeSkillOperator,
    skillId: number,
  ];
  [Data_CommandType.ChangeEquipment]: [
    actorId: number,
    etypeId: number,
    itemId: number,
  ];
  [Data_CommandType.ChangeName]: [actorId: number, name: string];
  [Data_CommandType.ChangeClass]: [
    actorId: number,
    classId: number,
    keepExp: boolean,
  ];
  [Data_CommandType.ChangeActorImages]: [
    actorId: number,
    characterName: string,
    characterIndex: number,
    faceName: string,
    faceIndex: number,
    battlerName: string,
  ];
  [Data_CommandType.ChangeVehicleImage]: [
    vehicleId: Data_VehicleIdOrType,
    characterName: string,
    characterIndex: number,
  ];
  [Data_CommandType.ChangeNickname]: [actorId: number, nickname: string];
  [Data_CommandType.ChangeProfile]: [actorId: number, profile: string];
};

declare interface Data_Command<T extends Data_CommandType = Data_CommandType> {
  code: T;
  indent: number;
  parameters: Data_CommandParameters[T];
}

declare const enum Data_EventWaitMode {
  Message = "message",
  Transfer = "transfer",
  Scroll = "scroll",
  Route = "route",
  Animation = "animation",
  Balloon = "balloon",
  Gather = "gather",
  Action = "action",
  Video = "video",
  Image = "image",
}

declare const enum Data_BattlerIteratorType {
  Enemy,
  Actor,
}

// TODO Is it doable somehow? {@link Game_Interpreter}
// declare type Data_CommandMethod = `command${Data_CommandType}`;
//
declare type Data_HasCommandMethods = {
  [K in Data_CommandType as `command${K}`]: () => boolean;
};
