declare class Sprite extends PIXI.Sprite {
  constructor(bitmap?: Bitmap);

  static voidFilter: PIXI.filters.VoidFilter;

  initialize(bitmap?: Bitmap): void;

  /**
   * Not sure whether that exists in {@link PIXI.Sprite}?
   * Seems to be undocumented…
   */
  z: number;

  _bitmap: Maybe<Bitmap>;
  _frame: Rectangle;
  _realFrame: Rectangle;
  _blendColor: RGBAColor;
  _colorTone: RGBAColor;
  _canvas: Maybe<HTMLCanvasElement>;
  _context: Maybe<CanvasRenderingContext2D>;
  _tintTexture: null;
  _isPicture: boolean;
  spriteId: number;
  opaque: boolean;

  static _counter: number;

  get bitmap(): Bitmap;
  set bitmap(value: Bitmap);
  override width: number;
  override height: number;
  get opacity(): number;
  set opacity(value: number);

  update(): void;
  move(x: number, y: number): void;

  setFrame(x: number, y: number, width: number, height: number): void;

  getBlendColor(): RGBAColor;
  setBlendColor(color: RGBAColor): void;

  getColorTone(): RGBAColor;
  setColorTone(color: RGBAColor): void;

  _onBitmapLoad(bitmapLoaded: Bitmap): void;

  _refresh(): void;

  _isInBitmapRect(x: number, y: number, w: number, h: number): boolean;

  _needsTint(): boolean;

  _createTinter(w: number, h: number): void;

  _executeTint(x: number, y: number, w: number, h: number): void;

  _renderCanvas_PIXI(renderer: PIXI.CanvasRenderer): void;
  _renderWebGL_PIXI(renderer: PIXI.WebGLRenderer): void;

  _speedUpCustomBlendModes(renderer: PIXI.WebGLRenderer): void;
}
