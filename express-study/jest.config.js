export default {
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.spec.js'],
};
