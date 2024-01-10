declare class Window extends PIXI.Container {
  initialize(constructorParams: unknown[]): void;

  _isWindow: true;
  _windowskin: Maybe<Bitmap>;
  _width: number;
  _height: number;
  _cursorRect: Rectangle;
  _openness: number;
  _animationCount: number;

  _padding: number;
  _margin: number;
  _colorTone: RGBColor;

  _windowSpriteContainer: null;
  _windowBackSprite: null;
  _windowCursorSprite: null;
  _windowFrameSprite: null;
  _windowContentsSprite: null;
  _windowArrowSprites: [];
  _windowPauseSignSprite: null;

  origin: Point;
  active: boolean;
  downArrowVisible: boolean;
  upArrowVisible: boolean;
  pause: boolean;

  windowskin: Bitmap;
  contents: Bitmap;
  padding: number;
  margin: number;
  opacity: number;
  backOpacity: number;
  contentsOpacity: number;
  openness: number;

  update(): void;

  move(x: number, y: number, width: number, height: number): void;

  isOpen(): boolean;

  isClosed(): boolean;

  setCursorRect(x: number, y: number, width: number, height: number): void;

  setTone(r: number, g: number, b: number): void;

  addChildToBack<T extends PIXI.DisplayObject>(child: T): T;

  updateTransform(): void;

  _createAllParts(): void;

  _onWindowskinLoad(): void;

  _refreshAllParts(): void;
  _refreshBack(): void;
  _refreshFrame(): void;
  _refreshCursor(): void;
  _refreshContents(): void;
  _refreshArrows(): void;
  _refreshPauseSign(): void;
  _updateCursor(): void;
  _updateContents(): void;
  _updateArrows(): void;
  _updatePauseSign(): void;
}
