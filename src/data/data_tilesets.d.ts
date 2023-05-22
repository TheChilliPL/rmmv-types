declare type Data_Tilesets = OneIndexedArray<Data_Tileset>;

declare interface Data_Tileset {
    id: number;
    flags: number[];
    mode: number; //TODO
    name: string;
    tilesetNames: Nine<string>;
}
