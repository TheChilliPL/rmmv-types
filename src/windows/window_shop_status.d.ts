/**
 * The window for displaying number of items in possession and the actor's
 * equipment on the shop screen.
 */
declare class Window_ShopStatus extends Window_Base {
  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  _item: Maybe<Data_Item>;
  _pageIndex: number;

  refresh(): void;

  setItem(item: Maybe<Data_Item>): void;
  isEquipItem(): boolean;

  drawPossession(x: number, y: number): void;
  drawEquipInfo(x: number, y: number): void;

  statusMembers(): Game_Actor[];

  pageSize(): number;
  maxPages(): number;

  drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;
  /**
   * @param item1 Currently equipped item, or null.
   */
  drawActorParamChange(
    x: number,
    y: number,
    actor: Game_Actor,
    item1: Maybe<Data_EquipItem>,
  ): void;

  /**
   * @return Parameter ID depending on item type.
   *
   * By default, {@link Data_BattlerParamId.Attack} for weapons and
   * {@link Data_BattlerParamId.Defense} for armor.
   */
  paramId(): Data_BattlerParamId;

  /**
   * @return The worst item in a slot of the specified type.
   *
   * Multiple items in the same slot can only happen with dual wielding, when
   * the shield slot is replaced with a second weapon slot.
   *
   * @see Game_BattlerBase#isDualWield
   */
  currentEquippedItem(
    actor: Game_Actor,
    etypeId: number,
  ): Maybe<Data_EquipItem>;

  override update(): void;
  updatePage(): void;
  isPageChangeEnabled(): boolean;
  isPageChangeRequested(): boolean;
  isTouchedInsideFrame(): boolean;
  changePage(): void;
}
