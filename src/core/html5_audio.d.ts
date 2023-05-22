interface Html5AudioConstructor extends GameAudioBuffer {
    _initialized: boolean;
    _unlocked: false;
    _audioElement: Maybe<HTMLAudioElement>;
    _gainTweenInterval: Maybe<number>;
    _tweenGain: number;
    _tweenTargetGain: number;
    _tweenGainStep: number;
    _staticSePath: Maybe<string>;

    setup(url: string): void;

    _url?: string;

    initialize(): boolean;

    _setupEventHandlers(): void;
    _onTouchStart(event: TouchEvent): void;
    _onVisibilityChange(): void;
    _onLoadedData(): void;
    _onError(): void;
    _onEnded(): void;
    _onHide(): void;
    _onShow(): void;

    clear(): void;

    _volume: number;
    _loadListeners: (() => void)[];
    _hasError: boolean;
    _autoPlay: boolean;
    _isLoading: boolean;
    _buffered: boolean;

    setStaticSe(url: string): void;

    readonly url: string;
    volume: number;

    isReady(): boolean;
    isError(): boolean;
    isPlaying(): boolean;

    play(loop: boolean, offset: number): void;
    stop(): void;
    fadeIn(duration: number): void;
    fadeOut(duration: number): void;
    seek(): number;

    addLoadListener(listener: () => void): void;

    _load(url: string): void;

    _startPlaying(loop: boolean, offset: number): void;

    _onLoad(): void;

    _startGainTween(duration: number): void;
    _applyTweenValue(volume: number): void;
}

declare var Html5Audio: Html5AudioConstructor;