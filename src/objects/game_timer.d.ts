/**
 * The game object class for the timer.
 */
declare class Game_Timer {
  initialize(constructorParams: unknown[]): void;

  _frames: number;
  _working: boolean;

  update(sceneActive: boolean): void;
  start(count: number): void;
  stop(): void;
  isWorking(): boolean;
  seconds(): number;
  onExpire(): void;
}
