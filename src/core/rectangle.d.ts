declare class Rectangle extends PIXI.Rectangle {
  constructor(x: number, y: number, width: number, height: number);

  initialize(...constructorParams: unknown[]): void;

  static emptyRectangle: Rectangle;
}
