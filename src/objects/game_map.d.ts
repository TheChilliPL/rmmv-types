/**
 * The game object class for a map. It contains scrolling and passage
 * determination functions.
 */
declare class Game_Map {
  initialize(): void;

  _interpreter: Game_Interpreter;
  _mapId: number;
  _tilesetId: number;
  _events: Game_Event[];
  _commonEvents: Game_CommonEvent[];
  _vehicles: Game_Vehicle[];
  _displayX: number;
  _displayY: number;
  _nameDisplay: boolean;
  _scrollDirection: Dir4;
  _scrollRest: number;
  _scrollSpeed: number;
  _parallaxName: string;
  _parallaxZero: boolean;
  _parallaxLoopX: boolean;
  _parallaxLoopY: boolean;
  _parallaxSx: number;
  _parallaxSy: number;
  _parallaxX: number;
  _parallaxY: number;
  _battleback1Name: string;
  _battleback2Name: string;
  _needsRefresh: boolean;

  setup(mapId: number): void;

  isEventRunning(): boolean;

  tileWidth(): number;
  tileHeight(): number;
  mapId(): number;
  tilesetId(): number;
  displayX(): number;
  displayY(): number;
  parallaxName(): string;
  battleback1Name(): Maybe<string>;
  battleback2Name(): Maybe<string>;

  requestRefresh(mapId: number): void;
  isNameDisplayEnabled(): boolean;
  disableNameDisplay(): void;
  enableNameDisplay(): void;
  createVehicles(): void;
  /** Typo in the source code. Should be `refreshVehicles`. */
  refereshVehicles(): void;
  vehicles(): Game_Vehicle[];
  vehicle(type: Data_VehicleIdOrType): Game_Vehicle;
  boat(): Game_Vehicle;
  ship(): Game_Vehicle;
  airship(): Game_Vehicle;

  setupEvents(): void;
  events(): Game_Event[];
  event(eventId: number): Game_Event;
  eraseEvent(eventId: number): void;
  parallelCommonEvents(): Data_CommonEvent[];
  setupScroll(): void;
  setupParallax(): void;
  setupBattleback(): void;
  setDisplayPos(x: number, y: number): void;
  parallaxOx(): number;
  parallaxOy(): number;
  tileset(): Data_Tileset;
  tilesetFlags(): number[];

  displayName(): string;
  width(): number;
  height(): number;
  data(): number[];
  isLoopHorizontal(): boolean;
  isLoopVertical(): boolean;
  isDashDisabled(): boolean;
  encounterList(): Data_Encounter[];
  encounterStep(): number;
  isOverworld(): boolean;

  screenTileX(): number;
  screenTileY(): number;
  adjustX(x: number): number;
  adjustY(y: number): number;
  roundX(x: number): number;
  roundY(y: number): number;
  xWithDirection(x: number, d: Dir4): number;
  yWithDirection(y: number, d: Dir4): number;
  roundXWithDirection(x: number, d: Dir4): number;
  roundYWithDirection(y: number, d: Dir4): number;
  deltaX(x1: number, x2: number): number;
  deltaY(y1: number, y2: number): number;
  distance(x1: number, y1: number, x2: number, y2: number): number;
  canvasToMapX(x: number): number;
  canvasToMapY(y: number): number;

  autoplay(): void;

  refreshIfNeeded(): void;
  refresh(): void;
  refreshTileEvents(): void;

  eventsXy(x: number, y: number): Game_Event[];
  /** All events at XY coordinates, excluding Through events. */
  eventsXyNt(x: number, y: number): Game_Event[];
  tileEventsXy(x: number, y: number): Game_Event[];
  /**
   * @returns ID of the first event found at XY coordinates,
   * or 0 if none were found
   * */
  eventIdXy(x: number, y: number): number;

  scrollDown(distance: number): void;
  scrollLeft(distance: number): void;
  scrollRight(distance: number): void;
  scrollUp(distance: number): void;

  isValid(x: number, y: number): boolean;
  checkPassage(x: number, y: number, bit: TilesetDirectionFlags): boolean;

  tileId(x: number, y: number, z: number): number;
  layeredTiles(x: number, y: number): number[];
  allTiles(x: number, y: number): number[];
  autotileType(x: number, y: number, z: number): number;

  /**
   * Checks for the tile passage based on the tile flags:
   * - {@link TilesetFlags.PassableDown} for {@link Dir4.Down}
   * - {@link TilesetFlags.PassableLeft} for {@link Dir4.Left}
   * - {@link TilesetFlags.PassableRight} for {@link Dir4.Right}
   * - {@link TilesetFlags.PassableUp} for {@link Dir4.Up}
   */
  isPassable(x: number, y: number, d: Dir4): boolean;

  /**
   * Checks whether a boat can pass through the tile based on the tile flag
   * {@link TilesetFlags.BoatPassable}.
   */
  isBoatPassable(x: number, y: number): boolean;
  /**
   * Checks whether a ship can pass through the tile based on the tile flag
   * {@link TilesetFlags.ShipPassable}.
   */
  isShipPassable(x: number, y: number): boolean;
  /**
   * Checks whether an airship can land on the tile based on the tile flag
   * {@link TilesetFlags.AirshipLandOk}.
   */
  isAirshipLandOk(x: number, y: number): boolean;
  checkLayeredTilesFlags(x: number, y: number, bit: TilesetFlags): boolean;

  /**
   * Checks whether the tile is a ladder based on the tile flag
   * {@link TilesetFlags.Ladder}.
   */
  isLadder(x: number, y: number): boolean;
  /**
   * Checks whether the tile is a bush based on the tile flag
   * {@link TilesetFlags.Bush}.
   */
  isBush(x: number, y: number): boolean;
  /**
   * Checks whether the tile is a counter based on the tile flag
   * {@link TilesetFlags.Counter}.
   */
  isCounter(x: number, y: number): boolean;
  /**
   * Checks whether the tile is damage floor based on the tile flag
   * {@link TilesetFlags.DamageFloor}.
   */
  isDamageFloor(x: number, y: number): boolean;

  /**
   * Checks the tile's terrain tag based on the tile flags
   * {@link TilesetFlags.TerrainTag0} through {@link TilesetFlags.TerrainTag7 7}.
   */
  terrainTag(x: number, y: number): number;

  regionId(x: number, y: number): number;

  startScroll(direction: Dir4, distance: number, speed: number): void;
  isScrolling(): boolean;

  update(sceneActive: boolean): void;
  updateScroll(): void;
  scrollDistance(): number;
  doScroll(direction: Dir4, distance: number): void;
  updateEvents(): void;
  updateVehicles(): void;
  updateParallax(): void;

  changeTileset(tilesetId: number): void;
  changeBattleback(battleback1Name: string, battleback2Name: string): void;
  changeParallax(
    name: string,
    loopX: boolean,
    loopY: boolean,
    sx: number,
    sy: number,
  ): void;
  updateInterpreter(): void;

  unlockEvent(eventId: number): void;

  /**
   * @returns Whether the event was started.
   */
  setupStartingEvent(): boolean;
  /**
   * @returns Whether the event was started.
   */
  setupTestEvent(): boolean;
  /**
   * @returns Whether the event was started.
   */
  setupStartingMapEvent(): boolean;
  /**
   * @returns Whether the event was started.
   */
  setupAutorunCommonEvent(): boolean;
  /**
   * @returns Whether the event was started.
   */
  isAnyEventStarting(): boolean;
}
