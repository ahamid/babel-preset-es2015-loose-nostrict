# babel-preset-es2015-loose

Babel preset that uses [modify-babel-preset] to modify [babel-preset-es2015-loose]
and disable `use strict` for commonjs modules.

## Install

Install both this preset, the core 'babel-preset-es2015', and 'babel-preset-es2015-loose' that it modifies:

```sh
$ npm install --save-dev babel-preset-es2015-loose-nostrict babel-preset-es2015-loose babel-preset-es2015
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-loose-nostrict"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-loose-nostrict
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-loose-nostrict"]
})
```

[babel-preset-es2015]: https://www.npmjs.com/package/babel-preset-es2015
[babel-preset-es2015-loose]: https://github.com/bkonkle/babel-preset-es2015-loose
[loose mode]: http://www.2ality.com/2015/12/babel6-loose-mode.html
[modify-babel-preset]: https://github.com/developit/modify-babel-preset
