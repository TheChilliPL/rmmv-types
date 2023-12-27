declare interface Data_Vehicle {
  bgm: AudioObject;
  characterIndex: number;
  characterName: string;
  startMapId: number;
  startX: number;
  startY: number;
}

declare const enum VehicleId {
  Boat,
  Ship,
  Airship,
}

declare const enum VehicleType {
  Boat = "boat",
  Ship = "ship",
  Airship = "airship",
}

declare type VehicleIdOrType = VehicleId | VehicleType;

declare interface Data_AttackMotion {
  type: number;
  weaponImageId: number;
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
  menuCommands: Six<boolean>;
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
    basic: string[];
    commands: (string | null)[];
    params: string[];
    messages: { [key in MessageTerm]: string };
  };
  testBattlers: {
    actorId: number;
    equips: Five<number>;
    level: number;
  }[];
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
