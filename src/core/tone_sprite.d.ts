declare class ToneSprite extends PIXI.Container {
  initialize(): void;

  clear(): void;
  setTone(r: number, g: number, b: number, gray: number): void;
}
