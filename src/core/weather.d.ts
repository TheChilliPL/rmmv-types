declare const enum WeatherType {
  None = "none",
  Rain = "rain",
  Storm = "storm",
  Snow = "snow",
}

declare class Weather extends PIXI.Container {
  initialize(constructorParams: unknown[]): void;

  _width: number;
  _height: number;
  _sprites: Sprite[];

  type: WeatherType;

  power: number;

  origin: Point;

  update(): void;

  _createBitmaps(): void;
  _createDimmer(): void;
  _updateDimmer(): void;
  _updateAllSprites(): void;
  _addSprite(): void;
  _removeSprite(): void;
  _updateSprite(sprite: Sprite): void;
  _updateRainSprite(sprite: Sprite): void;
  _updateStormSprite(sprite: Sprite): void;
  _updateSnowSprite(sprite: Sprite): void;
  _rebornSprite(sprite: Sprite): void;
}
