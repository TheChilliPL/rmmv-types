declare class ToneSprite extends PIXI.Container {
  initialize(...constructorParams: unknown[]): void;

  clear(): void;
  setTone(r: number, g: number, b: number, gray: number): void;
}
