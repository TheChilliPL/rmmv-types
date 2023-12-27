declare interface Data_Vehicle {
  bgm: AudioObject;
  characterIndex: number;
  characterName: string;
  startMapId: number;
  startX: number;
  startY: number;
}

declare const enum Data_VehicleId {
  Boat,
  Ship,
  Airship,
}

declare const enum Data_VehicleType {
  Boat = "boat",
  Ship = "ship",
  Airship = "airship",
}

declare type Data_VehicleIdOrType = Data_VehicleId | Data_VehicleType;

declare interface Data_AttackMotion {
  type: number;
  weaponImageId: number;
}

declare interface Data_TestBattler {
  actorId: number;
  equips: Five<number>;
  level: number;
}

declare interface Data_System {
  airship: Data_Vehicle;
  armorTypes: string[];
  attackMotions: Data_AttackMotion[];
  battleBgm: AudioObject;
  battleback1Name: string;
  battleback2Name: string;
  battlerHue: number;
  battlerName: string;
  boat: Data_Vehicle;
  currencyUnit: string;
  defeatMe: AudioObject;
  editMapId: number;
  elements: string[];
  equipTypes: string[];
  gameTitle: string;
  gameoverMe: AudioObject;
  locale: string;
  magicSkills: number[];
  menuCommands: [
    item: boolean,
    skill: boolean,
    equip: boolean,
    status: boolean,
    formation: boolean,
    save: boolean,
  ];
  optDisplayTp: boolean;
  optDrawTitle: boolean;
  optExtraExp: boolean;
  optFloorDeath: boolean;
  optFollowers: boolean;
  optSideView: boolean;
  optSlipDeath: boolean;
  optTransparent: boolean;
  partyMembers: number[];
  ship: Data_Vehicle;
  skillTypes: string[];
  sounds: AudioObject[];
  startMapId: number;
  startX: number;
  startY: number;
  switches: string[];
  terms: {
    basic: [
      level: string,
      levelAbbr: string,
      hp: string,
      hpAbbr: string,
      mp: string,
      mpAbbr: string,
      tp: string,
      tpAbbr: string,
      exp: string,
      expAbbr: string,
    ];
    commands: [
      fight: string,
      escape: string,
      attack: string,
      guard: string,
      item: string,
      skill: string,
      equip: string,
      status: string,
      formation: string,
      save: string,
      gameEnd: string,
      options: string,
      weapon: string,
      armor: string,
      keyItem: string,
      equip2: string,
      optimize: string,
      clear: string,
      newGame: string,
      continue_: string,
      null,
      toTitle: string,
      cancel: string,
      null,
      buy: string,
      sell: string,
    ];
    params: [
      mhp: string,
      mmp: string,
      atk: string,
      def: string,
      mat: string,
      mdf: string,
      agi: string,
      luk: string,
      hit: string,
      eva: string,
    ];
    messages: { [key in MessageTerm]: string };
  };
  testBattlers: Data_TestBattler[];
  testTroopId: number;
  title1Name: string;
  title2Name: string;
  titleBgm: AudioObject;
  variables: string[];
  versionId: number;
  victoryMe: AudioObject;
  weaponTypes: string[];
  windowTone: RGBAColor;
}
