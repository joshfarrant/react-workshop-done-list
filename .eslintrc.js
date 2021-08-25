module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: ['src/types/declarations/*'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
        'arrow-parens': 0,
        'consistent-return': 0,
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'no-unused-vars': 0,
        'prettier/prettier': 2,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/display-name': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-props-no-spreading': 0,
        'react/react-in-jsx-scope': 0,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
