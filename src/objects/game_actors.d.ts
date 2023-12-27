/**
 * The wrapper class for an actor array.
 */
declare class Game_Actors {
  initialize(): void;

  _data: OneIndexedArray<Maybe<Game_Actor>>;

  actor(actorId: number): Maybe<Game_Actor>;
}
