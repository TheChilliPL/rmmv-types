/**
 * The window for displaying the description of the selected item.
 */
declare class Window_Help extends Window_Base {
  constructor(numLines: number);
  initialize(...constructorParams: unknown[]): void;

  _text: string;

  setText(text: string): void;
  clear(): void;
  setItem(item: Data_ItemBase): void;
  refresh(): void;
}
