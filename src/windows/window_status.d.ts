/**
 * The window for displaying full status on the status screen.
 */
declare class Window_Status extends Window_Selectable {
  initialize(...constructorParams: unknown[]): void;

  _actor: Maybe<Game_Actor>;

  setActor(actor: Maybe<Game_Actor>): void;

  override refresh(): void;

  /**
   * Draws block with
   * {@link Window_Status#drawActorName actor's name},
   * {@link Window_Status#drawActorClass class},
   * and {@link Window_Status#drawActorNickname nickname}.
   */
  drawBlock1(y: number): void;

  /**
   * Draws block with
   * {@link Window_Status#drawActorFace actor's face},
   * {@link Window_Status#drawBasicInfo basic info},
   * and {@link Window_Status#drawExpInfo exp info}.
   */
  drawBlock2(y: number): void;

  /**
   * Draws block with
   * {@link Window_Status#drawParameters actor's parameters}
   * and {@link Window_Status#drawEquipments equipment}.
   */
  drawBlock3(y: number): void;

  /**
   * Draws block with
   * {@link Window_Status#drawProfile actor's profile}.
   */
  drawBlock4(y: number): void;

  drawHorzLine(y: number): void;
  lineColor(): string;

  drawBasicInfo(x: number, y: number): void;
  drawParameters(x: number, y: number): void;
  drawExpInfo(x: number, y: number): void;
  drawEquipments(x: number, y: number): void;
  drawProfile(x: number, y: number): void;

  maxEquipmentLines(): number;
}
