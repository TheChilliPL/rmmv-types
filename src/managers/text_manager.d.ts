declare const enum BasicTerm {
  Level,
  LevelA,
  Hp,
  HpA,
  Mp,
  MpA,
  Tp,
  TpA,
  Exp,
  ExpA,
}

declare const enum CommandTerm {
  Fight,
  Escape,
  Attack,
  Guard,
  Item,
  Skill,
  Equip,
  Status,
  Formation,
  Save,
  GameEnd,
  Options,
  Weapon,
  Armor,
  KeyItem,
  Equip2,
  Optimize,
  Clear,
  NewGame,
  Continue,
  ToTitle = 21,
  Cancel,
  Buy = 24,
  Sell,
}

declare const enum MessageTerm {
  AlwaysDash = "alwaysDash",
  CommandRemember = "commandRemember",
  BgmVolume = "bgmVolume",
  BgsVolume = "bgsVolume",
  MeVolume = "meVolume",
  SeVolume = "seVolume",
  Possession = "possession",
  ExpTotal = "expTotal",
  ExpNext = "expNext",
  SaveMessage = "saveMessage",
  LoadMessage = "loadMessage",
  File = "file",
  PartyName = "partyName",
  /**
   * Displayed when the battle starts.
   *
   * May be followed by {@link Preemptive} or {@link Surprise}.
   */
  Emerge = "emerge",
  /**
   * Gets shown after {@link Emerge} if the battle is preemptive.
   *
   * @see BattleManager.ratePreemptive
   */
  Preemptive = "preemptive",
  /**
   * Gets shown after {@link Emerge} if the battle was a surprise for the player party.
   *
   * @see BattleManager.rateSurprise
   */
  Surprise = "surprise",
  /**
   * Gets shown after a successful escape attempt.
   *
   * %1: Game party name
   */
  EscapeStart = "escapeStart",
  /**
   * Gets shown after a failed escape attempt.
   *
   * %1: Game party name
   */
  EscapeFailure = "escapeFailure",
  /**
   * Gets shown after a won battle.
   *
   * %1: Game party name
   */
  Victory = "victory",
  /**
   * Gets shown after a lost battle.
   *
   * %1: Game party name
   */
  Defeat = "defeat",
  /**
   * Gets shown after a battle if the player party got any experience.
   *
   * %1: Gained experience<br>
   * %2: {@link BasicTerm.Exp Basic term for experience}
   */
  ObtainExp = "obtainExp",
  /**
   * Gets shown after a battle if the player party got any gold.
   *
   * %1: Amount of gold
   */
  ObtainGold = "obtainGold",
  /**
   * Gets shown after a battle for every item the player party received.
   *
   * %1: Item name
   */
  ObtainItem = "obtainItem",
  LevelUp = "levelUp",
  ObtainSkill = "obtainSkill",
  UseItem = "useItem",
  CriticalToEnemy = "criticalToEnemy",
  CriticalToActor = "criticalToActor",
  ActorDamage = "actorDamage",
  ActorRecovery = "actorRecovery",
  ActorGain = "actorGain",
  ActorLoss = "actorLoss",
  ActorDrain = "actorDrain",
  ActorNoDamage = "actorNoDamage",
  ActorNoHit = "actorNoHit",
  EnemyDamage = "enemyDamage",
  EnemyRecovery = "enemyRecovery",
  EnemyGain = "enemyGain",
  EnemyLoss = "enemyLoss",
  EnemyDrain = "enemyDrain",
  EnemyNoDamage = "enemyNoDamage",
  EnemyNoHit = "enemyNoHit",
  Evasion = "evasion",
  MagicEvasion = "magicEvasion",
  MagicReflection = "magicReflection",
  CounterAttack = "counterAttack",
  Substitute = "substitute",
  BuffAdd = "buffAdd",
  DebuffAdd = "debuffAdd",
  BuffRemove = "buffRemove",
  ActionFailure = "actionFailure",
}

declare class TextManager {
  private constructor();

  static basic(basicId: BasicTerm): string;
  static param(paramId: number): string; //TODO ParamTerm?
  static command(commandId: CommandTerm): string;
  static message(messageId: MessageTerm): string;

  static getter(
    method: "basic" | "param" | "command" | "message",
    param: number,
  ): { get: () => string; configurable: boolean };

  /** Gets the currency unit. */
  static get currencyUnit(): string;

  /** Gets the {@link BasicTerm.Level} string. */
  static get level(): string;
  /** Gets the {@link BasicTerm.LevelA} string. */
  static get levelA(): string;
  /** Gets the {@link BasicTerm.Hp} string. */
  static get hp(): string;
  /** Gets the {@link BasicTerm.HpA} string. */
  static get hpA(): string;
  /** Gets the {@link BasicTerm.Mp} string. */
  static get mp(): string;
  /** Gets the {@link BasicTerm.MpA} string. */
  static get mpA(): string;
  /** Gets the {@link BasicTerm.Tp} string. */
  static get tp(): string;
  /** Gets the {@link BasicTerm.TpA} string. */
  static get tpA(): string;
  /** Gets the {@link BasicTerm.Exp} string. */
  static get exp(): string;
  /** Gets the {@link BasicTerm.ExpA} string. */
  static get expA(): string;

  /** Gets the {@link CommandTerm.Fight} string. */
  static get fight(): string;
  /** Gets the {@link CommandTerm.Escape} string. */
  static get escape(): string;
  /** Gets the {@link CommandTerm.Attack} string. */
  static get attack(): string;
  /** Gets the {@link CommandTerm.Guard} string. */
  static get guard(): string;
  /** Gets the {@link CommandTerm.Item} string. */
  static get item(): string;
  /** Gets the {@link CommandTerm.Skill} string. */
  static get skill(): string;
  /** Gets the {@link CommandTerm.Equip} string. */
  static get equip(): string;
  /** Gets the {@link CommandTerm.Status} string. */
  static get status(): string;
  /** Gets the {@link CommandTerm.Formation} string. */
  static get formation(): string;
  /** Gets the {@link CommandTerm.Save} string. */
  static get save(): string;
  /** Gets the {@link CommandTerm.GameEnd} string. */
  static get gameEnd(): string;
  /** Gets the {@link CommandTerm.Options} string. */
  static get options(): string;
  /** Gets the {@link CommandTerm.Weapon} string. */
  static get weapon(): string;
  /** Gets the {@link CommandTerm.Armor} string. */
  static get armor(): string;
  /** Gets the {@link CommandTerm.KeyItem} string. */
  static get keyItem(): string;
  /** Gets the {@link CommandTerm.Equip2} string. */
  static get equip2(): string;
  /** Gets the {@link CommandTerm.Optimize} string. */
  static get optimize(): string;
  /** Gets the {@link CommandTerm.Clear} string. */
  static get clear(): string;
  /** Gets the {@link CommandTerm.NewGame} string. */
  static get newGame(): string;
  /** Gets the {@link CommandTerm.Continue} string. */
  static get continue(): string;
  /** Gets the {@link CommandTerm.ToTitle} string. */
  static get toTitle(): string;
  /** Gets the {@link CommandTerm.Cancel} string. */
  static get cancel(): string;
  /** Gets the {@link CommandTerm.Buy} string. */
  static get buy(): string;
  /** Gets the {@link CommandTerm.Sell} string. */
  static get sell(): string;

  /** Gets the {@link MessageTerm.AlwaysDash} string. */
  static get alwaysDash(): string;
  /** Gets the {@link MessageTerm.CommandRemember} string. */
  static get commandRemember(): string;
  /** Gets the {@link MessageTerm.BgmVolume} string. */
  static get bgmVolume(): string;
  /** Gets the {@link MessageTerm.BgsVolume} string. */
  static get bgsVolume(): string;
  /** Gets the {@link MessageTerm.MeVolume} string. */
  static get meVolume(): string;
  /** Gets the {@link MessageTerm.SeVolume} string. */
  static get seVolume(): string;
  /** Gets the {@link MessageTerm.Possession} string. */
  static get possession(): string;
  /** Gets the {@link MessageTerm.ExpTotal} string. */
  static get expTotal(): string;
  /** Gets the {@link MessageTerm.ExpNext} string. */
  static get expNext(): string;
  /** Gets the {@link MessageTerm.SaveMessage} string. */
  static get saveMessage(): string;
  /** Gets the {@link MessageTerm.LoadMessage} string. */
  static get loadMessage(): string;
  /** Gets the {@link MessageTerm.File} string. */
  static get file(): string;
  /** Gets the {@link MessageTerm.PartyName} string. */
  static get partyName(): string;
  /** Gets the {@link MessageTerm.Emerge} string. */
  static get emerge(): string;
  /** Gets the {@link MessageTerm.Preemptive} string. */
  static get preemptive(): string;
  /** Gets the {@link MessageTerm.Surprise} string. */
  static get surprise(): string;
  /** Gets the {@link MessageTerm.EscapeStart} string. */
  static get escapeStart(): string;
  /** Gets the {@link MessageTerm.EscapeFailure} string. */
  static get escapeFailure(): string;
  /** Gets the {@link MessageTerm.Victory} string. */
  static get victory(): string;
  /** Gets the {@link MessageTerm.Defeat} string. */
  static get defeat(): string;
  /** Gets the {@link MessageTerm.ObtainExp} string. */
  static get obtainExp(): string;
  /** Gets the {@link MessageTerm.ObtainGold} string. */
  static get obtainGold(): string;
  /** Gets the {@link MessageTerm.ObtainItem} string. */
  static get obtainItem(): string;
  /** Gets the {@link MessageTerm.LevelUp} string. */
  static get levelUp(): string;
  /** Gets the {@link MessageTerm.ObtainSkill} string. */
  static get obtainSkill(): string;
  /** Gets the {@link MessageTerm.UseItem} string. */
  static get useItem(): string;
  /** Gets the {@link MessageTerm.CriticalToEnemy} string. */
  static get criticalToEnemy(): string;
  /** Gets the {@link MessageTerm.CriticalToActor} string. */
  static get criticalToActor(): string;
  /** Gets the {@link MessageTerm.ActorDamage} string. */
  static get actorDamage(): string;
  /** Gets the {@link MessageTerm.ActorRecovery} string. */
  static get actorRecovery(): string;
  /** Gets the {@link MessageTerm.ActorGain} string. */
  static get actorGain(): string;
  /** Gets the {@link MessageTerm.ActorLoss} string. */
  static get actorLoss(): string;
  /** Gets the {@link MessageTerm.ActorDrain} string. */
  static get actorDrain(): string;
  /** Gets the {@link MessageTerm.ActorNoDamage} string. */
  static get actorNoDamage(): string;
  /** Gets the {@link MessageTerm.ActorNoHit} string. */
  static get actorNoHit(): string;
  /** Gets the {@link MessageTerm.EnemyDamage} string. */
  static get enemyDamage(): string;
  /** Gets the {@link MessageTerm.EnemyRecovery} string. */
  static get enemyRecovery(): string;
  /** Gets the {@link MessageTerm.EnemyGain} string. */
  static get enemyGain(): string;
  /** Gets the {@link MessageTerm.EnemyLoss} string. */
  static get enemyLoss(): string;
  /** Gets the {@link MessageTerm.EnemyDrain} string. */
  static get enemyDrain(): string;
  /** Gets the {@link MessageTerm.EnemyNoDamage} string. */
  static get enemyNoDamage(): string;
  /** Gets the {@link MessageTerm.EnemyNoHit} string. */
  static get enemyNoHit(): string;
  /** Gets the {@link MessageTerm.Evasion} string. */
  static get evasion(): string;
  /** Gets the {@link MessageTerm.MagicEvasion} string. */
  static get magicEvasion(): string;
  /** Gets the {@link MessageTerm.MagicReflection} string. */
  static get magicReflection(): string;
  /** Gets the {@link MessageTerm.CounterAttack} string. */
  static get counterAttack(): string;
  /** Gets the {@link MessageTerm.Substitute} string. */
  static get substitute(): string;
  /** Gets the {@link MessageTerm.BuffAdd} string. */
  static get buffAdd(): string;
  /** Gets the {@link MessageTerm.DebuffAdd} string. */
  static get debuffAdd(): string;
  /** Gets the {@link MessageTerm.BuffRemove} string. */
  static get buffRemove(): string;
  /** Gets the {@link MessageTerm.ActionFailure} string. */
  static get actionFailure(): string;
}
