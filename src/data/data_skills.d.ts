declare type Data_Skills = OneIndexedArray<Data_Skill>;

declare interface Data_Skill extends Data_ItemBase {
  id: number;
  animationId: number;
  damage: Data_Damage;
  description: string;
  effects: Data_Effect[];
  hitType: number;
  iconIndex: number;
  message1: string;
  message2: string;
  mpCost: number;
  name: string;
  note: string;
  occasion: number;
  repeats: number;
  requiredWtypeId1: number;
  requiredWtypeId2: number;
  scope: Data_ItemScope;
  speed: number;
  stypeId: number;
  successRate: number;
  tpCost: number;
  tpGain: number;
}
