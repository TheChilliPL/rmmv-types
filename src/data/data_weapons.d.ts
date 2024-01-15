declare type Data_Weapons = OneIndexedArray<Data_Weapon>;

declare interface Data_Weapon extends Data_ItemBase {
  id: number;
  animationId: number;
  description: string;
  /** Equipment type ID. */
  etypeId: number;
  traits: Data_Trait[];
  iconIndex: number;
  name: string;
  note: string;
  params: Data_BattlerParams;
  price: number;
  /** Weapon type ID. */
  wtypeId: number;
}
