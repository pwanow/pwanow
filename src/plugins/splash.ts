import { iOS, loadImage, newContext } from '../helpers.js';
import { PWANowOptions } from '../types.js';

function generateSplash(
  width: number,
  height: number,
  icon?: HTMLImageElement,
  backgroundColor = '#FFFFFF',
) {
  const idealSplashIconSize = 128;
  const minimumSplashIconSize = 48;
  const splashIconPadding = 20;

  const ratio = window.devicePixelRatio;
  const ctx = newContext(width * ratio, height * ratio);

  ctx.scale(ratio, ratio);
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
  ctx.translate(width / 2, (height - splashIconPadding) / 2);

  if (icon) {
    let iconWidth = icon.width / ratio;
    let iconHeight = icon.height / ratio;
    if (iconHeight > idealSplashIconSize) {
      iconWidth /= iconHeight / idealSplashIconSize;
      iconHeight = idealSplashIconSize;
    }

    if (
      iconWidth >= minimumSplashIconSize &&
      iconHeight >= minimumSplashIconSize
    ) {
      ctx.drawImage(
        icon,
        iconWidth / -2,
        iconHeight / -2,
        iconWidth,
        iconHeight,
      );
      ctx.translate(0, iconHeight / 2 + splashIconPadding);
    }
  }

  return ctx.canvas.toDataURL();
}

function appendSplash(orientation: string, data: string) {
  const link = document.createElement('link');
  link.setAttribute('rel', 'apple-touch-startup-image');
  link.setAttribute('media', `(orientation: ${orientation})`);
  link.setAttribute('href', data);
  document.head.appendChild(link);
}

/**
 * Generates iOS splash screens.
 */
export async function splash({ iconUrl, backgroundColor }: PWANowOptions) {
  // We only want to add this for iOS.
  if (!iOS) {
    return;
  }

  const icon = iconUrl ? await loadImage(iconUrl) : undefined;
  const { width, height } = window.screen;

  setTimeout(() => {
    appendSplash(
      'portrait',
      generateSplash(width, height, icon, backgroundColor),
    );
  }, 10);

  setTimeout(() => {
    appendSplash(
      'landscape',
      generateSplash(height, width, icon, backgroundColor),
    );
  }, 10);
}
