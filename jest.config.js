module.exports = {
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/**/env.ts',
    '!<rootDir>/**/*protocols.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  // preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
