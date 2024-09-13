/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {



  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transformIgnorePatterns: ['/node_modules/'],
  verbose: true,
};