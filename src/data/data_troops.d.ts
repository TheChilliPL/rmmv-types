declare type Data_Troops = OneIndexedArray<Data_Troop>;

declare interface Data_TroopMember {
  enemyId: number;
  x: number;
  y: number;
  hidden: boolean;
}

declare interface Data_TroopPageConditions {
  actorHp: number;
  actorId: number;
  actorValid: boolean;
  enemyHp: number;
  enemyIndex: number;
  enemyValid: boolean;
  switchId: number;
  switchValid: boolean;
  turnA: number;
  turnB: number;
  turnEnding: boolean;
  turnValid: boolean;
}

declare interface Data_TroopPage {
  conditions: Data_TroopPageConditions;
  list: Data_Command[];
  span: number;
}

declare interface Data_Troop {
  id: number;
  members: Data_TroopMember[];
  name: string;
  pages: Data_TroopPage[];
}
