declare type Data_Classes = OneIndexedArray<Data_Class>;

declare interface Data_Learning {
  level: number;
  note: string;
  skillId: number;
}

declare interface Data_Class {
  id: number;
  expParams: Four<number>;
  traits: Data_Trait[];
  learnings: Data_Learning[];
  name: string;
  note: string;
  params: Eight<number[]>;
}
