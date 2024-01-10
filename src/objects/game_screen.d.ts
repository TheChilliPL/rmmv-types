declare type Tone = [
  red: number,
  green: number,
  blue: number,
  saturation: number,
];

/**
 * The game object class for screen effect data, such as changes in color tone
 * and flashes.
 */
declare class Game_Screen {
  initialize(): void;

  _brightness: number;
  _fadeOutDuration: number;
  _fadeInDuration: number;

  _tone: Tone;
  _toneTarget: Tone;
  _toneDuration: number;

  _flashColor: RGBAColor;
  _flashDuration: number;

  _shake: number;
  _shakePower: number;
  _shakeSpeed: number;
  _shakeDuration: number;
  _shakeDirection: -1 | 1;

  _zoomX: number;
  _zoomY: number;
  _zoomScale: number;
  _zoomScaleTarget: number;
  _zoomDuration: number;

  _weatherType: string;
  _weatherPower: number;
  _weatherPowerTarget: number;
  _weatherDuration: number;

  _pictures: OneIndexedArray<Game_Picture>;

  clear(): void;
  onBattleStart(): void;
  brightness(): number;
  tone(): Tone;

  flashColor(): RGBAColor;
  shake(): number;

  zoomX(): number;
  zoomY(): number;
  zoomScale(): number;

  weatherType(): string;
  weatherPower(): number;

  picture(pictureId: number): Game_Picture;
  realPictureId(pictureId: number): number;

  clearFade(): void;
  clearTone(): void;
  clearFlash(): void;
  clearShake(): void;
  clearZoom(): void;
  clearWeather(): void;
  clearPictures(): void;
  eraseBattlePictures(): void;
  maxPictures(): number;

  startFadeOut(duration: number): void;
  startFadeIn(duration: number): void;
  startTint(tone: Tone, duration: number): void;
  startFlash(color: RGBAColor, duration: number): void;
  startShake(power: number, speed: number, duration: number): void;
  startZoom(x: number, y: number, scale: number, duration: number): void;
  setZoom(x: number, y: number, scale: number): void;
  changeWeather(type: WeatherType, power: number, duration: number): void;

  update(): void;
  updateFadeOut(): void;
  updateFadeIn(): void;
  updateTone(): void;
  updateFlash(): void;
  updateShake(): void;
  updateZoom(): void;
  updateWeather(): void;
  updatePictures(): void;

  startFlashForDamage(): void;

  showPicture(
    pictureId: number,
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: PIXI.BlendMode,
  ): void;
  movePicture(
    pictureId: number,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: PIXI.BlendMode,
    duration: number,
  ): void;
  rotatePicture(pictureId: number, speed: number): void;
  tintPicture(pictureId: number, tone: Tone, duration: number): void;
  erasePicture(pictureId: number): void;
}
