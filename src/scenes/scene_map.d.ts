/**
 * The scene class of the map screen.
 */
declare class Scene_Map extends Scene_Base {
  initialize(constructorParams: unknown[]): void;

  _waitCount: number;
  _encounterEffectDuration: number;
  _mapLoaded: boolean;
  _touchCount: number;
  override _windowLayer: WindowLayer;
  _spriteset: Spriteset_Map;
  _mapNameWindow: Window_MapName;
  _messageWindow: Window_Message;

  override create(): void;
  override isReady(): boolean;
  onMapLoaded(): void;
  override start(): void;

  override update(): void;
  updateMainMultiply(): void;
  updateMain(): void;
  isFastForward(): boolean;

  override stop(): void;
  override isBusy(): boolean;
  override terminate(): void;

  needsFadeIn(): boolean;
  needsSlowFadeOut(): boolean;

  updateWaitCount(): boolean;
  updateDestination(): void;
  isMapTouchOk(): boolean;
  processMapTouch(): void;
  isSceneChangeOk(): boolean;
  updateScene(): void;

  createDisplayObjects(): void;
  createSpriteset(): void;
  createAllWindows(): void;
  createMapNameWindow(): void;
  createMessageWindow(): void;
  createScrollTextWindow(): void;

  updateTransferPlayer(): void;
  updateEncounter(): void;
  updateCallMenu(): void;
  isMenuEnabled(): boolean;
  isMenuCalled(): boolean;
  callMenu(): void;
  updateCallDebug(): void;
  isDebugCalled(): boolean;
  fadeInForTransfer(): void;
  fadeOutForTransfer(): void;

  launchBattle(): void;
  stopAudioOnBattleStart(): void;
  startEncounterEffect(): void;
  updateEncounterEffect(): void;
  snapForBattleBackground(): void;
  startFlashForEncounter(duration: number): void;
  encounterEffectSpeed(): number;
}
