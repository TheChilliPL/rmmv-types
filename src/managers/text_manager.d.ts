declare const enum BasicTerm {
    Level, LevelA,
    Hp, HpA,
    Mp, MpA,
    Tp, TpA,
    Exp, ExpA
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
    Sell
}

declare const enum MessageTerm {
    AlwaysDash      = "alwaysDash",
    CommandRemember = "commandRemember",
    BgmVolume       = "bgmVolume",
    BgsVolume       = "bgsVolume",
    MeVolume        = "meVolume",
    SeVolume        = "seVolume",
    Possession      = "possession",
    ExpTotal        = "expTotal",
    ExpNext         = "expNext",
    SaveMessage     = "saveMessage",
    LoadMessage     = "loadMessage",
    File            = "file",
    PartyName       = "partyName",
    /**
     * Displayed when the battle starts.
     *
     * May be followed by {@link Preemptive} or {@link Surprise}.
     */
    Emerge          = "emerge",
    /**
     * Gets shown after {@link Emerge} if the battle is preemptive.
     *
     * @see BattleManager.ratePreemptive
     */
    Preemptive      = "preemptive",
    /**
     * Gets shown after {@link Emerge} if the battle was a surprise for the player party.
     *
     * @see BattleManager.rateSurprise
     */
    Surprise        = "surprise",
    /**
     * Gets shown after a successful escape attempt.
     *
     * %1: Game party name
     */
    EscapeStart     = "escapeStart",
    /**
     * Gets shown after a failed escape attempt.
     *
     * %1: Game party name
     */
    EscapeFailure   = "escapeFailure",
    /**
     * Gets shown after a won battle.
     *
     * %1: Game party name
     */
    Victory         = "victory",
    /**
     * Gets shown after a lost battle.
     *
     * %1: Game party name
     */
    Defeat          = "defeat",
    /**
     * Gets shown after a battle if the player party got any experience.
     *
     * %1: Gained experience<br>
     * %2: {@link BasicTerm.Exp Basic term for experience}
     */
    ObtainExp       = "obtainExp",
    /**
     * Gets shown after a battle if the player party got any gold.
     *
     * %1: Amount of gold
     */
    ObtainGold      = "obtainGold",
    /**
     * Gets shown after a battle for every item the player party received.
     *
     * %1: Item name
     */
    ObtainItem      = "obtainItem",
    LevelUp         = "levelUp",
    ObtainSkill     = "obtainSkill",
    UseItem         = "useItem",
    CriticalToEnemy = "criticalToEnemy",
    CriticalToActor = "criticalToActor",
    ActorDamage     = "actorDamage",
    ActorRecovery   = "actorRecovery",
    ActorGain       = "actorGain",
    ActorLoss       = "actorLoss",
    ActorDrain      = "actorDrain",
    ActorNoDamage   = "actorNoDamage",
    ActorNoHit      = "actorNoHit",
    EnemyDamage     = "enemyDamage",
    EnemyRecovery   = "enemyRecovery",
    EnemyGain       = "enemyGain",
    EnemyLoss       = "enemyLoss",
    EnemyDrain      = "enemyDrain",
    EnemyNoDamage   = "enemyNoDamage",
    EnemyNoHit      = "enemyNoHit",
    Evasion         = "evasion",
    MagicEvasion    = "magicEvasion",
    MagicReflection = "magicReflection",
    CounterAttack   = "counterAttack",
    Substitute      = "substitute",
    BuffAdd         = "buffAdd",
    DebuffAdd       = "debuffAdd",
    BuffRemove      = "buffRemove",
    ActionFailure   = "actionFailure"
}

declare class TextManager {
    private constructor();

    static basic(basicId: BasicTerm): string;
    static param(paramId: number): string; //TODO ParamTerm?
    static command(commandId: CommandTerm): string;
    static message(messageId: MessageTerm): string;

    static getter(method: "basic" | "param" | "command" | "message", param: number): { get: () => string, configurable: boolean };

    /** Gets the currency unit. */
    static readonly currencyUnit: string;

    /** Gets the {@link BasicTerm.Level} string. */
    static readonly level: string;
    /** Gets the {@link BasicTerm.LevelA} string. */
    static readonly levelA: string;
    /** Gets the {@link BasicTerm.Hp} string. */
    static readonly hp: string;
    /** Gets the {@link BasicTerm.HpA} string. */
    static readonly hpA: string;
    /** Gets the {@link BasicTerm.Mp} string. */
    static readonly mp: string;
    /** Gets the {@link BasicTerm.MpA} string. */
    static readonly mpA: string;
    /** Gets the {@link BasicTerm.Tp} string. */
    static readonly tp: string;
    /** Gets the {@link BasicTerm.TpA} string. */
    static readonly tpA: string;
    /** Gets the {@link BasicTerm.Exp} string. */
    static readonly exp: string;
    /** Gets the {@link BasicTerm.ExpA} string. */
    static readonly expA: string;

    /** Gets the {@link CommandTerm.Fight} string. */
    static readonly fight: string;
    /** Gets the {@link CommandTerm.Escape} string. */
    static readonly escape: string;
    /** Gets the {@link CommandTerm.Attack} string. */
    static readonly attack: string;
    /** Gets the {@link CommandTerm.Guard} string. */
    static readonly guard: string;
    /** Gets the {@link CommandTerm.Item} string. */
    static readonly item: string;
    /** Gets the {@link CommandTerm.Skill} string. */
    static readonly skill: string;
    /** Gets the {@link CommandTerm.Equip} string. */
    static readonly equip: string;
    /** Gets the {@link CommandTerm.Status} string. */
    static readonly status: string;
    /** Gets the {@link CommandTerm.Formation} string. */
    static readonly formation: string;
    /** Gets the {@link CommandTerm.Save} string. */
    static readonly save: string;
    /** Gets the {@link CommandTerm.GameEnd} string. */
    static readonly gameEnd: string;
    /** Gets the {@link CommandTerm.Options} string. */
    static readonly options: string;
    /** Gets the {@link CommandTerm.Weapon} string. */
    static readonly weapon: string;
    /** Gets the {@link CommandTerm.Armor} string. */
    static readonly armor: string;
    /** Gets the {@link CommandTerm.KeyItem} string. */
    static readonly keyItem: string;
    /** Gets the {@link CommandTerm.Equip2} string. */
    static readonly equip2: string;
    /** Gets the {@link CommandTerm.Optimize} string. */
    static readonly optimize: string;
    /** Gets the {@link CommandTerm.Clear} string. */
    static readonly clear: string;
    /** Gets the {@link CommandTerm.NewGame} string. */
    static readonly newGame: string;
    /** Gets the {@link CommandTerm.Continue} string. */
    static readonly continue: string;
    /** Gets the {@link CommandTerm.ToTitle} string. */
    static readonly toTitle: string;
    /** Gets the {@link CommandTerm.Cancel} string. */
    static readonly cancel: string;
    /** Gets the {@link CommandTerm.Buy} string. */
    static readonly buy: string;
    /** Gets the {@link CommandTerm.Sell} string. */
    static readonly sell: string;

    /** Gets the {@link MessageTerm.AlwaysDash} string. */
    static readonly alwaysDash: string;
    /** Gets the {@link MessageTerm.CommandRemember} string. */
    static readonly commandRemember: string;
    /** Gets the {@link MessageTerm.BgmVolume} string. */
    static readonly bgmVolume: string;
    /** Gets the {@link MessageTerm.BgsVolume} string. */
    static readonly bgsVolume: string;
    /** Gets the {@link MessageTerm.MeVolume} string. */
    static readonly meVolume: string;
    /** Gets the {@link MessageTerm.SeVolume} string. */
    static readonly seVolume: string;
    /** Gets the {@link MessageTerm.Possession} string. */
    static readonly possession: string;
    /** Gets the {@link MessageTerm.ExpTotal} string. */
    static readonly expTotal: string;
    /** Gets the {@link MessageTerm.ExpNext} string. */
    static readonly expNext: string;
    /** Gets the {@link MessageTerm.SaveMessage} string. */
    static readonly saveMessage: string;
    /** Gets the {@link MessageTerm.LoadMessage} string. */
    static readonly loadMessage: string;
    /** Gets the {@link MessageTerm.File} string. */
    static readonly file: string;
    /** Gets the {@link MessageTerm.PartyName} string. */
    static readonly partyName: string;
    /** Gets the {@link MessageTerm.Emerge} string. */
    static readonly emerge: string;
    /** Gets the {@link MessageTerm.Preemptive} string. */
    static readonly preemptive: string;
    /** Gets the {@link MessageTerm.Surprise} string. */
    static readonly surprise: string;
    /** Gets the {@link MessageTerm.EscapeStart} string. */
    static readonly escapeStart: string;
    /** Gets the {@link MessageTerm.EscapeFailure} string. */
    static readonly escapeFailure: string;
    /** Gets the {@link MessageTerm.Victory} string. */
    static readonly victory: string;
    /** Gets the {@link MessageTerm.Defeat} string. */
    static readonly defeat: string;
    /** Gets the {@link MessageTerm.ObtainExp} string. */
    static readonly obtainExp: string;
    /** Gets the {@link MessageTerm.ObtainGold} string. */
    static readonly obtainGold: string;
    /** Gets the {@link MessageTerm.ObtainItem} string. */
    static readonly obtainItem: string;
    /** Gets the {@link MessageTerm.LevelUp} string. */
    static readonly levelUp: string;
    /** Gets the {@link MessageTerm.ObtainSkill} string. */
    static readonly obtainSkill: string;
    /** Gets the {@link MessageTerm.UseItem} string. */
    static readonly useItem: string;
    /** Gets the {@link MessageTerm.CriticalToEnemy} string. */
    static readonly criticalToEnemy: string;
    /** Gets the {@link MessageTerm.CriticalToActor} string. */
    static readonly criticalToActor: string;
    /** Gets the {@link MessageTerm.ActorDamage} string. */
    static readonly actorDamage: string;
    /** Gets the {@link MessageTerm.ActorRecovery} string. */
    static readonly actorRecovery: string;
    /** Gets the {@link MessageTerm.ActorGain} string. */
    static readonly actorGain: string;
    /** Gets the {@link MessageTerm.ActorLoss} string. */
    static readonly actorLoss: string;
    /** Gets the {@link MessageTerm.ActorDrain} string. */
    static readonly actorDrain: string;
    /** Gets the {@link MessageTerm.ActorNoDamage} string. */
    static readonly actorNoDamage: string;
    /** Gets the {@link MessageTerm.ActorNoHit} string. */
    static readonly actorNoHit: string;
    /** Gets the {@link MessageTerm.EnemyDamage} string. */
    static readonly enemyDamage: string;
    /** Gets the {@link MessageTerm.EnemyRecovery} string. */
    static readonly enemyRecovery: string;
    /** Gets the {@link MessageTerm.EnemyGain} string. */
    static readonly enemyGain: string;
    /** Gets the {@link MessageTerm.EnemyLoss} string. */
    static readonly enemyLoss: string;
    /** Gets the {@link MessageTerm.EnemyDrain} string. */
    static readonly enemyDrain: string;
    /** Gets the {@link MessageTerm.EnemyNoDamage} string. */
    static readonly enemyNoDamage: string;
    /** Gets the {@link MessageTerm.EnemyNoHit} string. */
    static readonly enemyNoHit: string;
    /** Gets the {@link MessageTerm.Evasion} string. */
    static readonly evasion: string;
    /** Gets the {@link MessageTerm.MagicEvasion} string. */
    static readonly magicEvasion: string;
    /** Gets the {@link MessageTerm.MagicReflection} string. */
    static readonly magicReflection: string;
    /** Gets the {@link MessageTerm.CounterAttack} string. */
    static readonly counterAttack: string;
    /** Gets the {@link MessageTerm.Substitute} string. */
    static readonly substitute: string;
    /** Gets the {@link MessageTerm.BuffAdd} string. */
    static readonly buffAdd: string;
    /** Gets the {@link MessageTerm.DebuffAdd} string. */
    static readonly debuffAdd: string;
    /** Gets the {@link MessageTerm.BuffRemove} string. */
    static readonly buffRemove: string;
    /** Gets the {@link MessageTerm.ActionFailure} string. */
    static readonly actionFailure: string;
}
