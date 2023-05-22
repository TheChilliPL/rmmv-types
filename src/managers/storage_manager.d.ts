declare class StorageManager {
    private constructor();

    static save(savefileId: number, json: string): void;
    static load(savefileId: number): string;
    static exists(savefileId: number): boolean;
    static remove(savefileId: number): void;
    static backup(savefileId: number): void;
    static backupExists(savefileId: number): boolean;
    static cleanBackup(savefileId: number): void;
    static restoreBackup(savefileId: number): void;

    static isLocalMode(): boolean;

    static saveToLocalFile(savefileId: number, json: string): void;
    static loadFromLocalFile(savefileId: number): string;
    static loadFromLocalBackupFile(savefileId: number): string;
    static localFileBackupExists(savefileId: number): boolean;
    static localFileExists(savefileId: number): boolean;
    static removeLocalFile(savefileId: number): void;

    static saveToWebStorage(savefileId: number, json: string): void;
    static loadFromWebStorage(savefileId: number): string;
    static loadFromWebStorageBackup(savefileId: number): string;
    static webStorageBackupExists(savefileId: number): boolean;
    static webStorageExists(savefileId: number): boolean;
    static removeWebStorage(savefileId: number): void;

    static localFileDirectoryPath(): string;
    static localFilePath(savefileId: number): string;
    static webStorageKey(savefileId: number): string;
}
