declare const enum Data_TraitType {
  ElementRate = 11,
  DebuffRate,
  StateRate,
  StateResist,
  Param = 21,
  XParam,
  SParam,
  AttackElement = 31,
  AttackState,
  AttackSpeed,
  AttackTimes,
  StypeAdd = 41,
  StypeSeal,
  SkillAdd,
  SkillSeal,
  EquipWtype = 51,
  EquipAtype,
  EquipLock,
  EquipSeal,
  SlotType,
  ActionPlus = 61,
  SpecialFlag,
  CollapseType,
  PartyAbility,
}

declare const enum Data_TraitFlag {
  AutoBattle,
  Guard,
  Substitute,
  PreserveTp,
}

declare interface Data_Trait {
  code: number;
  dataId: number;
  value: number;
}

declare interface Data_TraitObject {
  traits: Data_Trait[];
}
