module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    testMatch: ['<rootDir>/server/**/*.spec.ts', '<rootDir>/src/**/*.spec.ts'],
  };
  