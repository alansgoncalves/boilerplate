module.exports = {
  testEnvironment: 'jsdom', //Environment to run the tests
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //Ignore node_modules and .next folders from test coverage
  collectCoverage: true, //Collect coverage information from all files
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories',
    '!src/types/**',
    '!src/styles/**',
    '!src/stories/**',
    '!src/components/Main/stories.tsx'
  ], //Ignore stories files from test coverage
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], //Setup files to run before each test
  modulePaths: ['<rootDir>/src/'], //Define the path to import modules
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  } //Transform files to run the tests
}
