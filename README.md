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
No need to install 3 plugins and 3 parsers: each language's latest plugin is bundled and configured.

**Zero-Config**<br>
No need to remember each plugin's parserOptions;

# Install
1. You'll first need to install [ESLint](https://eslint.org):
```
npm i eslint@^9.15 --save-dev

# Or run this to use yarn
yarn add eslint@^9.15 --dev

# Or run this to use pnpm
pnpm add eslint@^9.15 --save-dev
```

2. Install [turmag-eslint-config](https://www.npmjs.com/package/turmag-eslint-config).

```
npm i turmag-eslint-config --save-dev

# Or run this to use yarn
yarn add turmag-eslint-config --dev

# Or run this to use pnpm
pnpm add turmag-eslint-config --save-dev
```

3. Create `eslint.config.js` in your project root.
4. In `eslint.config.js`:
* Import config from turmag-eslint-config

```
import config from `'turmag-eslint-config'`;
```
* Use this config with your optional rules:

```
import config from 'turmag-eslint-config';

export default [

    ...config,

    // Your rules there
    {
        rules: {
            ...
        },
    },
];
```