declare type Data_States = OneIndexedArray<Data_State>;

declare const enum Data_StateMotion {
  Normal,
  Abnormal,
  Sleep,
  Dead,
}

declare const enum Data_StateOverlay {
  None,
  Poison,
  Blind,
  Silence,
  Rage,
  Confusion,
  Fascination,
  Sleep,
  Paralyze,
  Curse,
  Fear,
}

declare const enum Data_StateRestriction {
  None,
  AttackAnEnemy,
  AttackAnyone,
  AttackAnAlly,
  CannotMove,
}

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
  motion: Data_StateMotion;
  name: string;
  note: string;
  overlay: Data_StateOverlay;
  priority: number;
  releaseByDamage: boolean;
  removeAtBattleEnd: boolean;
  removeByDamage: boolean;
  removeByRestriction: boolean;
  removeByWalking: boolean;
  restriction: Data_StateRestriction;
  stepsToRemove: number;
  traits: Data_Trait[];
}
