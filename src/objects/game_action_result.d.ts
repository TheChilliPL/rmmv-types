/**
 * The game object class for a result of a battle action. For convinience, all
 * member variables in this class are public.
 *
 * @see Game_Action
 */
declare class Game_ActionResult {
  initialize(): void;

  used: boolean;
  missed: boolean;
  evaded: boolean;
  physical: boolean;
  drain: boolean;
  critical: boolean;
  success: boolean;
  hpAffected: boolean;
  hpDamage: number;
  mpDamage: number;
  tpDamage: number;
  addedStates: number[];
  removedStates: number[];
  addedBuffs: number[];
  addedDebuffs: number[];
  removedBuffs: number[];

  clear(): void;

  addedStateObjects(): Data_State[];
  removedStateObjects(): Data_State[];
  isStatusAffected(): boolean;
  isHit(): boolean;
  isStateAdded(stateId: number): boolean;
  pushAddedState(stateId: number): void;
  isStateRemoved(stateId: number): boolean;
  pushRemovedState(stateId: number): void;
  isBuffAdded(paramId: number): boolean;
  pushAddedBuff(paramId: number): void;
  isDebuffAdded(paramId: number): boolean;
  pushAddedDebuff(paramId: number): void;
  isBuffRemoved(paramId: number): boolean;
  pushRemovedBuff(paramId: number): void;
}
