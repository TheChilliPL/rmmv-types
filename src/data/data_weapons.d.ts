declare type Data_Weapons = OneIndexedArray<Data_Weapon>;

declare interface Data_Weapon extends Data_Item {
  id: number;
  animationId: number;
  description: string;
  /** Equipment type ID. */
  etypeId: number;
  traits: Data_Trait[];
  iconIndex: number;
  name: string;
  note: string;
  params: Nine<number>;
  price: number;
  /** Weapon type ID. */
  wtypeId: number;
}
