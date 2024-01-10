type GraphicsRendererType = "canvas" | "webgl" | "auto";

declare class Graphics {
  private constructor();

  static _cssFontLoading: boolean;
  static _fontLoaded: any;
  static _videoVolume: number;

  static initialize(
    width?: number,
    height?: number,
    type?: GraphicsRendererType,
  ): void;

  static _width: number;
  static _height: number;
  static _rendererType: GraphicsRendererType;
  static _boxWidth: number;
  static _boxHeight: number;

  static _scale: number;
  static _realScale: number;

  static _errorShowed: boolean;
  static _errorPrinter: Maybe<HTMLParagraphElement>;
  static _canvas: Maybe<HTMLCanvasElement>;
  static _video: Maybe<HTMLVideoElement>;
  static _videoUnlocked: boolean;
  static _videoLoading: boolean;
  static _upperCanvas: Maybe<HTMLCanvasElement>;
  static _renderer: Maybe<PIXI.SystemRenderer>;
  static _fpsMeter: Maybe<FPSMeter>;
  static _modeBox: Maybe<HTMLDivElement>;
  static _skipCount: number;
  static _maxSkip: number;
  static _rendered: boolean;
  static _loadingImage: Maybe<HTMLImageElement>;
  static _loadingCount: number;
  static _fpsMeterToggled: boolean;
  static _stretchEnabled: boolean;

  static _canUseDifferenceBlend: boolean;
  static _canUseSaturationBlend: boolean;
  static _hiddenCanvas: Maybe<HTMLCanvasElement>;

  static _setupCssFontLoading(): void;

  static canUseCssFontLoading(): boolean;

  static frameCount: number;

  static BLEND_NORMAL: PIXI.BlendMode.NORMAL;
  static BLEND_ADD: PIXI.BlendMode.ADD;
  static BLEND_MULTIPLY: PIXI.BlendMode.MULTIPLY;
  static BLEND_SCREEN: PIXI.BlendMode.SCREEN;

  static tickStart(): void;
  static tickEnd(): void;

  static render(stage: Stage): void;

  static isWebGL(): boolean;
  static hasWebGL(): boolean;

  static canUseDifferenceBlend(): boolean;
  static canUseSaturationBlend(): boolean;

  static setLoadingImage(src: string): void;

  static startLoading(): void;
  static updateLoading(): void;
  static endLoading(): void;

  static printLoadingError(url: string): void;
  static eraseLoadingError(): void;
  static printError(name: string, message: string): void;

  static showFps(): void;
  static hideFps(): void;

  static loadFont(name: string, url: string): void;
  static isFontLoaded(name: string): boolean;

  static playVideo(src: string): void;
  static _videoLoader: () => void;
  static _playVideo(src: string): void;
  static isVideoPlaying(): boolean;
  static canPlayVideoType(type: string): boolean;
  static setVideoVolume(value: number): void;

  static pageToCanvasX(x: number): number;
  static pageToCanvasY(y: number): number;
  static isInsideCanvas(x: number, y: number): boolean;

  static callGC(): void;

  static width: number;
  static height: number;
  static boxWidth: number;
  static boxHeight: number;
  static scale: number;

  static _createAllElements(): void;
  static _updateAllElements(): void;
  static _updateRealScale(): void;

  static _makeErrorHtml(name: string, message: string): string;

  static _defaultStretchMode(): boolean;

  static _testCanvasBlendModes(): void;

  static _modifyExistingElements(): void;

  static _createErrorPrinter(): void;
  static _updateErrorPrinter(): void;

  static _createCanvas(): void;
  static _updateCanvas(): void;

  static _createVideo(): void;

  static _createUpperCanvas(): void;
  static _updateUpperCanvas(): void;
  static _clearUpperCanvas(): void;
  static _paintUpperCanvas(): void;

  static _createRenderer(): void;
  static _updateRenderer(): void;

  static _createFPSMeter(): void;

  static _createModeBox(): void;

  static _createGameFontLoader(): void;

  static _createFontLoader(name: string): void;

  static _centerElement(element: HTMLElement): void;

  static _disableTextSelection(): void;
  static _disableContextMenu(): void;

  static _applyCanvasFilter(): void;

  static _onVideoLoad(): void;
  static _onVideoError(): void;
  static _onVideoEnd(): void;

  static _updateVisibility(videoVisible: boolean): void;

  static _isVideoVisible(): boolean;

  static _setupEventHandlers(): void;

  static _onWindowResize(event: Event): void;
  static _onKeyDown(event: KeyboardEvent): void;
  static _onTouchEnd(event: TouchEvent): void;

  static _switchFPSMeter(): void;
  static _switchStretchMode(): void;

  static _switchFullScreen(): void;
  static _isFullScreen(): boolean;
  static _requestFullScreen(): void;
  static _cancelFullScreen(): void;
}
