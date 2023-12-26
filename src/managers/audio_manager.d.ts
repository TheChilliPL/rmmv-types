declare interface GameAudioBuffer {
  clear(): void;

  readonly url: string;
  volume: number;
  pitch?: number;
  pan?: number;

  isReady(): boolean;
  isError(): boolean;
  isPlaying(): boolean;

  play(loop: boolean, offset: number): void;
  stop(): void;
  fadeIn(duration: number): void;
  fadeOut(duration: number): void;
  seek(): number;

  addLoadListener(listener: () => void): void;
}

declare interface AudioObject {
  name: string;
  volume: number;
  pitch: number;
  pan?: number;
}

declare interface AudioState extends AudioObject {
  pos?: number;
}

declare class AudioManager {
  private constructor();

  static _masterVolume: number;
  static _bgmVolume: number;
  static _bgsVolume: number;
  static _meVolume: number;
  static _seVolume: number;
  static _currentBgm: Maybe<AudioState>;
  static _currentBgs: Maybe<AudioState>;
  static _bgmBuffer: Maybe<GameAudioBuffer>;
  static _bgsBuffer: Maybe<GameAudioBuffer>;
  static _meBuffer: Maybe<GameAudioBuffer>;
  static _seBuffers: GameAudioBuffer[];
  static _staticBuffers: GameAudioBuffer[];
  static _replayFadeTime: number;
  static _path: string;
  static _blobUrl: null;

  static masterVolume: number;
  static bgmVolume: number;
  static bgsVolume: number;
  static meVolume: number;
  static seVolume: number;

  static playBgm(bgm: AudioObject, pos?: number): void;
  static playEncryptedBgm(bgm: AudioObject, pos?: number): void;
  static createDecryptBuffer(url: string, bgm: AudioObject, pos?: number): void;
  static replayBgm(bgm: AudioState): void;
  static isCurrentBgm(bgm: AudioObject): boolean;
  static updateBgmParameters(bgm: AudioObject): void;
  static updateCurrentBgm(bgm: AudioObject, pos: number): void;
  static stopBgm(): void;
  static fadeOutBgm(duration: number): void;
  static fadeInBgm(duration: number): void;

  static playBgs(bgs: AudioObject, pos?: number): void;
  static replayBgs(bgs: AudioState): void;
  static isCurrentBgs(bgs: AudioObject): boolean;
  static updateBgsParameters(bgs: AudioObject): void;
  static updateCurrentBgs(bgs: AudioObject, pos: number): void;
  static stopBgs(): void;
  static fadeOutBgs(duration: number): void;
  static fadeInBgs(duration: number): void;

  static playMe(me: AudioObject): void;
  static updateMeParameters(me: AudioObject): void;
  static fadeOutMe(duration: number): void;
  static stopMe(): void;

  static playSe(se: AudioObject): void;
  static updateSeParameters(buffer: GameAudioBuffer, se: AudioObject): void;
  static stopSe(): void;
  static playStaticSe(se: AudioObject): void;
  static loadStaticSe(se: AudioObject): void;
  static isStaticSe(se: AudioObject): boolean;

  static stopAll(): void;

  static saveBgm(): AudioState;
  static saveBgs(): AudioState;

  static makeEmptyAudioObject(): AudioObject;

  static createBuffer(folder: string, name: string): GameAudioBuffer;
  static updateBufferParameters(
    buffer: GameAudioBuffer,
    configVolume: number,
    audio: AudioObject,
  ): void;

  static audioFileExt(): string;
  static shouldUseHtml5Audio(): boolean;

  static checkErrors(): void;
  static checkWebAudioError(webAudio: GameAudioBuffer): void;
}
