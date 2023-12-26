declare class CacheEntry {
  constructor(cache: CacheMap, key: string, item: string);

  cache: CacheMap;
  key: string;
  item: string;
  cached: boolean;
  touchTicks: number;
  touchSeconds: number;
  ttlTicks: number;
  ttlSeconds: number;
  freedByTTL: boolean;

  free(byTTL?: boolean): void;

  allocate(): CacheEntry;

  setTimeToLive(ticks?: number, seconds?: number): CacheEntry;

  isStillAlive(): boolean;

  touch(): void;
}
