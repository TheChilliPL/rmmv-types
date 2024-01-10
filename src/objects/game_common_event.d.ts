/**
 * The game object class for a common event. It contains functionality for
 * running parallel process events.
 */
declare class Game_CommonEvent {
  constructor(commonEventId: number);
  initialize(constructorParams: unknown[]): void;

  _commonEventId: number;

  event(): Data_CommonEvent;
  list(): Data_Command[];
  refresh(): void;
  isActive(): boolean;
  update(): void;
}
