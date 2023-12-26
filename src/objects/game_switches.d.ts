declare class Game_Switches {
  initialize(): void;

  _data: OneIndexedArray<boolean>;

  clear(): void;
  value(switchId: number): boolean;
  setValue(switchId: number, value: boolean): void;
  onChange(): void;
}
