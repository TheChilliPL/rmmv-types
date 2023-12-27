/**
 * The game object class for a common event. It contains functionality for
 * running parallel process events.
 */
declare class Game_CommonEvent {
  initialize(commonEventId: number): void;

  _commonEventId: number;

  event(): Data_CommonEvent;
  list(): Data_Command[];
  refresh(): void;
  isActive(): boolean;
  update(): void;
}
