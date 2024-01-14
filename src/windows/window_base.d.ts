declare interface Data_TextState {
  text: string;
  index: number;
  x: number;
  y: number;
  left: number;
  height: number;
}

/**
 * The superclass of all windows within the game.
 */
declare class Window_Base extends Window {
  static _iconWidth: number;
  static _iconHeight: number;
  static _faceWidth: number;
  static _faceHeight: number;

  constructor(x: number, y: number, width: number, height: number);
  initialize(...constructorParams: unknown[]): void;

  windowskin: Bitmap;
  padding: number;
  backOpacity: number;
  contents: Bitmap;
  _opening: boolean;
  _closing: boolean;
  _dimmerSprite: Sprite;

  lineHeight(): number;

  standardFontFace(): string;
  standardFontSize(): number;
  standardPadding(): number;
  textPadding(): number;
  standardBackOpacity(): number;

  loadWindowskin(): void;
  updatePadding(): void;
  updateBackOpacity(): void;

  contentsWidth(): number;
  contentsHeight(): number;
  fittingHeight(numLines: number): number;

  updateTone(): void;
  createContents(): void;
  resetFontSettings(): void;
  resetTextColor(): void;

  override update(): void;
  updateOpen(): void;
  updateClose(): void;

  open(): void;
  close(): void;
  isOpening(): boolean;
  isClosing(): boolean;

  show(): void;
  hide(): void;

  activate(): void;
  deactivate(): void;

  textColor(n: number): string;
  normalColor(): string;
  systemColor(): string;
  crisisColor(): string;
  deathColor(): string;
  gaugeBackColor(): string;
  hpGaugeColor1(): string;
  hpGaugeColor2(): string;
  mpGaugeColor1(): string;
  mpGaugeColor2(): string;
  mpCostColor(): string;
  powerUpColor(): string;
  powerDownColor(): string;
  tpGaugeColor1(): string;
  tpGaugeColor2(): string;
  tpCostColor(): string;
  pendingColor(): string;
  translucentOpacity(): number;

  changeTextColor(color: string): void;
  changePaintOpacity(enabled: boolean): void;

  drawText(
    text: string,
    x: number,
    y: number,
    maxWidth?: number,
    align?: CanvasTextAlign,
  ): void;
  textWidth(text: string): number;
  drawTextEx(text: string, x: number, y: number): number;
  convertEscapeCharacters(text: string): string;
  actorName(actorId: number): string;
  partyMemberName(actorId: number): string;
  processCharacter(textState: Data_TextState): void;
  processNormalCharacter(textState: Data_TextState): void;
  processNewLine(textState: Data_TextState): void;
  processNewPage(textState: Data_TextState): void;
  obtainEscapeCode(textState: Data_TextState): string;
  obtainEscapeParam(textState: Data_TextState): number;
  processEscapeCharacter(code: string, textState: Data_TextState): void;
  processDrawIcon(iconIndex: number, textState: Data_TextState): void;
  makeFontBigger(): void;
  makeFontSmaller(): void;
  calcTextHeight(textState: Data_TextState, all: boolean): number;

  drawIcon(iconIndex: number, x: number, y: number): void;
  drawFace(
    faceName: string,
    faceIndex: number,
    x: number,
    y: number,
    width?: number,
    height?: number,
  ): void;
  drawCharacter(
    characterName: string,
    characterIndex: number,
    x: number,
    y: number,
  ): void;
  drawGauge(
    x: number,
    y: number,
    width: number,
    rate: number,
    color1: string,
    color2: string,
  ): void;

  hpColor(actor: Game_Actor): string;
  mpColor(actor: Game_Actor): string;
  tpColor(actor: Game_Actor): string;

  drawActorCharacter(actor: Game_Actor, x: number, y: number): void;
  drawActorFace(
    actor: Game_Actor,
    x: number,
    y: number,
    width?: number,
    height?: number,
  ): void;
  drawActorName(actor: Game_Actor, x: number, y: number, width?: number): void;
  drawActorClass(actor: Game_Actor, x: number, y: number, width?: number): void;
  drawActorNickname(
    actor: Game_Actor,
    x: number,
    y: number,
    width?: number,
  ): void;
  drawActorLevel(actor: Game_Actor, x: number, y: number): void;
  drawActorIcons(actor: Game_Actor, x: number, y: number, width?: number): void;
  drawCurrentAndMax(
    current: number,
    max: number,
    x: number,
    y: number,
    width: number,
    color1: string,
    color2: string,
  ): void;
  drawActorHp(actor: Game_Actor, x: number, y: number, width?: number): void;
  drawActorMp(actor: Game_Actor, x: number, y: number, width?: number): void;
  drawActorTp(actor: Game_Actor, x: number, y: number, width?: number): void;
  drawActorSimpleStatus(
    actor: Game_Actor,
    x: number,
    y: number,
    width?: number,
  ): void;
  drawItemName(item: Data_Item, x: number, y: number, width?: number): void;
  drawCurrencyValue(
    value: number,
    unit: string,
    x: number,
    y: number,
    width: number,
  ): void;

  paramchangeTextColor(change: Sign): string;
  setBackgroundType(type: number): void;
  showBackgroundDimmer(): void;
  hideBackgroundDimmer(): void;
  updateBackgroundDimmer(): void;
  refreshDimmerBitmap(): void;

  dimColor1(): string;
  dimColor2(): string;

  canvasToLocalX(x: number): number;
  canvasToLocalY(y: number): number;
}
