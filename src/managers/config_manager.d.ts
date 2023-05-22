declare interface ConfigData {
    alwaysDash: boolean;
    commandRemember: boolean;
    bgmVolume: number;
    bgsVolume: number;
    meVolume: number;
    seVolume: number;
}

declare class ConfigManager {
    private constructor();

    static alwaysDash: boolean;
    static commandRemember: boolean;

    static bgmVolume: number;
    static bgsVolume: number;
    static meVolume: number;
    static seVolume: number;

    static load(): void;
    static save(): void;

    static makeData(): ConfigData;
    static applyData(config: ConfigData): void;

    static readFlag(config: ConfigData, name: string): boolean;
    static readVolume(config: ConfigData, name: string): number;
}