declare type Data_Animations = OneIndexedArray<Data_Animation>;

declare interface Data_AnimationTiming {
  flashColor: RGBAColor;
  flashDuration: number;
  flashScope: number;
  frame: number;
  se: Maybe<AudioObject>;
}

declare const enum Data_AnimationCellMirror {
  No,
  Yes,
}

declare type Data_AnimationCell = [
  pattern: number,
  x: number,
  y: number,
  /** Range from 0 to 100. */
  scale: number,
  /** Range from 0 to 360. */
  rotation: number,
  mirror: Data_AnimationCellMirror,
  /** Range from 0 to 255. */
  opacity: number,
  blendMode: PIXI.BLEND_MODES,
];

declare type Data_AnimationFrame = Data_AnimationCell[];

declare interface Data_Animation {
  id: number;
  animation1Hue: number;
  animation1Name: string;
  animation2Hue: number;
  animation2Name: string;
  frames: Data_AnimationFrame[];
  name: string;
  position: number;
  timings: Data_AnimationTiming[];
}
