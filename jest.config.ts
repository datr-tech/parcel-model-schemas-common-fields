export default {
  coveragePathIgnorePatterns: ['<rootDir>/.jest', '<rootDir>/test/fixtures'],
  coverageReporters: ['lcov', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    '@app-pmscf/(.*)': '<rootDir>/src/$1',
    '@dist-pmscf': '<rootDir>/dist/index.js',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/.jest/setupPaths.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/.github/',
    '<rootDir>/.husky/',
    '<rootDir>/node_modules/',
  ],
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
