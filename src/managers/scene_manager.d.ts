interface SceneClass {
  new (): Stage;
}

declare class SceneManager {
  private constructor();

  static _getTimeInMsWithoutMobileSafari(): number;

  static _scene: Maybe<Scene_Base>;
  static _nextScene: Maybe<Scene_Base>;
  static _stack: Scene_Base[];
  static _stopped: boolean;
  static _sceneStarted: boolean;
  static _exiting: boolean;
  static _previousClass: null;
  static _backgroundBitmap: Maybe<Bitmap>;
  static _screenWidth: number;
  static _screenHeight: number;
  static _boxWidth: number;
  static _boxHeight: number;
  static _deltaTime: number;
  static _currentTime?: number;
  static _accumulator: number;

  static run(sceneClass: SceneClass): void;

  static initialize(): void;

  static initGraphics(): void;
  static preferableRendererType(): GraphicsRendererType;
  static shouldUseCanvasRenderer(): boolean;
  static checkWebGL(): void;
  static checkFileAccess(): void;
  static initAudio(): void;
  static initInput(): void;
  static initNwjs(): void;
  static checkPluginErrors(): void;
  static setupErrorHandlers(): void;
  static requestUpdate(): void;
  static update(): void;
  static terminate(): void;
  static onError(e: {
    message: string;
    filename: string;
    lineno: number;
  }): void;
  static onKeyDown(event: KeyboardEvent): void;
  static catchException(error: Error): void;
  static catchException(unknownError: unknown): void;

  static tickStart(): void;
  static tickEnd(): void;

  static updateInputData(): void;
  static updateMain(): void;
  static updateManagers(): void;

  static changeScene(): void;
  static updateScene(): void;
  static renderScene(): void;

  static onSceneCreate(): void;
  static onSceneStart(): void;
  static onSceneLoading(): void;
  static isSceneChanging(): boolean;
  static isCurrentSceneBusy(): boolean;
  static isCurrentSceneStarted(): boolean;
  static isNextScene(sceneClass: SceneClass): boolean;
  static isPreviousScene(sceneClass: SceneClass): boolean;
  static goto(sceneClass: SceneClass): void;
  static push(sceneClass: SceneClass): void;
  static pop(): void;
  static exit(): void;
  static clearStack(): void;
  static stop(): void;

  static prepareNextScene(): void;
  static snap(): Bitmap;
  static snapForBackground(): Bitmap;
  static backgroundBitmap(): Bitmap;

  static resume(): void;
}
