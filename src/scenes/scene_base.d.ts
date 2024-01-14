/**
 * The superclass of all scenes within the game.
 */
declare class Scene_Base extends Stage {
  initialize(...constructorParams: unknown[]): void;

  _active: boolean;
  _fadeSign: Sign;
  _fadeDuration: number;
  _fadeSprite: Maybe<Sprite>;
  _imageReservationId: number;
  _windowLayer?: WindowLayer;

  attachReservation(): void;
  detachReservation(): void;

  create(): void;
  isActive(): boolean;
  isReady(): boolean;

  start(): void;
  update(): void;
  stop(): void;
  isBusy(): boolean;
  terminate(): void;

  createWindowLayer(): void;
  addWindow(window: Window_Base): void;

  startFadeIn(duration: number, white: boolean): void;
  startFadeOut(duration: number, white: boolean): void;
  createFadeSprite(white: boolean): void;
  updateFade(): void;
  updateChildren(): void;

  popScene(): void;

  checkGameover(): void;
  fadeOutAll(): void;

  fadeSpeed(): number;
  slowFadeSpeed(): number;
}
