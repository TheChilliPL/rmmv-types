declare type SelfSwitchChar = "A" | "B" | "C" | "D";

declare type SelfSwitchKey = [
  mapId: number,
  eventId: number,
  selfSwitchChar: SelfSwitchChar,
];

declare type SelfSwitchKeyStr = `${number},${number},${SelfSwitchChar}`;

/**
 * The game object class for self switches.
 */
declare class Game_SelfSwitches {
  initialize(...constructorParams: unknown[]): void;

  _data: Record<SelfSwitchKeyStr, boolean>;

  clear(): void;
  value(key: SelfSwitchKey): boolean;
  setValue(key: SelfSwitchKey, value: boolean): void;
  onChange(): void;
}
