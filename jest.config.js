module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/.jest/',
    '/.husky/',
    '/.storybook/',
    '/.vscode/',
    '/components_exemple/',
    '/coverage/',
    '/generators/',
    '/node_modules/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js'
  },
  collectCoverage: false,
  collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
