declare class Decrypter {
  private constructor();

  static hasEncryptedImages: boolean;
  static hasEncryptedAudio: boolean;
  static _requestImgFile: [];
  static _headerLength: number;
  static _xhrOk: number;
  static _encryptionKey: string;
  static _ignoreList: string[];
  static SIGNATURE: string;
  static VER: string;
  static REMAIN: string;

  static checkImgIgnore(url: string): boolean;

  static decryptImg(url: string, bitmap: Bitmap): void;

  static decryptHTML5Audio(url: string, audio: AudioObject, pos?: number): void;

  static cutArrayHeader(arrayBuffer: ArrayBuffer, length: number): ArrayBuffer;

  static decryptArrayBuffer(arrayBuffer: ArrayBuffer): Maybe<Uint8Array>;

  static createBlobUrl(arrayBuffer: ArrayBuffer): string;

  static extToEncryptExt(url: string): string;

  // noinspection SpellCheckingInspection
  static readEncryptionkey(): void;
}
