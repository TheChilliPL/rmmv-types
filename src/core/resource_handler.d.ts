declare class ResourceHandler {
  private constructor();

  static _reloaders: (() => void)[];
  static _defaultRetryInterval: number[];

  static createLoader(
    url: string,
    retryMethod: () => void,
    resignMethod?: () => void,
    retryInterval?: number,
  ): () => void;

  static exists(): boolean;

  static retry(): void;
}
