declare type SelfSwitchChar = "A" | "B" | "C" | "D";

declare type SelfSwitchKey = [
  mapId: number,
  eventId: number,
  selfSwitchChar: SelfSwitchChar,
];

/**
 * The game object class for self switches.
 */
declare class Game_SelfSwitches {
  initialize(): void;

  _data: Record<SelfSwitchKey, boolean>;

  clear(): void;
  value(key: SelfSwitchKey): boolean;
  setValue(key: SelfSwitchKey, value: boolean): void;
  onChange(): void;
}
