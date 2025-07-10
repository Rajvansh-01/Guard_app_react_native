# Local Development Setup for Guard App

## Prerequisites

### 1. Install Node.js
- Download and install Node.js (v18 or later) from [nodejs.org](https://nodejs.org/)
- Verify installation: `node --version` and `npm --version`

### 2. Install Expo CLI
```bash
npm install -g @expo/cli
```

### 3. Install VS Code Extensions
- **ES7+ React/Redux/React-Native snippets**
- **React Native Tools**
- **Expo Tools**
- **TypeScript Importer**
- **Auto Rename Tag**

## Setup Steps

### 1. Clone/Download Your Project
```bash
# If using Git
git clone <your-repo-url>
cd GuardApp

# Or download and extract the project folder
```

### 2. Install Dependencies
```bash
cd GuardApp
npm install
```

### 3. Start Development Server
```bash
npm start
# or
expo start
```

## Running on Different Platforms

### Option 1: Expo Go App (Easiest)
1. Install **Expo Go** app on your phone:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. After running `expo start`, scan the QR code with:
   - **iOS**: Camera app
   - **Android**: Expo Go app

### Option 2: iOS Simulator (Mac only)
1. Install Xcode from Mac App Store
2. Install iOS Simulator:
   ```bash
   xcode-select --install
   ```
3. Run: `npm run ios` or press `i` in Expo CLI

### Option 3: Android Emulator
1. Install Android Studio
2. Set up Android Virtual Device (AVD)
3. Start emulator, then run: `npm run android` or press `a` in Expo CLI

### Option 4: Web Browser
```bash
npm run web
# or press 'w' in Expo CLI
```

## VS Code Configuration

### 1. Create .vscode/settings.json
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "editor.formatOnSave": true,
  "emmet.includeLanguages": {
    "typescript": "typescriptreact"
  }
}
```

### 2. Create .vscode/launch.json (for debugging)
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug React Native",
      "type": "reactnative",
      "request": "launch",
      "platform": "android"
    },
    {
      "name": "Debug React Native (iOS)",
      "type": "reactnative",
      "request": "launch",
      "platform": "ios"
    }
  ]
}
```

## Troubleshooting

### Common Issues:

1. **Port already in use**
   ```bash
   expo start --port 19001
   ```

2. **Metro bundler issues**
   ```bash
   expo start --clear
   ```

3. **Node modules issues**
   ```bash
   rm -rf node_modules
   npm install
   ```

4. **Expo CLI not found**
   ```bash
   npm install -g @expo/cli@latest
   ```

## Development Workflow

1. **Start the server**: `npm start`
2. **Open VS Code**: `code .`
3. **Edit files** in VS Code
4. **See changes** instantly on your device/emulator
5. **Use debugging tools** in VS Code

## Useful Commands

```bash
# Start development server
npm start

# Start with specific platform
npm run ios
npm run android
npm run web

# Clear cache and restart
expo start --clear

# Install new packages
npm install package-name

# Check Expo diagnostics
expo doctor
```

## Next Steps

1. Set up your development environment using the steps above
2. Start the Expo development server
3. Connect your phone via Expo Go app
4. Begin developing your Guard App!

The app will automatically reload when you make changes to the code in VS Code.