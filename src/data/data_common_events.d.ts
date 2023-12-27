declare type Data_CommonEvents = OneIndexedArray<Data_CommonEvent>;

declare const enum CommonEventTrigger {
  None,
  Autorun,
  Parallel,
}

declare interface Data_CommonEvent {
  id: number;
  list: Data_Command[];
  name: string;
  switchId: number;
  trigger: CommonEventTrigger;
}
