/**
 * The game object class for the player. It contains event starting
 * determinants and map scrolling functions.
 */
declare class Game_Player extends Game_Character {
  initialize(constructorParams: unknown[]): void;

  _vehicleType: Data_VehicleType | "walk";
  _vehicleGettingOn: boolean;
  _vehicleGettingOff: boolean;
  _dashing: boolean;
  _needsMapReload: boolean;
  _transferring: boolean;
  _newMapId: number;
  _newX: number;
  _newY: number;
  _newDirection: Dir4;
  _fadeType: Data_FadeType;
  _followers: Game_Followers;
  _encounterCount: number;

  override initMembers(): void;

  clearTransferInfo(): void;

  followers(): Game_Followers;

  refresh(): void;

  override isStopping(): boolean;

  reserveTransfer(
    mapId: number,
    x: number,
    y: number,
    d: Dir4,
    fadeType: Data_FadeType
  ): void;
  requestMapReload(): void;
  isTransferring(): boolean;
  newMapId(): number;
  fadeType(): Data_FadeType;
  performTransfer(): void;

  override isMapPassable(x: number, y: number, d: Dir4): boolean;

  vehicle(): Game_Vehicle;
  isInBoat(): boolean;
  isInShip(): boolean;
  isInAirship(): boolean;
  isInVehicle(): boolean;
  isNormal(): boolean;
  override isDashing(): boolean;
  override isDebugThrough(): boolean;
  isCollided(x: number, y: number): boolean;

  centerX(): number;
  centerY(): number;
  center(x: number, y: number): void;

  override locate(x: number, y: number): void;

  override increaseSteps(): void;
  makeEncounterCount(): void;
  makeEncounterTroopId(): number;
  meetsEncounterConditions(encounter: Data_Encounter): boolean;
  executeEncounter(): boolean;

  startMapEvent(
    x: number,
    y: number,
    triggers: Data_EventTrigger[],
    normal: boolean
  ): void;

  moveByInput(): void;
  canMove(): boolean;
  getInputDirection(): Dir4;
  executeMove(direction: Dir4): void;

  override update(sceneActive?: boolean): void;
  updateDashing(): void;
  isDashButtonPressed(): boolean;
  updateScroll(lastScrolledX: number, lastScrolledY: number): void;
  updateVehicle(): void;
  updateVehicleGetOn(): void;
  updateVehicleGetOff(): void;
  updateNonmoving(wasMoving: boolean): void;

  triggerAction(): boolean;
  triggerButtonAction(): boolean;
  triggerTouchAction(): boolean;

  /**
   * Triggers the touch action for player coordinates.
   *
   * By default:
   * - entering or leaving an airship,
   * - triggering event with {@link Data_EventTrigger.ActionButton} on the same tile as player.
   */
  triggerTouchActionD1(x1: number, y1: number): boolean;
  /**
   * Triggers the touch action in front of player.
   *
   * By default:
   * - entering or leaving a boat or a ship,
   * - triggering event with {@link Data_EventTrigger.ActionButton},
   *   {@link Data_EventTrigger.PlayerTouch} or {@link Data_EventTrigger.EventTouch}
   *   on the tile in front of player.
   */
  triggerTouchActionD2(x2: number, y2: number): boolean;
  /**
   * Triggers the touch action 2 tiles in front of player.
   *
   * By default:
   * - triggering event with {@link Data_EventTrigger.ActionButton},
   *   {@link Data_EventTrigger.PlayerTouch} or {@link Data_EventTrigger.EventTouch}
   *   placed on the counter, when player is facing it, and the tile beside it
   *   is tapped.
   *
   * @remarks
   * Note that despite being named "D3", the parameters used are for the second
   *   tile position. See {@link triggerTouchAction} implementation for details.
   */
  triggerTouchActionD3(x2: number, y2: number): boolean;

  updateEncounterCount(): void;
  canEncounter(): boolean;
  encounterProgressValue(): number;

  checkEventTriggerHere(triggers: Data_EventTrigger[]): void;
  checkEventTriggerThere(triggers: Data_EventTrigger[]): void;
  override checkEventTriggerTouch(x: number, y: number): boolean;

  canStartLocalEvents(): boolean;

  getOnOffVehicle(): boolean;
  getOnVehicle(): boolean;
  getOffVehicle(): boolean;

  forceMoveForward(): void;

  isOnDamageFloor(): boolean;

  override moveStraight(d: Dir4): void;
  override moveDiagonally(horz: Dir4, vert: Dir4): void;
  override jump(xPlus: number, yPlus: number): void;

  showFollowers(): void;
  hideFollowers(): void;
  gatherFollowers(): void;
  areFollowersGathering(): boolean;
  areFollowersGathered(): boolean;
}
