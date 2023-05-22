declare const enum MessageBackground { //TODO MOVE TO WINDOW_BASE
    Normal, Dimmed, Transparent
}

declare const enum MessagePositionType {
    Top, Middle, Bottom
}

declare type ChoiceCallback = (choice: number) => void;

declare class Game_Message {
    initialize(): void;
    clear(): void;

    _texts: string[];
    _choices: string[];
    _faceName: string;
    _faceIndex: number;
    _background: MessageBackground;
    _positionType: MessagePositionType;
    _choiceDefaultType: number;
    _choiceCancelType: number;
    _choiceBackground: MessageBackground;
    _choicePositionType: MessagePositionType;
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
    background(): MessageBackground;
    positionType(): MessagePositionType;

    choiceDefaultType(): number;
    choiceCancelType(): number;
    choiceBackground(): number;
    choicePositionsType(): number;

    numInputVariableId(): number;
    numInputMaxDigits(): number;

    itemChoiceVariableId(): number;
    itemChoiceItypeId(): Data_ItemType;

    scrollMode(): boolean;
    scrollNoFast(): boolean

    add(text: string): void;
    setFaceImage(faceName: string, faceIndex: number): void;
    setBackground(background: MessageBackground): void;
    setPositionType(positionType: MessagePositionType): void;
    setChoices(choices: string[], defaultType: number, cancelType: number): void;
    setChoiceBackground(background: MessageBackground): void;
    setChoicePositionType(positionType: MessagePositionType): void;
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
