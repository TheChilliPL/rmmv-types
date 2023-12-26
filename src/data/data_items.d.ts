declare type Data_Items = OneIndexedArray<Data_NormalItem>;

declare const enum DamageType {
  HPDamage,
  MPDamage,
  HPRecover,
  MPRecover,
  HPDrain,
  MPDrain,
}

declare interface Data_Damage {
  critical: boolean;
  elementId: number;
  formula: string;
  type: DamageType;
  variance: number;
}

declare interface Data_Effect {
  code: number; // Game_Action.EFFECT_*
  dataId: number;
  value1: number;
  value2: number;
}

declare const enum Data_ItemType {
  Regular,
  Key,
  HiddenA,
  HiddenB,
}

declare const enum ItemScope {
  None,
  OneEnemy,
  AllEnemies,
  OneRandomEnemy,
  TwoRandomEnemies,
  ThreeRandomEnemies,
  FourRandomEnemies,
  OneAlly,
  AllAllies,
  OneDeadAlly,
  AllDeadAllies,
  User,
}

declare interface Data_Item {
  id: number;
  description: string;
  iconIndex: number;
  name: string;
  note: string;
}

declare type Data_UsableItem = Data_Skill | Data_NormalItem;
declare type Data_EquipItem = Data_Weapon | Data_Armor;

declare interface Data_NormalItem extends Data_Item {
  id: number;
  animationId: number;
  consumable: boolean;
  damage: Data_Damage;
  description: string;
  effects: Data_Effect[];
  hitType: number;
  iconIndex: number;
  itypeId: Data_ItemType;
  name: string;
  note: string;
  occasion: number;
  price: number;
  repeats: number;
  scope: ItemScope;
  speed: number;
  successRate: number;
  tpGain: number;
}
