declare const enum TraitType {
  ElementRate = 11,
  DebuffRate,
  StateRate,
  StateResist,
  Param = 21,
  Xparam,
  Sparam,
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

declare const enum TraitFlag {
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
