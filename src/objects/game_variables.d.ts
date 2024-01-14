/**
 * The game object class for variables.
 */
declare class Game_Variables {
  initialize(...constructorParams: unknown[]): void;

  _data: OneIndexedArray<number>;

  clear(): void;
  value(variableId: number): number;
  setValue(variableId: number, value: number): void;
  onChange(): void;
}
