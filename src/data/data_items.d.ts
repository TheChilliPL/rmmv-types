declare type Data_Items = OneIndexedArray<Data_Item>;

declare const enum Data_DamageType {
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
  type: Data_DamageType;
  variance: number;
}

declare const enum Data_ItemEffectType {
  RecoverHP = 11,
  RecoverMP,
  GainTP,
  AddState = 21,
  RemoveState,
  AddBuff = 31,
  AddDebuff,
  RemoveBuff,
  RemoveDebuff,
  Special = 41,
  Grow,
  LearnSkill,
  CommonEvent,
  SpecialEscape = 0,
}

declare interface Data_ItemEffect {
  code: Data_ItemEffectType;
  dataId: number;
  value1: number;
  value2: number;
}

declare const enum Data_HitType {
  CertainHit,
  PhysicalAttack,
  MagicalAttack,
}

declare const enum Data_ItemType {
  Regular,
  Key,
  HiddenA,
  HiddenB,
}

declare const enum Data_ItemScope {
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

declare interface Data_ItemBase {
  id: number;
  description: string;
  iconIndex: number;
  name: string;
  note: string;
}

declare type Data_UsableItem = Data_Skill | Data_Item;
declare type Data_EquipItem = Data_Weapon | Data_Armor;

declare interface Data_Item extends Data_ItemBase {
  id: number;
  animationId: number;
  consumable: boolean;
  damage: Data_Damage;
  description: string;
  effects: Data_ItemEffect[];
  hitType: Data_HitType;
  iconIndex: number;
  itypeId: Data_ItemType;
  name: string;
  note: string;
  occasion: number;
  price: number;
  repeats: number;
  scope: Data_ItemScope;
  speed: number;
  successRate: number;
  tpGain: number;
}
