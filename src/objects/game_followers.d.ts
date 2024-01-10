/**
 * The wrapper class for a follower array.
 */
declare class Game_Followers {
  initialize(constructorParams: unknown[]): void;

  _visible: boolean;
  _gathering: boolean;
  _data: Game_Follower[];

  isVisible(): boolean;
  show(): void;
  hide(): void;
  follower(index: number): Game_Follower;

  forEach<T>(
    callback: (this: T, follower: Game_Follower) => void,
    thisObject?: T,
  ): void;
  reverseEach<T>(
    callback: (this: T, follower: Game_Follower) => void,
    thisObject?: T,
  ): void;

  refresh(): void;

  update(): void;
  updateMove(): void;

  jumpAll(): void;
  synchronize(x: number, y: number, d: number): void;
  gather(): void;
  areGathering(): boolean;
  visibleFollowers(): Game_Follower[];
  areMoving(): boolean;
  areGathered(): boolean;
  isSomeoneCollided(x: number, y: number): boolean;
}
