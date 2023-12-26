declare interface ImageCacheItem {
  bitmap: Bitmap;
  touch: number;
  key: string;
  reservationId?: number;
}

declare class ImageCache {
  limit: number;

  initialize(): void;

  _items: { [key: string]: ImageCacheItem };

  add(key: string, value: Bitmap): void;

  get(key: string): Maybe<Bitmap>;

  reserve(key: string, value: Bitmap, reservationId: number): void;

  releaseReservation(reservationId: number): void;

  isReady(): boolean;

  getErrorBitmap(): Bitmap;
}
