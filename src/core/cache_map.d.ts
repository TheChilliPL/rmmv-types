declare class CacheMap {
  constructor(manager: object);

  manager: object;
  _inner: { [key: string]: any };
  _lastRemovedEntries: {} | any[];
  updateTicks: number;
  lastCheckTTL: number;
  delayCheckTTL: number;
  updateSeconds: number;

  checkTTL(): void;

  getItem(key: string): any;

  clear(): void;

  setItem(key: string, item: any): CacheEntry;

  update(ticks: number, delta: number): void;
}
