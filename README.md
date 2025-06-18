# React Native Basic App

A basic React Native app without Expo dependencies, perfect for getting your hands dirty with React Native development.

## Features

- Clean React Native setup without Expo
- Bottom tab navigation using React Navigation
- Dark theme UI
- Bottom sheet component for project creation
- TypeScript support
- Lucide React Native icons

## Prerequisites

- Node.js 18 or later
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Installation

1. Install dependencies:
```bash
npm install
```

2. For Android development, make sure you have Android Studio installed and configured.

3. For iOS development (macOS only), install CocoaPods dependencies:
```bash
cd ios && pod install
```

## Running the App

### Android
```bash
npm run android
```

### iOS (macOS only)
```bash
npm run ios
```

### Start Metro bundler
```bash
npm start
```

## Project Structure

```
src/
  App.tsx          # Main app component with navigation
  screens/         # Screen components
    ProjectsScreen.tsx
    ExploreScreen.tsx
    SettingsScreen.tsx
android/           # Android-specific files
ios/              # iOS-specific files
```

## Key Differences from Expo

- Uses React Navigation instead of Expo Router
- Standard React Native entry point (index.js)
- Native Android and iOS project files included
- No Expo-specific APIs or components
- Requires Android Studio/Xcode for building and running

## Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Next Steps

- Add more screens and navigation
- Implement state management (Redux, Zustand, etc.)
- Add networking with fetch or axios
- Integrate with native device features
- Set up testing with Jest and React Native Testing Library