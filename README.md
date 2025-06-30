# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Tips

### Toggle Light / Dark Mode on Android

```shell
# Enable dark mode
adb shell "cmd uimode night yes"
# Disable dark mode
adb shell "cmd uimode night no"
```

> Make sure you've installed `adb` globally by [downloading it](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) and adding it to your PC's `PATH` variable. On Windows, go to Start and search for Edit Environment Variables. Find the `PATH` variable, edit it, and add the folder `adb.exe` is inside of to the list. On Mac you'd do this in your bash profile.
