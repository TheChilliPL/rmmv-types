declare class Utils {
  private constructor();

  static RPGMAKER_NAME: "MV";
  static RPGMAKER_VERSION: string;

  static isOptionValid(name: string): boolean;

  static isNwjs(): boolean;
  static isMobileDevice(): boolean;
  static isMobileSafari(): boolean;
  static isAndroidChrome(): boolean;

  static canReadGameFiles(): boolean;

  static rgbToCssColor(r: number, g: number, b: number): string;

  static generateRuntimeId(): number;

  static isSupportPassiveEvent(): boolean;
}
