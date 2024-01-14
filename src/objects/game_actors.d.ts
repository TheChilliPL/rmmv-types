/**
 * The wrapper class for an actor array.
 *
 * @see Game_Actor
 */
declare class Game_Actors {
  initialize(...constructorParams: unknown[]): void;

  _data: OneIndexedArray<Maybe<Game_Actor>>;

  actor(actorId: number): Maybe<Game_Actor>;
}
