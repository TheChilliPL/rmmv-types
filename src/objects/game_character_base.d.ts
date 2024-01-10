/**
 * The superclass of Game_Character. It handles basic information, such as
 * coordinates and images, shared by all characters.
 */
declare class Game_CharacterBase {
  initialize(): void;

  _x: number;
  _y: number;
  _realX: number;
  _realY: number;
  _moveSpeed: number;
  _moveFrequency: number;
  _opacity: number;
  _blendMode: PIXI.BlendMode;
  _direction: Dir4;
  _pattern: number;
  _priorityType: Data_EventPriorityType;
  _tileId: number;
  _characterName: string;
  _characterIndex: number;
  _isObjectCharacter: boolean;
  _walkAnime: boolean;
  _stepAnime: boolean;
  _directionFix: boolean;
  _through: boolean;
  _transparent: boolean;
  _bushDepth: number;
  _animationId: number;
  _balloonId: number;
  _animationPlaying: boolean;
  _balloonPlaying: boolean;
  _animationCount: number;
  _stopCount: number;
  _jumpCount: number;
  _jumpPeak: number;
  _movementSuccess: boolean;

  pos(x: number, y: number): boolean;
  posNt(x: number, y: number): boolean;
  moveSpeed(): number;
  setMoveSpeed(moveSpeed: number): void;
  moveFrequency(): number;
  setMoveFrequency(moveFrequency: number): void;
  opacity(): number;
  setOpacity(opacity: number): void;
  blendMode(): PIXI.BlendMode;
  setBlendMode(blendMode: PIXI.BlendMode): void;
  isNormalPriority(): boolean;
  setPriorityType(priorityType: Data_EventPriorityType): void;

  isMoving(): boolean;
  isJumping(): boolean;
  jumpHeight(): number;
  isStopping(): boolean;
  checkStop(threshold: number): boolean;
  resetStopCount(): void;

  realMoveSpeed(): number;
  distancePerFrame(): number;
  isDashing(): boolean;

  isDebugThrough(): boolean;
  straighten(): void;

  reverseDir(d: Dir4): Dir4;

  canPass(x: number, y: number, d: Dir4): boolean;
  canPassDiagonally(x: number, y: number, horz: Dir4, vert: Dir4): boolean;
  isMapPassable(x: number, y: number, d: Dir4): boolean;
  isCollidedWithCharacters(x: number, y: number): boolean;
  isCollidedWithEvents(x: number, y: number): boolean;
  isCollidedWithVehicles(x: number, y: number): boolean;

  setPosition(x: number, y: number): void;
  copyPosition(character: Game_CharacterBase): void;
  locate(x: number, y: number): void;
  direction(): Dir4;
  setDirection(d: Dir4): void;

  isTile(): boolean;
  isObjectCharacter(): boolean;
  shiftY(): number;

  scrolledX(): number;
  scrolledY(): number;
  screenX(): number;
  screenY(): number;
  screenZ(): number;

  isNearTheScreen(): boolean;

  update(): void;
  updateStop(): void;
  updateJump(): void;
  updateMove(): void;
  updateAnimation(): void;
  animationWait(): number;
  updateAnimationCount(): void;
  updatePattern(): void;

  maxPattern(): number;
  pattern(): number;
  setPattern(pattern: number): void;
  isOriginalPattern(): boolean;
  resetPattern(): void;

  refreshBushDepth(): void;

  isOnLadder(): boolean;
  isOnBush(): boolean;
  terrainTag(): number;
  regionId(): number;

  increaseSteps(): void;

  tileId(): number;
  characterName(): string;
  characterIndex(): number;
  setImage(characterName: string, characterIndex: number): void;
  setTileImage(tileId: number): void;

  checkEventTriggerTouchFront(d: Dir4): void;
  checkEventTriggerTouch(x: number, y: number): boolean;

  isMovementSucceeded(x: number, y: number): boolean;
  setMovementSuccess(success: boolean): void;

  moveStraight(d: Dir4): void;
  moveDiagonally(horz: Dir4, vert: Dir4): void;

  jump(xPlus: number, yPlus: number): void;

  hasWalkAnime(): boolean;
  setWalkAnime(walkAnime: boolean): void;
  hasStepAnime(): boolean;
  setStepAnime(stepAnime: boolean): void;
  isDirectionFixed(): boolean;
  setDirectionFix(directionFix: boolean): void;
  isThrough(): boolean;
  setThrough(through: boolean): void;
  isTransparent(): boolean;
  bushDepth(): number;
  setTransparent(transparent: boolean): void;

  requestAnimation(animationId: number): void;
  requestBalloon(balloonId: number): void;
  animationId(): number;
  balloonId(): number;
  startAnimation(): void;
  startBalloon(): void;
  isAnimationPlaying(): boolean;
  isBalloonPlaying(): boolean;
  endAnimation(): void;
  endBalloon(): void;
}
