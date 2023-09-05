import { PWANowOptions, PWANowPlugin } from './types.js';

class PWANow {
  private options: PWANowOptions;

  constructor(options?: PWANowOptions) {
    this.options = {
      themeColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      ...options,
    };
  }

  use(plugin: PWANowPlugin) {
    plugin(this.options);
  }
}

export function pwanow(options?: PWANowOptions) {
  return new PWANow(options);
}

export * from './types.js';
export * from './plugins/index.js';
