declare interface Plugin {
  name: string;
  status: boolean;
  description: string;
  parameters: Record<string, string>;
}

declare var $plugins: Plugin[];
