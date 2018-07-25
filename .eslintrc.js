// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'google',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        'brace-style': 'error',
        'callback-return': 1,
        'camelcase': 'off',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {'before': false, 'after': true}],
        'complexity': ['error', 25],
        'curly': 'error',
        'func-names': 'off',
        'func-call-spacing': ['error', 'never'],
        'handle-callback-err': 'error',
        'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
        'keyword-spacing': [2, {'before': true, 'after': true}],
        'max-len': [
            'error',
            120,
            4,
            {
                'ignorePattern': '/.+/',
                'ignoreUrls': true
            }
        ],
        'new-cap': 'off',
        'no-alert': 1,
        'no-const-assign': 'error',
        'no-duplicate-case': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-label-var': 'error',
        'no-multi-assign': 'off',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': ['error', {'max': 1}],
        'no-octal': 'error',
        'no-process-exit': 1,
        'no-redeclare': 1,
        'no-restricted-modules': 1,
        'no-self-assign': 1,
        'no-this-before-super': 'error',
        'no-unused-labels': 1,
        'no-useless-escape': 1,
        'no-unused-vars': 1,
        'padded-blocks': [1, {'blocks': 'never'}],
        'prefer-rest-params': 'off',
        'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
        'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never'}],
        'space-infix-ops': 'error',
        'space-in-parens': ['error', 'never'],
        'space-unary-ops': 'error',
        // doesn't work in node v4 :(
        'strict': 'off',
        'switch-colon-spacing': 1,
        'template-curly-spacing': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'yield-star-spacing': ['error', 'both'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};
