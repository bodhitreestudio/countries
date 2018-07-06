# @bodhiveggie/countries

> Provides countries' locales, names, dial codes

[![NPM Version][npm-image]][npm-url]

## Install

```bash
npm i -S @bodhiveggie/countries
```

## Usage

#### Get countries info

```js
import countries from '@bodhiveggie/countries/resources/countries.json';
// returns

/**
 * [
 *   {
 *     "name": "China (中国)",
 *     "iso2": "cn",
 *     "dialCode": "86",
 *     "priority": 0,
 *     "areaCodes": null
 *   }
 *   ...
 * ]
 */
```

#### Get country's flag image
```js
const flag = require('@bodhiveggie/countries/resources/flags/us.png');
```

#### Get country's locale from iso2
> NOTE: the locales used here were borrowed from ```validator``` pkg.
> Will default to 'en-US' if no locale was found for specified ```iso2```

```js
import { getLocale } from '@bodhiveggie/countries';

getLocale('us');
// => 'en-US'
```

#### Get All ISO2 country codes
```js
import { getAllIso2 } from '@bodhiveggie/countries';

getAllIso2();
// => ['US', 'CN', 'JP' ... ]
```

### Get All Flags Images
```
import { getFlagImages } from '@bodhiveggie/countries';
```

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/@bodhiveggie/countries.svg
[npm-url]: https://npmjs.org/package/@bodhiveggie/countries

