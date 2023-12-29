/**
 * The set of sprites on the map screen.
 */
declare class Spriteset_Map extends Spriteset_Base {
  override initialize(): void;

  _parallax: TilingSprite;
  /**
   * If using WebGL, this is an instance of {@link ShaderTilemap}.
   * Otherwise, it falls back directly to {@link Tilemap}.
   */
  _tilemap: Tilemap;
  _tileset: Data_Tileset;
  _characterSprites: Sprite_Character[];
  _shadowSprite: Sprite;
  _destinationSprite: Sprite_Destination;
  _weather: Weather;

  override createLowerLayer(): void;

  override update(): void;

  hideCharacters(): void;

  createParallax(): void;
  createTilemap(): void;
  loadTileset(): void;
  createCharacters(): void;
  createShadow(): void;
  createDestination(): void;
  createWeather(): void;

  updateTileset(): void;
  /**
   * Simple fix for canvas parallax issue, destroy old parallax and readd to the tree.
   */
  _canvasReAddParallax(): void;
  updateParallax(): void;
  updateTilemap(): void;
  updateShadow(): void;
  updateWeather(): void;
}
