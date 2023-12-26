//TODO Ensure Circular definition is correct
declare type Circular<T> = [key: keyof T, owner: T, value: T[keyof T]];

//TODO Add more generics
declare class JsonEx {
  private constructor();

  static maxDepth: number;

  static _id: number;
  static _generateId(): number;

  static stringify(object: any): string;

  static _restoreCircularReference(circulars: Circular<any>[]): void;

  static parse(json: string): any;

  static _linkCircularReference(
    contents: object,
    circulars: Circular<any>[],
    registry: object,
  ): void;

  static _cleanMetadata(object: any): void;

  static makeDeepCopy<T extends object | []>(object: T): T;

  static _encode(value: any, circular: Circular<any>[], depth: number): any;

  static _decode(value: any, circular: Circular<any>[], depth: number): any;

  static _getConstructorName(value: any): string;

  static _resetPrototype(value: any, prototype: any): any;
}
