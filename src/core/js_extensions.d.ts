declare class JsExtensions {
    private constructor();
}

declare interface Number {
    clamp(min: number, max: number): number;

    mod(n: number): number;

    padZero(length: number): string;
}

declare interface String {
    format(...args: any): string;

    padZero(length: number): string;

    contains(string: string): boolean
}

declare interface Array<T> {
    equals(array: T[]): boolean;

    clone(): T[];

    contains(element: T): boolean;
}

declare interface Math {
    randomInt(max: number): number;
}