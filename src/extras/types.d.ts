declare type Sign = -1 | 0 | 1;

declare type Maybe<T> = T | null;

type Two<T> = [T, T];
type Three<T> = [T, T, T];
type Four<T> = [T, T, T, T];
type Five<T> = [T, T, T, T, T];
type Six<T> = [T, T, T, T, T, T];
type Seven<T> = [T, T, T, T, T, T, T];
type Eight<T> = [T, T, T, T, T, T, T, T];
type Nine<T> = [T, T, T, T, T, T, T, T, T];
type Ten<T> = [T, T, T, T, T, T, T, T, T, T];

type RGBAColor = [red: number, green: number, blue: number, alpha: number];
type RGBColor = [red: number, green: number, blue: number];

interface AllowOtherParameters {
  [key: string]: unknown;
}

type OneIndexedArray<T> = [undefined | null, ...T[]];
