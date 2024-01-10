declare type AutotileTable = [number, number][][];

declare class Tilemap extends PIXI.Container {
  static TILE_ID_B: number;
  static TILE_ID_C: number;
  static TILE_ID_D: number;
  static TILE_ID_E: number;
  static TILE_ID_A5: number;
  static TILE_ID_A1: number;
  static TILE_ID_A2: number;
  static TILE_ID_A3: number;
  static TILE_ID_A4: number;
  static TILE_ID_MAX: number;

  static FLOOR_AUTOTILE_TABLE: AutotileTable;
  static WALL_AUTOTILE_TABLE: AutotileTable;
  static WATERFALL_AUTOTILE_TABLE: AutotileTable;

  initialize(constructorParams: unknown[]): void;

  _margin: number;
  _width: number;
  _height: number;
  _tileWidth: number;
  _tileHeight: number;
  _mapWidth: number;
  _mapHeight: number;
  _mapData: number[] | null;
  _layerWidth: number;
  _layerHeight: number;
  _lastTiles: number[][][][];

  bitmaps: [];
  origin: Point;
  flags: number[];
  animationCount: number;
  horizontalWrap: boolean;
  verticalWrap: boolean;

  tileWidth: number;
  tileHeight: number;

  setData(width: number, height: number, data: number[]): void;

  isReady(): boolean;
  update(): void;
  refresh(): void;
  refreshTileset(): void;

  _createLayers(): void;
  _updateLayerPositions(startX: number, startY: number): void;

  _paintAllTiles(startX: number, startY: number): void;
  _paintTiles(startX: number, startY: number, x: number, y: number): void;
  _readLastTiles(i: number, x: number, y: number): number[];
  _writeLastTiles(i: number, x: number, y: number, tiles: number[]): void;
  _drawTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
  _drawNormalTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
  _drawAutotile(bitmap: Bitmap, tileId: number, dx: Number, dy: Number): void;

  _drawTableEdge(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
  _drawShadow(bitmap: Bitmap, shadowBits: number, dx: Number, dy: Number): void;

  _readMapData(x: number, y: number, z: number): number;
  _isHigherTile(tileId: number): boolean;
  _isOverpassPosition(mx: number, my: number): boolean;

  _sortChildren(): void;
  _compareChildOrder(a: Sprite, b: Sprite): number;

  static isVisibleTile(tileId: number): boolean;
  static isAutotile(tileId: number): boolean;
  static getAutotileKind(tileId: number): number;
  static getAutotileShape(tileId: number): number;
  static makeAutotileId(kind: number, shape: number): number;
  static isSameKindTile(tileId1: number, tileId2: number): boolean;

  static isTileA1(tileId: number): boolean;
  static isTileA2(tileId: number): boolean;
  static isTileA3(tileId: number): boolean;
  static isTileA4(tileId: number): boolean;
  static isTileA5(tileId: number): boolean;
  static isWaterTile(tileId: number): boolean;
  static isWaterfallTile(tileId: number): boolean;
  static isGroundTile(tileId: number): boolean;
  static isShadowingTile(tileId: number): boolean;
  static isRoofTile(tileId: number): boolean;
  static isWallTopTile(tileId: number): boolean;
  static isWallSideTile(tileId: number): boolean;
  static isWallTile(tileId: number): boolean;
  static isFloorTypeAutotile(tileId: number): boolean;
  static isWallTypeAutotile(tileId: number): boolean;
  static isWaterfallTypeAutotile(typeId: number): boolean;
}
