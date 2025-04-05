module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', 
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|expo|expo-linear-gradient|expo-sqlite|expo-file-system|expo-sharing|@expo|@ui-kitten|react-navigation|@react-navigation|react-native-safe-area-context|react-native-svg)/)',
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js', 
    'expo-linear-gradient': '<rootDir>/__mocks__/expo-linear-gradient.js', // Mock para expo-linear-gradient
  },
};