declare class Game_Timer {
    initialize(): void;

    _frames: number;
    _working: boolean;

    update(sceneActive: boolean): void;
    start(count: number): void;
    stop(): void;
    isWorking(): boolean;
    seconds(): number;
    onExpire(): void;
}
