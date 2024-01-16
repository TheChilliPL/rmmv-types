declare const enum Data_MessageBackground {
  Normal,
  Dimmed,
  Transparent,
}

declare const enum Data_MessagePositionType {
  Top,
  Middle,
  Bottom,
}

declare type ChoiceCallback = (choice: number) => void;

/**
 * The game object class for the state of the message window that displays text
 * or selections, etc.
 */
declare class Game_Message {
  initialize(...constructorParams: unknown[]): void;
  clear(): void;

  _texts: string[];
  _choices: string[];
  _faceName: string;
  _faceIndex: number;
  _background: Data_MessageBackground;
  _positionType: Data_MessagePositionType;
  _choiceDefaultType: number;
  _choiceCancelType: number;
  _choiceBackground: Data_MessageBackground;
  _choicePositionType: Data_MessagePositionType;
  _numInputVariableId: number;
  _numInputMaxDigits: number;
  _itemChoiceVariableId: number;
  _itemChoiceItypeId: Data_ItemType;
  _scrollMode: boolean;
  _scrollSpeed: number;
  _scrollNoFast: boolean;
  _choiceCallback: Maybe<ChoiceCallback>;

  choices(): string[];
  faceName(): string;
  faceIndex(): number;
  background(): Data_MessageBackground;
  positionType(): Data_MessagePositionType;

  choiceDefaultType(): number;
  choiceCancelType(): number;
  choiceBackground(): number;
  choicePositionsType(): number;

  numInputVariableId(): number;
  numInputMaxDigits(): number;

  itemChoiceVariableId(): number;
  itemChoiceItypeId(): Data_ItemType;

  scrollMode(): boolean;
  scrollNoFast(): boolean;

  add(text: string): void;
  setFaceImage(faceName: string, faceIndex: number): void;
  setBackground(background: Data_MessageBackground): void;
  setPositionType(positionType: Data_MessagePositionType): void;
  setChoices(choices: string[], defaultType: number, cancelType: number): void;
  setChoiceBackground(background: Data_MessageBackground): void;
  setChoicePositionType(positionType: Data_MessagePositionType): void;
  setNumberInput(variableId: number, maxDigits: number): void;
  setItemChoice(variableId: number, itemType: number): void;
  setScroll(speed: number, noFast: boolean): void;
  setChoiceCallback(callback: Maybe<ChoiceCallback>): void;
  onChoice(choice: number): void;
  hasText(): boolean;
  isChoice(): boolean;
  isNumberInput(): boolean;
  isItemChoice(): boolean;
  isBusy(): boolean;
  newPage(): void;
  allText(): string;
}
