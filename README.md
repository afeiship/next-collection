# next-collection
> Collection for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-collection
```

## apis
| api | params | description   |
|-----|--------|---------------|
| union | -      | Union collection. |
| intersect | -      | Collection intersection. |
| diff | -      | Collection difference. |
| minus | -      | Collection except other(minus). |

## usage
```js
import NxCollection from '@jswork/next-collection';

const arr1 = [1, 2, 3]
const arr2 = [1, 5, 2, 6]

const col1 = nx.Collection.minus(arr1, arr2);
const col2 = nx.Collection.minus(arr2, arr1);

// result:
// [3]
// [5, 6]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-collection/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-collection
[version-url]: https://npmjs.org/package/@jswork/next-collection

[license-image]: https://img.shields.io/npm/l/@jswork/next-collection
[license-url]: https://github.com/afeiship/next-collection/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-collection
[size-url]: https://github.com/afeiship/next-collection/blob/master/dist/next-collection.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-collection
[download-url]: https://www.npmjs.com/package/@jswork/next-collection
