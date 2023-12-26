declare const enum BitmapLoadingState {
  None = "none",
  Pending = "pending",
  Purged = "purged",
  Requesting = "requesting",
  RequestCompleted = "requestCompleted",
  Decrypting = "decrypting",
  DecryptCompleted = "decryptCompleted",
  Loaded = "loaded",
  Error = "error",
}

declare class Bitmap {
  constructor(width: number, height: number);

  _reuseImages: HTMLImageElement[];

  _createCanvas(width: number, height: number): void;

  __canvas?: HTMLCanvasElement;
  __context?: CanvasRenderingContext2D;

  _createBaseTexture(source: HTMLImageElement | HTMLCanvasElement): void;

  __baseTexture?: PIXI.BaseTexture;

  _clearImgInstance(): void;

  _errorListener?: Maybe<() => void>;
  _loadListener?: Maybe<() => void>;

  readonly _canvas: HTMLCanvasElement;
  readonly _context: CanvasRenderingContext2D;
  readonly _baseTexture: PIXI.BaseTexture;

  _renewCanvas(): void;

  initialize(width: number, height: number): void;

  _defer?: boolean;

  _image: Maybe<HTMLImageElement>;
  _url: string;
  _paintOpacity: number;
  _smooth: boolean;
  _loadListeners: ((bitmap: Bitmap) => void)[];
  _loadingState: BitmapLoadingState;
  _decodeAfterRequest: boolean;

  cacheEntry: Maybe<CacheEntry>;
  fontFace: string;
  fontSize: number;
  fontItalic: boolean;
  textColor: string;
  outlineColor: string;
  outlineWidth: number;

  static load(url: string): Bitmap;

  static snap(stage: Stage): Bitmap;

  isReady(): boolean;
  isError(): boolean;

  touch(): void;

  readonly url: string;

  readonly baseTexture: PIXI.BaseTexture;

  readonly canvas: HTMLCanvasElement;

  readonly context: CanvasRenderingContext2D;

  readonly width: number;
  readonly height: number;
  readonly rect: Rectangle;

  readonly smooth: boolean;

  readonly paintOpacity: number;

  resize(width: number, height: number): void;

  blt(
    source: Bitmap,
    sx: Number,
    sy: Number,
    sw: Number,
    sh: Number,
    dx: Number,
    dy: Number,
    dw: Number,
    dh: Number,
  ): void;

  bltImage(
    source: Bitmap,
    sx: Number,
    sy: Number,
    sw: Number,
    sh: Number,
    dx: Number,
    dy: Number,
    dw: Number,
    dh: Number,
  ): void;

  getPixel(x: number, y: number): String;

  /**
   * @remarks JSDoc defines the return type as {@link string}, but only returns {@link number}. Bug?
   */
  getAlphaPixel(x: number, y: number): number;

  clearRect(x: number, y: number, width: number, height: number): void;

  clear(): void;

  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
  ): void;

  fillAll(color: string): void;

  gradientFillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color1: string,
    color2: string,
    vertical: boolean,
  ): void;

  drawCircle(x: number, y: number, radius: number, color: string): void;

  drawText(
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    align: CanvasTextAlign,
  ): void;

  measureTextWidth(text: string): number;

  adjustTone(r: number, g: number, b: number): void;

  rotateHue(offset: number): void;

  blur(): void;

  addLoadListener(listener: (bitmap: Bitmap) => void): void;

  _makeFontNameText(): string;

  _drawTextOutline(
    text: string,
    tx: number,
    ty: number,
    maxWidth: number,
  ): void;

  _drawTextBody(text: string, tx: number, ty: number, maxWidth: number): void;

  _onLoad(): void;

  decode(): void;

  _callLoadListeners(): void;

  _onError(): void;

  _dirty?: boolean;
  _setDirty(): void;
  checkDirty(): void;

  static request(url: string): Bitmap;

  _requestImage(url: string): void;

  isRequestOnly(): boolean;
  isRequestReady(): boolean;

  startRequest(): void;
}
