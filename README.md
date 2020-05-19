# @bodhitree/countries

> Provides countries' locales, names, dial codes


## Usage

#### Get countries info

```js
import countries from '@bodhitree/countries/resources/countries.json';
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
const flag = require('@bodhitree/countries/resources/flags/us.png');
```

#### Get country's locale from iso2
> NOTE: the locales used here were borrowed from ```validator``` pkg.
> Will default to 'en-US' if no locale was found for specified ```iso2```

```js
import { getLocale } from '@bodhitree/countries';

getLocale('us');
// => 'en-US'
```

#### Get All locales
```js
import { getAllLocales } from '@bodhitree/countries';
```

#### Get All ISO2 country codes
```js
import { getAllIso2 } from '@bodhitree/countries';

getAllIso2();
// => ['US', 'CN', 'JP' ... ]
```

### Get All Flags Images
```
import { getFlagImages } from '@bodhitree/countries';
```

