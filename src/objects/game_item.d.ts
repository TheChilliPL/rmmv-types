declare const enum Game_ItemClass {
  Item = "item",
  Skill = "skill",
  Weapon = "weapon",
  Armor = "armor",
}

/**
 * The game object class for handling skills, items, weapons, and armor. It is
 * required because save data should not include the database object itself.
 */
declare class Game_Item<
  TItem extends Maybe<Data_ItemBase> = Maybe<Data_ItemBase>,
> {
  constructor(item: Data_ItemBase);
  initialize(...constructorParams: unknown[]): void;

  _dataClass: Game_ItemClass;
  _itemId: number;

  isSkill(): this is Game_Item<Data_Skill>;
  isItem(): this is Game_Item<Data_Item>;
  isUsableItem(): this is Game_Item<Data_UsableItem>;
  isWeapon(): this is Game_Item<Data_Weapon>;
  isArmor(): this is Game_Item<Data_Armor>;
  isEquipItem(): this is Game_Item<Data_EquipItem>;
  isNull(): this is Game_Item<null>;

  itemId(): number;

  object(): TItem;

  setObject(item: TItem): void;
  setEquip(isWeapon: boolean, itemId: number): void;
}
