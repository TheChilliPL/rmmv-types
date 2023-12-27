declare type Data_Actors = OneIndexedArray<Data_Actor>;

declare interface Data_Actor {
  id: number;
  battlerName: string;
  characterIndex: number;
  characterName: string;
  classId: number;
  equips: [
    weapon: number,
    shield: number,
    head: number,
    body: number,
    accessory: number,
  ];
  faceIndex: number;
  faceName: string;
  traits: Data_Trait[];
  initialLevel: number;
  maxLevel: number;
  name: string;
  nickname: string;
  note: string;
  profile: string;
}
