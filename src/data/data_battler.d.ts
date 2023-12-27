declare const enum Data_BattlerEffectType {
  Whiten = "whiten",
  Blink = "blink",
  Collapse = "collapse",
  BossCollapse = "bossCollapse",
  InstantCollapse = "instantCollapse",
}

declare const enum Data_BattlerMotionType {
  Guard = "guard",
  Spell = "spell",
  Skill = "skill",
  Item = "item",

  Thrust = "thrust",
  Swing = "swing",
  Missile = "missile",

  Damage = "damage",
  Evade = "evade",
  Victory = "victory",
  Escape = "escape",
}

declare const enum Data_BattlerActionState {
  Undecided = "undecided",
  Inputting = "inputting",
  Waiting = "waiting",
  Acting = "acting",
  Done = "done",
}

declare type Data_BattlerParams = [
  /** Maximum hit points */
  mhp: number,
  /** Maximum magic points */
  mmp: number,
  /** Attack power */
  atk: number,
  /** Defense power */
  def: number,
  /** Magical attack power */
  mat: number,
  /** Magical defense power */
  mdf: number,
  /** Agility */
  agi: number,
  /** Luck */
  luk: number,
];

declare type Data_BattlerXParams = [
  /** Hit rate */
  hit: number,
  /** Evasion rate */
  eva: number,
  /** Critical rate */
  cri: number,
  /** Critical evasion rate */
  cev: number,
  /** Magic evasion rate */
  mev: number,
  /** Magic reflection rate */
  mrf: number,
  /** Counter attack rate */
  cnt: number,
  /** HP regeneration rate */
  hrg: number,
  /** MP regeneration rate */
  mrg: number,
  /** TP regeneration rate */
  trg: number,
];

declare type Data_BattlerSParams = [
  /** Target rate */
  tgr: number,
  /** Guard effect rate */
  grd: number,
  /** Recovery effect rate */
  rec: number,
  /** Pharmacology */
  pha: number,
  /** MP cost rate */
  mcr: number,
  /** TP charge rate */
  tcr: number,
  /** Physical damage rate */
  pdr: number,
  /** Magical damage rate */
  mdr: number,
  /** Floor damage rate */
  fdr: number,
  /** Experience rate */
  exr: number,
];
