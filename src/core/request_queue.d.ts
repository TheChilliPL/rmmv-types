interface RequestQueueItem {
    key: string;
    value: Bitmap;
}

declare class RequestQueue {
    initialize(): void;

    _queue: RequestQueueItem[];

    enqueue(key: string, value: Bitmap): void;

    update(): void;

    raisePriority(key: string): void;

    clear(): void;
}