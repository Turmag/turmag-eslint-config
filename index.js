import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importRules from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import specialRules from 'eslint-plugin-turmag-special-rules';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vueLint from 'eslint-plugin-vue';

export default [
    // plugins
    {
        plugins: {
            unicorn,
            'import': importRules,
            perfectionist,
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
        semi: true,
        commaDangle: 'always-multiline',
        braceStyle: '1tbs',
        jsx: false,
    }),

    {
        rules: {
            'arrow-body-style': 'error',
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
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/no-mixed-operators': 'off',
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
            'vue/no-v-html': 'off',
            'vue/multi-word-component-names': 'off',
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
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: 3,
                    multiline: 1,
                },
            ],
            'vue/singleline-html-element-content-newline': ['warn', { ignores: ['pre', 'textarea'] }],
            'vue/multiline-html-element-content-newline': ['warn', { ignores: ['pre', 'textarea'] }],
            'unicorn/prefer-includes': 'error',
            'unicorn/prefer-spread': 'error',
            'unicorn/prevent-abbreviations': ['error', {
                replacements: {
                    props: false,
                    param: false,
                    params: false,
                },
            }],
            'import/no-duplicates': 'error',
            'import/newline-after-import': 'error',
            'perfectionist/sort-imports': ['error', {
                groups: [
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
                    ['parent', 'sibling', 'index'],
                ],
                customGroups: {
                    value: {
                        vue: ['^vue$'],
                        component: ['.vue$', 'icons$'],
                        composable: ['composable'],
                        store: ['store'],
                        constant: ['constant'],
                        method: ['helper', 'utils'],
                        api: ['api'],
                    },
                    type: { vue: ['^vue$'] },
                },
                newlinesBetween: 'never',
            }],
            'special-rules/prefer-true-attribute-shorthand': 'error',
            'special-rules/import-entities-by-column-or-line': ['error', { minProperties: 3 }],
        },
    },

    // overrides rules
    ...tseslint.config(
        {
            files: ['**/*.{js,mjs,json,json5,jsonc,vue}'],
            extends: [tseslint.configs.disableTypeChecked],
        },
    ),

    {
        files: ['*.vue', '**/*.vue'],
        rules: {
            'indent': 'off',
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
];
