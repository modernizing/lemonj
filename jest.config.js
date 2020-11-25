module.exports = {
  transform: {
    '^.+\\.[j|t]s?$': 'esbuild-jest-transform',
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules/', 'dist/'],
};
