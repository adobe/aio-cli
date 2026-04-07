const aioLibConfig = require('@adobe/eslint-config-aio-lib-config')
const jestPlugin = require('eslint-plugin-jest')

module.exports = [
  ...aioLibConfig,
  {
    files: ['test/**/*.js', 'e2e/**/*.js'],
    ...jestPlugin.configs['flat/recommended'],
    languageOptions: {
      ...jestPlugin.configs['flat/recommended'].languageOptions,
      globals: {
        ...jestPlugin.configs['flat/recommended'].languageOptions.globals,
        setFetchMock: true
      }
    },
    rules: {
      ...jestPlugin.configs['flat/recommended'].rules,
      'n/no-unpublished-require': 0
    }
  }
]
