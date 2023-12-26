declare class ImageManager {
  private constructor();

  static cache: CacheMap;
  static _imageCache: ImageCache;
  static _requestQueue: RequestQueue;
  static _systemReservationId: number;

  static _generateCacheKey(path: string, hue: number): string;

  static loadAnimation(filename: string, hue: number): Bitmap;
  static loadBattleback1(filename: string, hue: number): Bitmap;
  static loadBattleback2(filename: string, hue: number): Bitmap;
  static loadEnemy(filename: string, hue: number): Bitmap;
  static loadCharacter(filename: string, hue: number): Bitmap;
  static loadFace(filename: string, hue: number): Bitmap;
  static loadParallax(filename: string, hue: number): Bitmap;
  static loadPicture(filename: string, hue: number): Bitmap;
  static loadSvActor(filename: string, hue: number): Bitmap;
  static loadSvEnemy(filename: string, hue: number): Bitmap;
  static loadSystem(filename: string, hue: number): Bitmap;
  static loadTileset(filename: string, hue: number): Bitmap;
  static loadTitle1(filename: string, hue: number): Bitmap;
  static loadTitle2(filename: string, hue: number): Bitmap;

  static loadBitmap(
    folder: string,
    filename: string,
    hue: number,
    smooth: boolean,
  ): Bitmap;
  static loadEmptyBitmap(): Bitmap;
  static loadNormalBitmap(path: string, hue: number): Bitmap;

  static clear(): void;
  static isReady(): boolean;

  static isObjectCharacter(filename: string): boolean;
  static isBigCharacter(filename: string): boolean;
  static isZeroParallax(filename: string): boolean;

  static reserveAnimation(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveBattleback1(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveBattleback2(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveEnemy(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveCharacter(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveFace(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveParallax(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reservePicture(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveSvActor(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveSvEnemy(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveSystem(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveTileset(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveTitle1(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;
  static reserveTitle2(
    filename: string,
    hue: number,
    reservationId: number,
  ): Bitmap;

  static reserveBitmap(
    folder: string,
    filename: string,
    hue: number,
    smooth: boolean,
    reservationId: number,
  ): Bitmap;
  static reserveNormalBitmap(
    path: string,
    hue: number,
    reservationId: number,
  ): Bitmap;

  static releaseReservation(reservationId: number): void;
  static setDefaultReservationId(reservationId: number): void;

  static requestAnimation(filename: string, hue: number): Bitmap;
  static requestBattleback1(filename: string, hue: number): Bitmap;
  static requestBattleback2(filename: string, hue: number): Bitmap;
  static requestEnemy(filename: string, hue: number): Bitmap;
  static requestCharacter(filename: string, hue: number): Bitmap;
  static requestFace(filename: string, hue: number): Bitmap;
  static requestParallax(filename: string, hue: number): Bitmap;
  static requestPicture(filename: string, hue: number): Bitmap;
  static requestSvActor(filename: string, hue: number): Bitmap;
  static requestSvEnemy(filename: string, hue: number): Bitmap;
  static requestSystem(filename: string, hue: number): Bitmap;
  static requestTileset(filename: string, hue: number): Bitmap;
  static requestTitle1(filename: string, hue: number): Bitmap;
  static requestTitle2(filename: string, hue: number): Bitmap;

  static requestBitmap(
    folder: string,
    filename: string,
    hue: number,
    smooth: boolean,
  ): Bitmap;
  static requestNormalBitmap(path: string, hue: number): Bitmap;

  static update(): void;
  static clearRequest(): void;
}
