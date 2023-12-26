declare class PluginParameters {
  [key: string]: string;
}

declare class PluginManager {
  private constructor();

  static _path: string;
  static _scripts: HTMLScriptElement[];
  static _errorUrls: string[];
  static _parameters: { [plugin: string]: PluginParameters };

  static setup(plugins: []): void;
  static checkErrors(): void;
  static parameters(name: string): PluginParameters;
  static setParameters(name: string, parameters: PluginParameters): void;

  static loadScript(name: string): void;
  static onError(e: ErrorEvent): void;
}
