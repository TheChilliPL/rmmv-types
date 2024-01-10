declare class Rectangle extends PIXI.Rectangle {
  constructor(x: number, y: number, width: number, height: number);

  initialize(x?: number, y?: number, width?: number, height?: number): void;

  static emptyRectangle: Rectangle;
}
