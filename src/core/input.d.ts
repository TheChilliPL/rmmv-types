declare type Key =
  | "ok"
  | "cancel"
  | "shift"
  | "menu"
  | "pageup"
  | "pagedown"
  | "up"
  | "down"
  | "left"
  | "right";

declare const enum Dir4 {
  None = 0,
  Up = 8,
  Right = 6,
  Down = 2,
  Left = 4,
}

declare const enum Diagonals {
  UpRight = 9,
  DownRight = 3,
  DownLeft = 1,
  UpLeft = 7,
}

declare type Dir8 = Dir4 | Diagonals;

declare type InputState = { [key in Key]?: boolean };

declare type GamepadState = boolean[];

declare class Input {
  private constructor();

  static initialize(): void;

  static keyRepeatWait: number;
  static keyRepeatInterval: number;
  static keyMapper: { [keyCode: number]: Key };
  static gamepadMapper: { [button: number]: Key };

  static clear(): void;

  static _currentState: InputState;
  static _previousState: InputState;
  static _gamepadStates: GamepadState[];
  static _latestButton: Maybe<Key>;
  static _pressedTime: number;
  static _dir4: Dir4;
  static _dir8: Dir8;

  static update(): void;

  static isPressed(key: Key): boolean;
  static isTriggered(key: Key): boolean;
  static isRepeated(key: Key): boolean;
  static isLongPressed(key: Key): boolean;

  static readonly dir4: Dir4;
  static readonly dir8: Dir8;
  static readonly date: number;

  static _wrapNwjsAlert(): void;

  static _setupEventHandlers(): void;
  static _onKeyDown(event: KeyboardEvent): void;
  static _shouldPreventDefault(keyCode: number): boolean;
  static _onKeyUp(event: KeyboardEvent): void;
  static _onLostFocus(event: FocusEvent): void;

  static _pollGamepads(): void;

  static _updateGamepadState(gamepad: Gamepad): void;

  static _updateDirection(): void;

  static _signX(): Sign;
  static _signY(): Sign;

  static _makeNumpadDirection(x: Sign, y: Sign): Dir8;

  static _isEscapeCompatible(key: Key): boolean;
}
