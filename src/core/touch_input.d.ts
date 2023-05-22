declare class TouchInput {
    private constructor();

    static initialize(): void;

    static keyRepeatWait: number;
    static keyRepeatInterval: number;

    static clear(): void;

    static _mousePressed: boolean;
    static _screenPressed: boolean;
    static _pressedTime: number;
    static _events: {
        triggered: boolean,
        cancelled: boolean,
        moved: boolean,
        wheelX: number,
        wheelY: number
    };
    static _triggered: boolean;
    static _cancelled: boolean;
    static _moved: boolean;
    static _released: boolean;
    static _wheelX: number;
    static _wheelY: number;
    static _x: boolean;
    static _y: boolean;
    static _date: number;

    static update(): void;

    static isPressed(): boolean;
    static isTriggered(): boolean;
    static isRepeated(): boolean;
    static isLongPressed(): boolean;
    static isCancelled(): boolean;
    static isMoved(): boolean;
    static isReleased(): boolean;

    static readonly wheelX: number;
    static readonly wheelY: number;
    static readonly x: number;
    static readonly y: number;
    static readonly date: number;

    static _setupEventHandlers(): void;
    static _onMouseDown(event: MouseEvent): void;
    static _onLeftButtonDown(event: MouseEvent): void;
    static _onMiddleButtonDown(event: MouseEvent): void;
    static _onRightButtonDown(event: MouseEvent): void;
    static _onMouseMove(event: MouseEvent): void;
    static _onMouseUp(event: MouseEvent): void;
    static _onWheel(event: WheelEvent): void;
    static _onTouchStart(event: TouchEvent): void;
    static _onTouchMove(event: TouchEvent): void;
    static _onTouchEnd(event: TouchEvent): void;
    static _onTouchCancel(event: TouchEvent): void;
    static _onPointerDown(event: PointerEvent): void;
    static _onTrigger(x: number, y: number): void;
    static _onCancel(x: number, y: number): void;
    static _onMove(x: number, y: number): void;
    static _onRelease(x: number, y: number): void;
}