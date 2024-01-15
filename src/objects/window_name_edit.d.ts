/**
 * The window for editing an actor's name on the name input screen.
 */
declare class Window_NameEdit extends Window_Base {
  constructor(actor: Game_Actor, maxLength: number);
  initialize(...constructorParams: unknown[]): void;

  _actor: Game_Actor;
  _name: string;
  _index: number;
  _maxLength: number;
  _defaultName: string;

  windowWidth(): number;
  windowHeight(): number;

  readonly name: () => string;
  restoreDefault(): void;
  add(ch: string): boolean;
  back(): boolean;

  faceWidth(): number;
  charWidth(): number;
  left(): number;
  itemRect(index: number): Rectangle;

  underlineRect(index: number): Rectangle;
  underlineColor(): string;
  drawUnderline(index: number): void;
  drawChar(index: number): void;

  refresh(): void;
}
