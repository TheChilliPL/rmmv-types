/**
 * The game object class for an event. It contains functionality for event page
 * switching and running parallel process events.
 */
declare class Game_Event extends Game_Character {
  constructor(mapId: number, eventId: number);
  override initialize(mapId?: number, eventId?: number): void;

  _mapId: number;
  _eventId: number;
  _moveType: Data_EventMoveType;
  _trigger: Maybe<Data_EventTrigger>;
  _starting: boolean;
  _erased: boolean;
  _pageIndex: number;
  _originalPattern: number;
  _originalDirection: Dir4;
  _prelockDirection: Dir4;
  _locked: boolean;
  _interpreter: Maybe<Game_Interpreter>;

  override initMembers(): void;

  eventId(): number;
  event(): Data_Event;
  page(): Data_EventPage;
  list(): Data_Command[];

  override isCollidedWithCharacters(x: number, y: number): boolean;
  override isCollidedWithEvents(x: number, y: number): boolean;
  isCollidedWithPlayerCharacters(x: number, y: number): boolean;

  lock(): void;
  unlock(): void;

  override updateStop(): void;
  updateSelfMovement(): void;

  stopCountThreshold(): number;
  moveTypeRandom(): void;
  moveTypeTowardPlayer(): void;
  isNearThePlayer(): boolean;
  moveTypeCustom(): void;

  isStarting(): boolean;
  clearStartingFlag(): void;
  isTriggerIn(triggers: Data_EventTrigger[]): boolean;

  start(): void;

  erase(): void;

  refresh(): void;
  findProperPageIndex(): number;
  meetsConditions(page: Data_EventPage): boolean;

  setupPage(): void;
  clearPageSettings(): void;
  setupPageSettings(): void;

  override isOriginalPattern(): boolean;
  override resetPattern(): void;
  override checkEventTriggerTouch(x: number, y: number): void;
  override checkEventTriggerAuto(): void;

  update(): void;
  updateParallel(): void;

  override locate(x: number, y: number): void;
  override forceMoveRoute(moveRoute: Data_MoveRoute): void;
}
