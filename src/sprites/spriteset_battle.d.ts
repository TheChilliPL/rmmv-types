/**
 * The set of sprites on the battle screen.
 */
declare class Spriteset_Battle extends Spriteset_Base {
  initialize(...constructorParams: unknown[]): void;

  _battlebackLocated: boolean;
  _backgroundSprite: Sprite;
  _battleField: Sprite;
  _back1Sprite: TilingSprite;
  _back2Sprite: TilingSprite;
  _enemySprites: Sprite_Enemy[];
  _actorSprites: Sprite_Actor[];

  override createLowerLayer(): void;
  createBackground(): void;

  override update(): void;

  createBattleField(): void;
  createBattleback(): void;

  updateBattleback(): void;
  locateBattleback(): void;
  battleback1Bitmap(): Bitmap;
  battleback2Bitmap(): Bitmap;
  battleback1Name(): string;
  battleback2Name(): string;
  overworldBattleback1Name(): string;
  overworldBattleback2Name(): string;
  normalBattleback1Name(): string;
  normalBattleback2Name(): string;
  terrainBattleback1Name(type: number): string;
  terrainBattleback2Name(type: number): string;
  defaultBattleback1Name(): string;
  defaultBattleback2Name(): string;
  shipBattleback1Name(): string;
  shipBattleback2Name(): string;
  autotileType(z: number): number;

  createEnemies(): void;
  compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number;

  createActors(): void;
  updateActors(): void;

  battlerSprites(): Sprite_Battler[];

  isAnimationPlaying(): boolean;
  isEffecting(): boolean;
  isAnyoneMoving(): boolean;
  isBusy(): boolean;
}
