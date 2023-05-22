declare class Game_System {
    initialize(): void;

    _saveEnabled: boolean;
    _menuEnabled: boolean;
    _encounterEnabled: boolean;
    _formationEnabled: boolean;
    _battleCount: number;
    _winCount: number;
    _escapeCount: number;
    _saveCount: number;
    _versionId: number;
    _framesOnSave: number;
    _bgmOnSave: Maybe<AudioObject>;
    _bgsOnSave: Maybe<AudioObject>;
    _windowTone: Maybe<RGBAColor>;
    _battleBgm: Maybe<AudioObject>;
    _victoryMe: Maybe<AudioObject>;
    _defeatMe: Maybe<AudioObject>;
    _savedBgm: Maybe<AudioObject>;
    _walkingBgm: Maybe<AudioObject>;

    isJapanese(): boolean;
    isChinese(): boolean;
    isKorean(): boolean;
    isCJK(): boolean;
    isRussian(): boolean;

    isSideView(): boolean;

    isSaveEnabled(): boolean;
    disableSave(): void;
    enableSave(): void;

    isMenuEnabled(): boolean;
    disableMenu(): void;
    enableMenu(): void;

    isEncounterEnabled(): boolean;
    disableEncounter(): void;
    enableEncounter(): void;

    isFormationEnabled(): boolean;
    disableFormation(): void;
    enableFormation(): void;

    battleCount(): number;
    winCount(): number;
    escapeCount(): number;

    saveCount(): number;
    versionId(): number;

    windowTone(): RGBAColor;
    setWindowTone(value: Maybe<RGBAColor>): void;

    battleBgm(): AudioObject;
    setBattleBgm(value: Maybe<AudioObject>): void;
    victoryMe(): AudioObject;
    setVictoryMe(value: Maybe<AudioObject>): void;
    defeatMe(): AudioObject;
    setDefeatMe(value: Maybe<AudioObject>): void;

    onBattleStart(): void;
    onBattleWin(): void;
    onBattleEscape(): void;
    onBeforeSave(): void;
    onAfterLoad(): void;

    playtime(): number;
    playtimeText(): string;

    saveBgm(): void;
    replayBgm(): void;
    saveWalkingBgm(): void;
    replayWalkingBgm(): void;
    saveWalkingBgm2(): void;
}
