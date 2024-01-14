/**
 * The window for displaying parameter changes on the equipment screen.
 */
declare class Window_EquipStatus extends Window_Base {
  constructor(x: number, y: number);
  initialize(...constructorParams: unknown[]): void;

  _actor: Maybe<Game_Actor>;
  // ? What is this?
  _tempActor: Maybe<Game_Actor>;

  windowWidth(): number;
  windowHeight(): number;
  numVisibleRows(): number;

  setActor(actor: Maybe<Game_Actor>): void;

  refresh(): void;

  setTempActor(tempActor: Maybe<Game_Actor>): void;

  drawItem(x: number, y: number, paramId: number): void;
  drawParamName(x: number, y: number, paramId: number): void;
  drawCurrentParam(x: number, y: number, paramId: number): void;
  drawRightArrow(x: number, y: number): void;
  drawNewParam(x: number, y: number, paramId: number): void;
}
