/**
 * The game object class for handling skills, items, weapons, and armor. It is
 * required because save data should not include the database object itself.
 */
declare class Game_Item {
  constructor(item: Data_Item);
  initialize(item: Data_Item): void;

  _dataClass: string;
  _itemId: number;

  isSkill(): boolean;
  isItem(): boolean;
  isUsableItem(): boolean;
  isWeapon(): boolean;
  isArmor(): boolean;
  isEquipItem(): boolean;
  isNull(): boolean;

  itemId(): number;

  object(): Data_Item;
  setObject(item: Data_Item): void;

  setEquip(isWeapon: boolean, itemId: number): void;
}
