declare class WindowLayer extends PIXI.Container {
    initialize(): void;

    _width: number;
    _height: number;
    _tempCanvas: Maybe<HTMLCanvasElement>;
    _translationMatrix: Nine<number>;
    _windowMask: PIXI.Graphics;
    _renderSprite: Maybe<Sprite>;

    onRemoveAsAChild(): void;

    static voidFilter: PIXI.filters.VoidFilter;

    move(x: number, y: number, width: number, height: number): void;

    update(): void;

    _canvasClearWindowRect(renderer: PIXI.CanvasRenderer, window: Window): void;

    _maskWindow(window: Window, shift: Point): void;
}