declare const enum SystemSound {
    Cursor,
    Ok,
    Cancel,
    Buzzer,
    Equip,
    Save,
    Load,
    BattleStart,
    Escape,
    EnemyAttack,
    EnemyDamage,
    EnemyCollapse,
    BossCollapse1,
    BossCollapse2,
    ActorDamage,
    ActorCollapse,
    Recovery,
    Miss,
    Evasion,
    MagicEvasion,
    Reflection,
    Shop,
    UseItem,
    UseSkill
}

declare class SoundManager {
    private constructor();

    static preloadImportantSounds(): void;
    static loadSystemSound(n: SystemSound): void;
    static playSystemSound(n: SystemSound): void;

    static playCursor(): void;
    static playOk(): void;
    static playCancel(): void;
    static playBuzzer(): void;
    static playEquip(): void;
    static playSave(): void;
    static playLoad(): void;
    static playBattleStart(): void;
    static playEscape(): void;
    static playEnemyAttack(): void;
    static playEnemyDamage(): void;
    static playEnemyCollapse(): void;
    static playBossCollapse1(): void;
    static playBossCollapse2(): void;
    static playActorDamage(): void;
    static playActorCollapse(): void;
    static playRecovery(): void;
    static playMiss(): void;
    static playEvasion(): void;
    static playMagicEvasion(): void;
    static playReflection(): void;
    static playShop(): void;
    static playUseItem(): void;
    static playUseSkill(): void;
}