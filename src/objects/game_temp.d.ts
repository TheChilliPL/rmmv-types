/**
 * The game object class for temporary data that is not included in save data.
 */
declare class Game_Temp {
  initialize(): void;

  _isPlaytest: boolean;
  _commonEventId: number;
  _destinationX: Maybe<number>;
  _destinationY: Maybe<number>;

  isPlaytest(): boolean;

  reserveCommonEvent(commonEventId: number): void;
  clearCommonEvent(): void;
  isCommonEventReserved(): boolean;
  reservedCommonEvent(): Data_CommonEvent;
  setDestination(x: number, y: number): void;
  clearDestination(): void;
  isDestinationValid(): boolean;
  destinationX(): number;
  destinationY(): number;
}
