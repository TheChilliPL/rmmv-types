declare type Data_CommonEvents = OneIndexedArray<Data_CommonEvent>;

declare const enum Data_CommonEventTrigger {
  None,
  Autorun,
  Parallel,
}

declare interface Data_CommonEvent {
  id: number;
  list: Data_Command[];
  name: string;
  switchId: number;
  trigger: Data_CommonEventTrigger;
}
