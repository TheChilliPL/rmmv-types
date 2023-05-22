declare type Sign = -1 | 0 | 1;

type Maybe<T> = T | null;

type Two<T> = [T, T];
type Three<T> = [T, T, T];
type Four<T> = [T, T, T, T];
type Five<T> = [T, T, T, T, T];
type Six<T> = [T, T, T, T, T, T];
type Seven<T> = [T, T, T, T, T ,T ,T];
type Eight<T> = [T, T, T, T, T, T, T, T];
type Nine<T> = [T, T, T, T, T, T, T, T, T];
type Ten<T> = [T, T, T, T, T, T, T, T, T, T];

type RGBAColor = [number, number, number, number];
type RGBColor = [number, number, number];

interface AllowOtherParameters {
    [key: string]: any;
}

type OneIndexedArray<T> = [undefined | null, ...T[]];
