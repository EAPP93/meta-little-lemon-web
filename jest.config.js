module.exports = {
  // ...
  testMatch: ['**/*.test.jsx'],
  testEnvironment: 'jest-environment-jsdom',
  // ...
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.module\\.css$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
  // testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)']
}
