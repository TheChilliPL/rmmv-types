declare type Data_Items = OneIndexedArray<Data_Item>;

declare interface Data_Damage {
    critical: boolean;
    elementId: number;
    formula: string;
    type: number;
    variance: number;
}

declare interface Data_Effect {
    code: number;
    dataId: number;
    value1: number;
    value2: number;
}

declare const enum Data_ItemType {
    Regular,
    Key,
    HiddenA,
    HiddenB
}

declare interface Data_Item {
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
    scope: number;
    speed: number;
    successRate: number;
    tpGain: number;
}
