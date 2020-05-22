const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['prettier', 'prettier/@typescript-eslint'],
    plugins: ['prettier', '@typescript-eslint'],
    env: {
        jest: true,
        browser: false,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': ['error', prettierOptions],

        'no-console': 1,
        'arrow-body-style': [2, 'as-needed'],

        //Typescript
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/ban-ts-ignore': 1,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/camelcase': 0,

        'import/order': 0,
        'import/imports-first': 0,
        'import/newline-after-import': 0,
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 0,
        'import/no-webpack-loader-syntax': 0,
        'import/prefer-default-export': 0,

        semi: [2, 'always'],
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        typescript: {
            alwaysTryTypes: true,
        },
    },
};
