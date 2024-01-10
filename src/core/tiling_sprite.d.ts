//TODO pixi-picture
declare class TilingSprite extends PIXI.extras.TilingSprite {
  constructor(bitmap: Bitmap);
  initialize(bitmap?: Bitmap): void;

  _bitmap: Maybe<Bitmap>;
  _width: number;
  _height: number;
  _frame: Rectangle;
  spriteId: number;
  origin: Point;
  bitmap: Bitmap;

  _renderCanvas_PIXI(renderer: PIXI.CanvasRenderer): void;
  _renderWebGL_PIXI(renderer: PIXI.WebGLRenderer): void;

  opacity: number;

  update(): void;

  move(x: number, y: number, width: number, height: number): void;

  setFrame(x: number, y: number, width: number, height: number): void;

  updateTransformTS(): void;

  _onBitmapLoad(): void;

  _refresh(): void;

  _speedUpCustomBlendModes(renderer: PIXI.WebGLRenderer): void;
}
