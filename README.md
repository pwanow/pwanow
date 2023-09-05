<h1 align="center">pwanow</h1>

<p align="center">
A collection of hacks to make creating native-like PWAs easier
</p>

<p align="center">
<a href="https://npmjs.com/package/pwanow">
<img alt="npm" src="https://img.shields.io/npm/v/pwanow">
<img alt="npm" src="https://img.shields.io/npm/dw/pwanow">
<img alt="NPM" src="https://img.shields.io/npm/l/pwanow">
</a>
</p>

## Example usage

```ts
import { pwanow, splash } from 'pwanow';

pwanow({
  iconUrl: './favicon.png',
  backgroundColor: '#000000',
}).use(splash);
```
