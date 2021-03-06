module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
    ],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'max-len': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'linebreak-style': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'indent': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'eol-last': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-alert': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'padded-blocks': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'new-cap': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  };
  