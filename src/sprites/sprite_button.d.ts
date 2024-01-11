/**
 * The sprite for displaying a button.
 */
declare class Sprite_Button extends Sprite {
  initialize(constructorParams: unknown[]): void;

  _touching: boolean;
  _coldFrame: Rectangle;
  _hotFrame: Rectangle;
  _clickHandler: () => void;

  override update(): void;
  updateFrame(): void;

  setColdFrame(x: number, y: number, width: number, height: number): void;
  setHotFrame(x: number, y: number, width: number, height: number): void;

  setClickHandler(method: () => void): void;
  callClickHandler(): void;

  processTouch(): void;

  isActive(): boolean;
  isButtonTouched(): boolean;

  canvasToLocalX(x: number): number;
  canvasToLocalY(y: number): number;
}
