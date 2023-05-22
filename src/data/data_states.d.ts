declare type Data_States = OneIndexedArray<Data_State>;

declare interface Data_State {
    id: number;
    autoRemovalTiming: number;
    chanceByDamage: number;
    iconIndex: number;
    maxTurns: number;
    message1: string;
    message2: string;
    message3: string;
    message4: string;
    minTurns: number;
    motion: number; //TODO
    name: string;
    note: string;
    overlay: number; //TODO
    priority: number;
    releaseByDamage: boolean;
    removeAtBattleEnd: boolean;
    removeByDamage: boolean;
    removeByRestriction: boolean;
    removeByWalking: boolean;
    restriction: number; //TODO
    stepsToRemove: number;
    traits: Data_Trait[];
}
