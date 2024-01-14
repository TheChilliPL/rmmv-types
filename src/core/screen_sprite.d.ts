declare class ScreenSprite extends PIXI.Container {
  initialize(...constructorParams: unknown[]): void;

  _graphics: PIXI.Graphics;
  opacity: number;

  _red: number;
  _green: number;
  _blue: number;
  _colorText: string;

  YEPWarned: boolean;
  warnYep(): void;

  /**
   * @remarks For any reason, the setter for this property sets {@link opacity} and not the anchor. It expects number instead of a point, however it's probably a bug.<br>Also, the getter always returns a pure <code>{ x: 0, y: 0 }</code> object. That's the reason the return type is not {@link Point}.
   */
  anchor: { x: number; y: number };

  blendMode: number;

  setBlack(): void;
  setWhite(): void;
  setColor(r: number, g: number, b: number): void;
}
