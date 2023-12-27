declare type Data_Tilesets = OneIndexedArray<Data_Tileset>;

declare const enum TilesetMode {
  World = 0,
  Area = 1,
}

/**
 * A bit flag enum that represents the flags of a tile.
 *
 * Bits from least significant to most significant:
 * - 0-3: Passable (down, left, right, up) (the same order as {@link Dir4}, albeit
 *   without the gaps)
 * - 4: Passable under the tile
 * - 5: Ladder
 * - 6: Bush
 * - 7: Counter
 * - 8: Damage floor
 * - 9: Boat passable
 * - 10: Ship passable
 * - 11: Airship land ok
 * - 12-14: Terrain tag
 * - 15: Unused
 *
 * ## Passage
 *
 * Sets whether a normal charactér can pass
 * through the tile.
 * - O : passable (`0b`{@link TilesetFlags.PassableUp `1`}{@link TilesetFlags.PassableRight `1`}{@link TilesetFlags.PassableLeft `1`}{@link TilesetFlags.PassableDown `1`})
 * - X : impassable (`0b`{@link TilesetFlags.PassableUp `0`}{@link TilesetFlags.PassableRight `0`}{@link TilesetFlags.PassableLeft `0`}{@link TilesetFlags.PassableDown `0`})
 * - ☆ : passable under the tile ({@link TilesetFlags.PassableUnder})
 *
 * ## Terrain tag
 *
 * Assigns a numeric value between 0 and 7 to each
 * tile. No specific uses are defined. The value can
 * be obtained by using the [{@link Data_CommandType.GetLocationInfo Get Location Info}]
 * event command. For terrain tags that are
 * obtained, those in the upper layers except for O
 * are prioritized.
 *
 * ## The rest of the flags
 *
 * You can read the documentation of the rest of the flags in the specific values.
 */
declare const enum TilesetFlags {
  PassableDown = 1 << 0,
  PassableLeft = 1 << 1,
  PassableRight = 1 << 2,
  PassableUp = 1 << 3,

  PassableUnder = 1 << 4,
  /**
   * Sets the character as looking upward when on
   * this tile. This makes it look like the character is
   * grabbing onto a ladder attached to a wall.
   */
  Ladder = 1 << 5,
  /**
   * Sets as translucent the bottom some pixels of a
   * character on the tile, which can make the
   * character's feet seemingly hidden in a bush.
   */
  Bush = 1 << 6,
  /**
   * Enables a tile to start an event that is not
   * directly next to it. When a tile with the counter
   * attribute is between the character and the
   * event, the event will start as if the character is
   * right next to it, even if it would not normally do
   * so. When this attribute is given to a terrain
   * autotile, it is considered to be a table and will be
   * drawn by extending it 12 pixels downward.
   */
  Counter = 1 << 7,

  /**
   * Sets a tile to deal damage when walked on. A
   * poisonous swamp is one example of possible uses.
   */
  DamageFloor = 1 << 8,
  BoatPassable = 1 << 9,
  ShipPassable = 1 << 10,
  AirshipLandOk = 1 << 11,

  TerrainTag0 = 0 << 12,
  TerrainTag1 = 1 << 12,
  TerrainTag2 = 2 << 12,
  TerrainTag3 = 3 << 12,
  TerrainTag4 = 4 << 12,
  TerrainTag5 = 5 << 12,
  TerrainTag6 = 6 << 12,
  TerrainTag7 = 7 << 12,
}

declare type TilesetDirectionFlags =
  | TilesetFlags.PassableDown
  | TilesetFlags.PassableLeft
  | TilesetFlags.PassableRight
  | TilesetFlags.PassableUp;

declare interface Data_Tileset {
  id: number;
  // TODO Document tileset flags.
  flags: number[];
  mode: TilesetMode;
  name: string;
  tilesetNames: [
    /** A1 (Animation) */
    a1: string,
    /** A2 (Ground) */
    a2: string,
    /** A3 (Buildings) */
    a3: string,
    /** A4 (Walls) */
    a4: string,
    /** A5 (Normal) */
    a5: string,
    /** B */
    b: string,
    /** C */
    c: string,
    /** D */
    d: string,
    /** E */
    e: string,
  ];
}
