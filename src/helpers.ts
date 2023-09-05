export const isMobile = /iPhone|Android/i.test(navigator.userAgent);
export const isTablet = /iPad|tablet/i.test(navigator.userAgent);
export const isSafari =
  navigator.vendor && navigator.vendor.indexOf('Apple') > -1;
export const iOS =
  [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ].includes(navigator.platform) ||
  // iPad on iOS 13 detection
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve(img);
    };

    img.onerror = err => {
      // The image couldn't be loaded.
      reject(err);
    };

    img.src = src;
  });
}

export function newContext(width: number, height: number) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas.getContext('2d')!;
}
