/**
 * The game object class for switches.
 */
declare class Game_Switches {
  initialize(...constructorParams: unknown[]): void;

  _data: OneIndexedArray<boolean>;

  clear(): void;
  value(switchId: number): boolean;
  setValue(switchId: number, value: boolean): void;
  onChange(): void;
}
