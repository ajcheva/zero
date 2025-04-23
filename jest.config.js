// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',                // usa ts-jest
    testEnvironment: 'node',          // entorno Node
    roots: ['<rootDir>/server'],      // dónde buscar specs
    transform: {
      '^.+\\.ts$': 'ts-jest',         // transforma .ts con ts-jest
    },
    testMatch: [
      '**/?(*.)+(spec|test).[jt]s?(x)'
    ],
    "jest": {
        "collectCoverage": true,
        "coverageDirectory": "coverage",
        "coverageReporters": ["lcov", "text"]
      },
    moduleFileExtensions: ['ts','js','json','node'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    // si no quieres fallar sin tests:
    // passWithNoTests: true,
    detectOpenHandles: true,
    forceExit: true
  };
  