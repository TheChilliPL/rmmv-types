declare type Data_Armors = OneIndexedArray<Data_Armor>;

declare interface Data_Armor extends Data_Item {
  id: number;
  atypeId: number; //TODO
  description: string;
  etypeId: number; //TODO
  traits: Data_Trait[];
  iconIndex: number;
  name: string;
  note: string;
  params: Eight<number>;
  price: number;
}
