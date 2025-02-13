import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
    {
        ignores: [
            '.next/',
            '**/node_modules',
            '**/dist',
            '**/build',
            '**/public',
            '**/.gitignore'
        ]
    },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            'next/core-web-vitals',
            'next/typescript',
            eslintPluginPrettierRecommended[[3, 11, 14]]
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: prettier
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ],
            'prettier/prettier': 'warn'[[11]]
        }
    }
);
