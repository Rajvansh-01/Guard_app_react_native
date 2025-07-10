# Troubleshooting Guide for Guard App

## Error: ReadableStream is not defined

This error occurs when using an incompatible Node.js version. Here are the solutions:

### Solution 1: Update Node.js (Recommended)

1. **Check your current Node.js version:**
   ```bash
   node --version
   ```

2. **Download and install Node.js 18 or later:**
   - Go to [nodejs.org](https://nodejs.org/)
   - Download the **LTS version** (18.x or 20.x)
   - Install it (this will replace your current version)

3. **Verify the installation:**
   ```bash
   node --version
   npm --version
   ```

4. **Clear npm cache and reinstall:**
   ```bash
   cd GuardApp
   rm -rf node_modules
   rm package-lock.json
   npm install
   ```

5. **Try starting again:**
   ```bash
   npm start
   ```

### Solution 2: Use Node Version Manager (Alternative)

If you need to keep multiple Node.js versions:

**For Windows (using nvm-windows):**
1. Download nvm-windows from: https://github.com/coreybutler/nvm-windows
2. Install it
3. Open new command prompt as Administrator
4. Install Node.js 18:
   ```bash
   nvm install 18.19.0
   nvm use 18.19.0
   ```

**For Mac/Linux:**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then:
nvm install 18
nvm use 18
```

### Solution 3: Update Expo CLI

Sometimes updating Expo CLI helps:

```bash
npm uninstall -g @expo/cli
npm install -g @expo/cli@latest
```

### Solution 4: Alternative Start Methods

If the above doesn't work, try these alternatives:

```bash
# Method 1: Use npx
npx expo start

# Method 2: Use yarn instead of npm
npm install -g yarn
yarn install
yarn start

# Method 3: Start with specific options
expo start --tunnel
```

### Solution 5: Clean Installation

Complete clean reinstall:

```bash
# Navigate to your project folder
cd GuardApp

# Remove all dependencies
rm -rf node_modules
rm package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall everything
npm install

# Try starting
npm start
```

## Verification Steps

After fixing, verify everything works:

1. **Check Node.js version** (should be 18+ or 20+):
   ```bash
   node --version
   ```

2. **Check Expo CLI version**:
   ```bash
   expo --version
   ```

3. **Start the project**:
   ```bash
   cd GuardApp
   npm start
   ```

4. **Look for the QR code** in your terminal

## Expected Output

When working correctly, you should see:
```
› Metro waiting on exp://192.168.x.x:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)
```

## Still Having Issues?

If none of these solutions work:

1. **Check your system:**
   - Windows version (should be Windows 10+)
   - Available disk space
   - Antivirus software blocking Node.js

2. **Try alternative development:**
   - Use Expo Snack online: https://snack.expo.dev
   - Use CodeSandbox: https://codesandbox.io

3. **Get help:**
   - Expo Discord: https://chat.expo.dev
   - Stack Overflow with your specific error