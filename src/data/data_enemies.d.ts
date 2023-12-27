declare type Data_Enemies = OneIndexedArray<Data_Enemy>;

declare interface Data_EnemyAction {
  conditionParam1: number;
  conditionParam2: number;
  conditionType: number;
  rating: number;
  skillId: number;
}

declare interface Data_DropItem {
  dataId: number;
  denominator: number;
  kind: number;
}

declare interface Data_Enemy {
  id: number;
  actions: Data_EnemyAction[];
  battlerHue: number;
  battlerName: string;
  dropItems: Data_DropItem[];
  exp: number;
  traits: Data_Trait[];
  gold: number;
  name: string;
  note: string;
  params: Data_BattlerParams;
}
