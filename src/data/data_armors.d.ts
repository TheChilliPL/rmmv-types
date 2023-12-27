declare type Data_Armors = OneIndexedArray<Data_Armor>;

declare interface Data_Armor extends Data_Item {
  id: number;
  /** Armor type ID. */
  atypeId: number;
  description: string;
  /** Equipment type ID. */
  etypeId: number;
  traits: Data_Trait[];
  iconIndex: number;
  name: string;
  note: string;
  params: Data_BattlerParams;
  price: number;
}
