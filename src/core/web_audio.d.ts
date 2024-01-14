declare class WebAudio implements GameAudioBuffer {
  constructor(url: string);

  static _standAlone: boolean;

  initialize(...constructorParams: unknown[]): void;

  _loader?: () => void;
  _url: string;
  _hasError?: boolean;

  static _masterVolume: number;
  static _context: Maybe<AudioContext>;
  static _masterGainMode?: GainNode;
  static _initialized: boolean;
  static _unlocked: boolean;

  /**
   * @param noAudio Default: false
   */
  static initialize(noAudio?: boolean): boolean;

  static canPlayOgg(): boolean;
  static canPlayM4a(): boolean;

  static setMasterVolume(value: number): void;

  static _createContext(): void;

  static _detectCodecs(): void;
  static _canPlayOgg: boolean;
  static _canPlayM4a: boolean;

  static _createMasterGainNode(): void;

  static _setupEventHandlers(): void;
  static _onTouchStart(event: TouchEvent): void;
  static _onVisibilityChange(): void;
  static _onHide(): void;
  static _onShow(): void;
  static _shouldMuteOnHide(): boolean;
  static _fadeIn(duration: number): void;
  static _fadeOut(duration: number): void;

  clear(): void;

  _buffer: Maybe<AudioBuffer>;
  _sourceNode: Maybe<AudioBufferSourceNode>;
  _gainNode: Maybe<GainNode>;
  _pannerNode: Maybe<PannerNode>;
  _totalTime: number;
  _sampleRate: number;
  _loopStart: number;
  _loopLength: number;
  _startTime: number;
  _volume: number;
  _pitch: number;
  _pan: number;
  _endTimer: Maybe<number>;
  _loadListeners: (() => void)[];
  _stopListeners: (() => void)[];
  _autoPlay: boolean;

  readonly url: string;
  volume: number;
  pitch: number;
  pan: number;

  isReady(): boolean;
  isError(): boolean;
  isPlaying(): boolean;

  play(loop: boolean, offset: number): void;
  stop(): void;
  fadeIn(duration: number): void;
  fadeOut(duration: number): void;
  seek(): number;

  addLoadListener(listener: () => void): void;
  addStopListener(listener: () => void): void;

  _load(url: string): void;
  _onXhrLoad(xhr: XMLHttpRequest): void;

  _startPlaying(loop: boolean, offset: number): void;

  _createNodes(): void;
  _connectNodes(): void;
  _removeNode(): void;

  _createEndTimer(): void;
  _removeEndTimer(): void;

  _updatePanner(): void;

  _onLoad(): void;

  _readLoopComments(array: Uint8Array): void;
  _readOgg(array: Uint8Array): void;
  _readMp4(array: Uint8Array): void;
  _readMetaData(array: Uint8Array, index: number, size: number): void;

  _readLittleEndian(array: Uint8Array, index: number): number;
  _readBigEndian(array: Uint8Array, index: number): number;

  _readFourCharacters(array: Uint8Array, index: number): string;
}
