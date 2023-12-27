declare type Data_States = OneIndexedArray<Data_State>;

declare interface Data_State {
  id: number;
  autoRemovalTiming: number;
  chanceByDamage: number;
  iconIndex: number;
  maxTurns: number;
  /** Message displayed when an actor is inflicted with the state. */
  message1: string;
  /** Message displayed when an enemy is inflicted with the state. */
  message2: string;
  /** Message displayed if the state persists. */
  message3: string;
  /** Message displayed when the state is removed. */
  message4: string;
  minTurns: number;
  motion: number; //TODO
  name: string;
  note: string;
  overlay: number; //TODO
  priority: number;
  releaseByDamage: boolean;
  removeAtBattleEnd: boolean;
  removeByDamage: boolean;
  removeByRestriction: boolean;
  removeByWalking: boolean;
  restriction: number; //TODO
  stepsToRemove: number;
  traits: Data_Trait[];
}
