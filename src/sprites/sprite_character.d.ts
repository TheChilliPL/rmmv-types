/**
 * The sprite for displaying a character.
 */
declare class Sprite_Character extends Sprite_Base {
  override initialize(constructorParams: unknown[]): void;

  _character: Game_Character;
  _balloonDuration: number;
  _tilesetId: number;
  _upperBody: Sprite;
  _lowerBody: Sprite;

  initMembers(): void;
  setCharacter(character: Game_Character): void;

  override update(): void;
  override updateVisibility(): void;

  isTile(): boolean;
  tilesetBitmap(tileId: number): Bitmap;
  updateBitmap(): void;
  isImageChanged(): boolean;
  setTileBitmap(): void;
  setCharacterBitmap(): void;

  updateFrame(): void;
  updateTileFrame(): void;
  updateCharacterFrame(): void;

  characterBlockX(): number;
  characterBlockY(): number;
  characterPatternX(): number;
  characterPatternY(): number;
  patternWidth(): number;
  patternHeight(): number;

  updateHalfBodySprites(): void;
  createHalfBodySprites(): void;

  updatePosition(): void;
  updateAnimation(): void;
  updateOther(): void;

  setupAnimation(): void;

  setupBalloon(): void;
  startBalloon(): void;
  updateBalloon(): void;
  endBalloon(): void;
  isBalloonPlaying(): boolean;
}
