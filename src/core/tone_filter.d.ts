declare class ToneFilter extends PIXI.filters.ColorMatrixFilter {
  adjustHue(value: number): void;
  adjustSaturation(value: number): void;
  adjustTone(r: number, g: number, b: number): void;
}
