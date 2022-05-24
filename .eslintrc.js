module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-plusplus': 0,
    'class-methods-use-this': 0,
  },
};
