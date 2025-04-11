import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import importRules from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import sonarjs from 'eslint-plugin-sonarjs';
import specialRules from 'eslint-plugin-turmag-special-rules';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vueLint from 'eslint-plugin-vue';

export default [
    // plugins
    {
        plugins: {
            '@stylistic/ts': stylisticTs,
            unicorn,
            import: importRules,
            perfectionist,
            sonarjs,
            'special-rules': specialRules,
        },
    },

    // config parsers
    {
        files: ['*.vue', '**/*.vue', '*.ts', '**/*.ts'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                sourceType: 'module',
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions: ['.vue'],
            },
        },
    },

    // config envs
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    // syntax rules
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...vueLint.configs['flat/recommended'],

    // code style rules
    stylistic.configs['disable-legacy'],
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        quoteProps: 'as-needed',
        semi: true,
        commaDangle: 'always-multiline',
        braceStyle: '1tbs',
        jsx: false,
    }),

    {
        rules: {
            'arrow-body-style': 'error',
            eqeqeq: 'error',
            'no-extra-semi': 'error',
            'no-extra-parens': 'error',
            'no-unneeded-ternary': 'error',
            'object-curly-newline': ['error', {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 3,
                },
                ObjectPattern: { multiline: true },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
            }],
            'object-property-newline': 'error',
            'object-shorthand': 'error',
            'prefer-const': 'error',
            'prefer-template': 'error',
            'require-await': 'error',
            'dot-notation': 'error',
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/no-mixed-operators': 'off',
            '@stylistic/ts/padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: ['enum', 'interface', 'type'],
                    next: ['enum', 'interface', 'type', 'export'],
                },
            ],
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-misused-promises': [
                'error',
                { checksVoidReturn: false },
            ],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'interface',
                    format: ['PascalCase'],
                    prefix: ['I'],
                },
                {
                    selector: 'typeParameter',
                    format: ['PascalCase'],
                    prefix: ['T'],
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                    prefix: ['T'],
                },
                {
                    selector: 'enum',
                    format: ['PascalCase'],
                },
                {
                    selector: 'enumMember',
                    format: ['PascalCase'],
                },
                {
                    selector: 'variable',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                },
                {
                    selector: 'variable',
                    types: ['boolean'],
                    format: ['camelCase', 'UPPER_CASE'],
                    custom: {
                        regex: '^(is|has|disabled|required|loading)[a-zA-Z_]*',
                        match: true,
                    },
                },
            ],
            'vue/custom-event-name-casing': ['error', 'kebab-case'],
            'vue/html-indent': [
                'error',
                4,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: [],
                },
            ],
            'vue/no-extra-parens': 'error',
            'vue/no-unused-refs': 'error',
            'vue/no-useless-v-bind': 'error',
            'vue/no-v-html': 'off',
            'vue/padding-line-between-blocks': 'error',
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: 3,
                    multiline: 1,
                },
            ],
            'vue/multi-word-component-names': 'off',
            'vue/multiline-html-element-content-newline': ['warn', { ignores: ['pre', 'textarea'] }],
            'vue/singleline-html-element-content-newline': ['warn', { ignores: ['pre', 'textarea'] }],
            'vue/object-curly-spacing': ['error', 'always'],
            'vue/prefer-template': 'error',
            'vue/require-typed-ref': 'error',
            'unicorn/prefer-includes': 'error',
            'unicorn/prefer-spread': 'error',
            'unicorn/prevent-abbreviations': ['error', {
                extendDefaultReplacements: false,
                replacements: {
                    btn: { button: true },
                    e: {
                        error: true,
                        event: true,
                    },
                    el: { element: true },
                    elem: { element: true },
                    elems: { elements: true },
                    err: { error: true },
                    res: {
                        resource: true,
                        response: true,
                        result: true,
                    },
                    retval: { returnValue: true },
                    val: { value: true },
                    ver: { version: true },
                },
            }],
            'import/no-duplicates': ['error', { 'prefer-inline': true }],
            'import/newline-after-import': 'error',
            'perfectionist/sort-imports': ['error', {
                groups: [
                    ['parent', 'sibling', 'index'],
                    'side-effect-style',
                    'unknown',
                    ['builtin', 'external'],
                    'vue',
                    'component',
                    'composable',
                    'store',
                    'type',
                    'constant',
                    'method',
                    'api',
                ],
                customGroups: {
                    value: {
                        vue: ['^vue$'],
                        component: ['.vue$', 'icons$', 'kit$'],
                        composable: ['(c|C)omposable'],
                        store: ['(s|S)tore'],
                        constant: ['(c|C)onstant'],
                        method: ['(h|H)elper', '(u|U)tils'],
                        api: ['(a|A)pi'],
                    },
                    type: { vue: ['^vue$'] },
                },
                newlinesBetween: 'never',
            }],
            'perfectionist/sort-named-imports': 'error',
            'perfectionist/sort-interfaces': 'error',
            'perfectionist/sort-object-types': 'error',
            'perfectionist/sort-objects': 'error',
            'sonarjs/no-inverted-boolean-check': 'error',
            'sonarjs/no-misleading-array-reverse': 'error',
            'sonarjs/prefer-immediate-return': 'error',
            'sonarjs/prefer-single-boolean-return': 'error',
            'sonarjs/reduce-initial-value': 'error',
            'special-rules/prefer-true-attribute-shorthand': 'error',
            'special-rules/import-entities-by-column-or-line': ['error', { minProperties: 3 }],
            'special-rules/variable-entities-by-column-or-line': ['error', { minProperties: 3 }],
        },
    },

    // overrides rules
    ...tseslint.config(
        {
            files: ['**/*.{js,mjs,cjs,json,json5,jsonc,vue}'],
            extends: [tseslint.configs.disableTypeChecked],
        },
    ),

    {
        files: ['**/*.cjs'],
        rules: { '@typescript-eslint/no-require-imports': 'off' },
    },

    {
        files: ['*.vue', '**/*.vue'],
        rules: {
            indent: 'off',
            'vue/match-component-file-name': [
                'error',
                {
                    extensions: ['vue'],
                    shouldMatchCase: false,
                },
            ],
        },
    },

    {
        files: ['**/*.{json,json5,jsonc}'],
        rules: {
            '@stylistic/quote-props': ['error', 'always'],
            '@stylistic/quotes': 'off',
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/semi': ['error', 'never'],
        },
    },

    {
        files: ['eslint*', 'stylelint*', 'package.json', '*config.js*', '*config.ts', '*/**/*store*', '*/**/router*', '*/**/*.json*'],
        rules: { 'perfectionist/sort-objects': 'off' },
    },
];
