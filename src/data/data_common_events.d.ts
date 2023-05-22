declare type Data_CommonEvents = OneIndexedArray<Data_CommonEvent>;

declare interface Data_CommonEvent {
    id: number;
    list: Data_Command[];
    name: string;
    switchId: number;
    trigger: number; // TODO Data_CommonEventTrigger
}
