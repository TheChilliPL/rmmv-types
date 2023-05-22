declare interface DatabaseFile {
    name: string;
    src: string;
}

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

declare class DataManager {
    private constructor();

    //TODO Lines 14–42 ($-globals)

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

    static isSkill(item: Item): boolean;
    static isItem(item: Item): boolean;
    static isWeapon(item: Item): boolean;
    static isArmor(item: Item): boolean;

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
