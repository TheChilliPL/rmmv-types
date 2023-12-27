/**
 * The game object class for a vehicle.
 */
declare class Game_Vehicle extends Game_Character {
  override initialize(type: Data_VehicleType): void;

  _type: Data_VehicleType;

  override initMembers(): void;

  isBoat(): boolean;
  isShip(): boolean;
  isAirship(): boolean;

  resetDirection(): void;
  initMoveSpeed(): void;

  vehicle(): Data_Vehicle;

  loadSystemSettings(): void;

  refresh(): void;
  setLocation(mapId: number, x: number, y: number): void;
  override pos(x: number, y: number): boolean;
  override isMapPassable(x: number, y: number, d: Dir4): boolean;

  getOn(): void;
  getOff(): void;
  setBgm(bgm: Data_BGM): void;
  playBgm(): void;

  syncWithPlayer(): void;

  override screenY(): number;
  shadowX(): number;
  shadowY(): number;
  shadowOpacity(): number;

  canMove(): boolean;

  override update(): void;
  updateAirship(): void;
  updateAirshipAltitude(): void;
  maxAltitude(): number;
  isLowest(): boolean;
  isHighest(): boolean;

  isTakeoffOk(): boolean;
  isLandOk(x: number, y: number, d: Dir4): boolean;
}
