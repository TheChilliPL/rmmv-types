/**
 * The game object class for a picture.
 */
declare class Game_Picture {
  initialize(): void;

  _name: string;
  _origin: number;
  _x: number;
  _y: number;
  _scaleX: number;
  _scaleY: number;
  _opacity: number;
  _blendMode: PIXI.BLEND_MODES;
  _tone: Tone;
  _angle: number;

  _targetX: number;
  _targetY: number;
  _targetScaleX: number;
  _targetScaleY: number;
  _targetOpacity: number;
  _duration: number;
  _toneTarget: Tone;
  _toneDuration: number;
  _rotationSpeed: number;

  name(): string;
  origin(): number;
  x(): number;
  y(): number;
  scaleX(): number;
  scaleY(): number;
  opacity(): number;
  blendMode(): PIXI.BLEND_MODES;
  tone(): Tone;
  angle(): number;

  initBasic(): void;
  initTarget(): void;
  initTone(): void;
  initRotation(): void;

  show(
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: PIXI.BLEND_MODES,
  ): void;
  move(
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: PIXI.BLEND_MODES,
    duration: number,
  ): void;
  rotate(speed: number): void;
  tint(tone: Tone, duration: number): void;
  erase(): void;

  update(): void;
  updateMove(): void;
  updateTone(): void;
  updateRotation(): void;
}
