/**
 * The game object class for a follower. A follower is an allied character,
 * other than the front character, displayed in the party.
 */
declare class Game_Follower extends Game_Character {
  constructor(memberIndex: number);
  override initialize(memberIndex: number): void;

  _memberIndex: number;

  refresh(): void;
  actor(): Game_Actor;
  isVisible(): boolean;

  override update(): void;

  chaseCharacter(character: Game_Character): void;
}
