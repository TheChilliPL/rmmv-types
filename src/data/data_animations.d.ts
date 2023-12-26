declare type Data_Animations = OneIndexedArray<Data_Animation>;

declare interface Data_AnimationTiming {
  flashColor: RGBAColor;
  flashDuration: number;
  flashScope: number;
  frame: number;
  se: Maybe<AudioObject>;
}

declare interface Data_Animation {
  id: number;
  animation1Hue: number;
  animation1Name: string;
  animation2Hue: number;
  animation2Name: string;
  frames: Eight<number>[][];
  name: string;
  position: number;
  timings: Data_AnimationTiming[];
}
