declare interface Data_Map {
    autoplayBgm: boolean;
    autoplayBgs: boolean;
    battleback1Name: string;
    battleback2Name: string;
    bgm: AudioObject;
    bgs: AudioObject;
    disableDashing: boolean;
    displayName: string;
    encounterList: unknown[]; //TODO
    encounterStep: number;
    height: number;
    note: string;
    parallaxLoopX: boolean;
    parallaxLoopY: boolean;
    parallaxName: string;
    parallaxShow: boolean;
    parallaxSx: number;
    parallaxSy: number;
    scrollType: number;
    specifyBattleback: boolean;
    tilesetId: number;
    width: number;
    data: number[];
    events: OneIndexedArray<Data_Event>;
}
