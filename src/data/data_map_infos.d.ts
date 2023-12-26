declare type Data_MapInfos = OneIndexedArray<Data_MapInfo>;

declare interface Data_MapInfo {
  id: number;
  expanded: boolean;
  name: string;
  order: number;
  parentId: number;
  scrollX: number;
  scrollY: number;
}
