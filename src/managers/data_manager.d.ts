declare interface DatabaseFile {
  name: string;
  src: string;
}

declare type SavefileCharacter = [
  characterName: string,
  characterIndex: number,
];

declare type SavefileFace = [faceName: string, faceIndex: number];

declare interface GlobalInfo {
  globalId: string;
  title: string;
  characters: SavefileCharacter[];
  faces: SavefileFace[];
  playtime: string;
  timestamp: number;
}

declare interface SaveData {
  system: Game_System;
  screen: Game_Screen;
  timer: Game_Timer;
  switches: Game_Switches;
  variables: Game_Variables;
  selfSwitches: Game_SelfSwitches;
  actors: Game_Actors;
  party: Game_Party;
  map: Game_Map;
  player: Game_Player;
}

declare var $dataActors: Data_Actors;
declare var $dataClasses: Data_Classes;
declare var $dataSkills: Data_Skills;
declare var $dataItems: Data_Items;
declare var $dataWeapons: Data_Weapons;
declare var $dataArmors: Data_Armors;
declare var $dataEnemies: Data_Enemies;
declare var $dataTroops: Data_Troops;
declare var $dataStates: Data_States;
declare var $dataAnimations: Data_Animations;
declare var $dataTilesets: Data_Tilesets;
declare var $dataCommonEvents: Data_CommonEvents;
declare var $dataSystem: Data_System;
declare var $dataMapInfos: Data_MapInfos;
declare var $dataMap: Data_Map;
declare var $gameTemp: Game_Temp;
declare var $gameSystem: Game_System;
declare var $gameScreen: Game_Screen;
declare var $gameTimer: Game_Timer;
declare var $gameMessage: Game_Message;
declare var $gameSwitches: Game_Switches;
declare var $gameVariables: Game_Variables;
declare var $gameSelfSwitches: Game_SelfSwitches;
declare var $gameActors: Game_Actors;
declare var $gameParty: Game_Party;
declare var $gameTroop: Game_Troop;
declare var $gameMap: Game_Map;
declare var $gamePlayer: Game_Player;
declare var $testEvent: null | Data_CommonEvent;

declare class DataManager {
  private constructor();

  static _globalId: "RPGMV";
  static _lastAccessedId: number;
  static _errorUrl: Maybe<String>;

  static _databaseFiles: DatabaseFile[];

  static loadDatabase(): void;

  static loadDataFile(name: string, src: string): void;

  static isDatabaseLoaded(): boolean;

  static loadMapData(mapId: number): void;
  static makeEmptyMap(): void;
  static isMapLoaded(): boolean;

  static onLoad(object: object | object[]): void;

  static extractMetadata(data: { note: string }): void;

  static checkError(): void;

  static isBattleTest(): boolean;
  static isEventTest(): boolean;

  static isSkill(item: Data_NormalItem): boolean;
  static isItem(item: Data_NormalItem): boolean;
  static isWeapon(item: Data_NormalItem): boolean;
  static isArmor(item: Data_NormalItem): boolean;

  static createGameObjects(): void;

  static setupNewGame(): void;
  static setupBattleTest(): void;
  static setupEventTest(): void;

  static loadGlobalInfo(): OneIndexedArray<GlobalInfo>;
  static saveGlobalInfo(info: OneIndexedArray<GlobalInfo>): void;

  static isThisGameFile(savefileId: number): boolean;
  static isAnySavefileExists(): boolean;
  static latestSavefileId(): number;

  static loadAllSavefileImages(): void;
  static loadSavefileImages(info: GlobalInfo): void;

  static maxSavefiles(): number;
  static saveGame(savefileId: number): boolean;
  static loadGame(savefileId: number): boolean;
  static loadSavefileInfo(savefileId: number): Maybe<GlobalInfo>;
  static lastAccessedSavefileId(): number;
  static saveGameWithoutRescue(savefileId: number): boolean;
  static loadGameWithoutRescue(savefileId: number): boolean;
  static selectSavefileForNewGame(): void;

  static makeSavefileInfo(): GlobalInfo;
  static makeSaveContents(): SaveData;
  static extractSaveContents(contents: SaveData): void;
}
