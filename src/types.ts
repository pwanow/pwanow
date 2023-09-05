export interface PWANowOptions {
  /**
   * Default: "#FFFFFF"
   */
  themeColor?: string;

  /**
   * Default: "#FFFFFF"
   */
  backgroundColor?: string;

  /**
   * Default: undefined
   */
  iconUrl?: string;
}

export type PWANowPlugin = (options: PWANowOptions) => void;
