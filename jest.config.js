const ignores = ['/node_modules/', '/fixtures/', '__mocks__'];

const testDir = ['src/**/*.js'];

module.exports = {
  collectCoverageFrom: [...testDir],
  testMatch: ['**/test/**/*.js'],
  testPathIgnorePatterns: [...ignores],
  coveragePathIgnorePatterns: [...ignores, 'src/(umd|cjs|esm)-entry.js$'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  coverageDirectory: './coverage',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 100,
      statements: 100,
    },
  },
};
