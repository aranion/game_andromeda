import dotenv from 'dotenv';

dotenv.config();

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '\\.(css|scss|png)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
  },
  setupFiles: ['jest-canvas-mock'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
};
