/**
 * The window for displaying text messages.
 */
declare class Window_Message extends Window_Base {
  initialize(...constructorParams: unknown[]): void;

  _imageReservationId: number;
  _background: Data_MessageBackground;
  _positionType: Data_MessagePositionType;
  _waitCount: number;
  _faceBitmap: Maybe<Bitmap>;
  _textState: Maybe<Data_TextState>;

  _showFast: boolean;
  _lineShowFast: boolean;
  _pauseSkip: boolean;

  _goldWindow: Window_Gold;
  _choiceWindow: Window_ChoiceList;
  _numberWindow: Window_NumberInput;
  _itemWindow: Window_EventItem;

  initMembers(): void;
  subWindows(): Window_Base[];
  createSubWindows(): void;

  windowWidth(): number;
  windowHeight(): number;

  clearFlags(): void;

  numVisibleRows(): number;

  override update(): void;
  checkToNotClose(): void;
  canStart(): boolean;

  startMessage(): void;
  updatePlacement(): void;
  updateBackground(): void;
  terminateMessage(): void;

  updateWait(): boolean;
  updateLoading(): boolean;
  updateInput(): boolean;
  isAnySubWindowActive(): boolean;
  updateMessage(): boolean;
  onEndOfText(): void;

  startInput(): boolean;
  isTriggered(): boolean;
  doesContinue(): boolean;
  areSettingsChanged(): boolean;

  updateShowFast(): void;

  newPage(textState: Data_TextState): void;
  loadMessageFace(): void;
  drawMessageFace(): void;
  newLineX(): number;
  override processNewLine(textState: Data_TextState): void;
  override processNewPage(textState: Data_TextState): void;
  isEndOfText(textState: Data_TextState): boolean;
  needsNewPage(textState: Data_TextState): boolean;

  override processEscapeCharacter(
    code: string,
    textState: Data_TextState,
  ): void;
  startWait(count: number): void;
  startPause(): void;
}
