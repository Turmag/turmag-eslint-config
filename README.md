# turmag-eslint-config

Turmag's reusable eslint-config

# Languages
#### Web #
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): [@stylistic](https://eslint.style) + [eslint](https://eslint.org)
* [TypeScript](https://www.typescriptlang.org): [@typescript-eslint](https://typescript-eslint.io) + [@stylistic](https://eslint.style) + [eslint](https://eslint.org)
* [Vue](https://vuejs.org): [@typescript-eslint](https://typescript-eslint.io) + [@stylistic](https://eslint.style) + [eslint](https://eslint.org) + [vueLint](https://eslint.vuejs.org)

#### Data #
* [JSON](https://json.org) & [JSONC](https://code.visualstudio.com/docs/languages/json#_json-with-comments): [eslint](https://eslint.org)

# Features
**Zero-Dependency**<br>
No need to install 3 plugins and 2 parsers: each language's latest plugin is bundled and configured.

**Zero-Config**<br>
No need to remember each plugin's parserOptions;

# Install
1. Install [eslint](https://eslint.org) and [turmag-eslint-config](https://www.npmjs.com/package/turmag-eslint-config).

```
npm i -D eslint@^9.15 turmag-eslint-config
```
```
yarn add -D eslint@^9.15 turmag-eslint-config
```
2. Create `eslint.config.js` in your project root.
3. In `eslint.config.js`:
* Import config from turmag-eslint-config

```
import config from `'turmag-eslint-config'`;
```
* Use this config with your optional rules:

```
import config from 'turmag-eslint-config';

export default [

    ...config,

    {
        rules: {
            ...
        },
    },
];
```