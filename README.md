# DeepStrike

There's lodash, there's underscore - and there's all the little helpers I wrote for my self.

## Install

The library is not available via `npm` yet but you can install it directly from GitHub:

```sh
$ npm install git+ssh://git@github.com/frederikheld/deepstrike.git
```

## Usage

Just require the package into a constant of your choice and access the functions via this constant:

```js
const ö = require('deepstrike')

const patched = ö.patchObject({ foo: 1, bar: 2 }, { bar: 3 })
```

The OG constant name for DeepStrike is the `ö` because it's fun to look at this guy who's so impressed about how much easier it is to work with _DeepStrike_ than writing all the functions themselves. If this character is not available on your keyboard, I recommend to use the name `ds` instead.
