# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies (use `yarn`)

   ```bash
   yarn install
   ```

2. Configure PayTabs keys

   - Create a local `.env` file or set environment variables in your shell:

     ```env
     PAYTABS_PROFILE_ID=your_profile_id
     PAYTABS_SERVER_KEY=your_server_key
     PAYTABS_CLIENT_KEY=your_client_key
     ```

   - `constants/config.ts` reads `process.env.PAYTABS_*` and falls back to placeholders. Replace values above with the keys from your PayTabs account.

3. Start the Metro/dev server

   ```bash
   yarn start
   ```

   The Expo dev tools will open; from there you can run on emulator/device or use the commands below.

4. Run on Android (emulator or connected device)

   ```bash
   yarn android
   ```

   - Make sure Android Studio + an emulator is installed and running, or a device is connected with USB debugging enabled.

5. Run on iOS (macOS only)

   - Install CocoaPods dependencies first (from the project root):

     ```bash
     cd ios
     pod install --repo-update
     cd ..
     ```

   - Then start the app on the iOS simulator or a connected device:

     ```bash
     yarn ios
     ```

Notes

- Use `yarn start` to open the Expo dev tools for quick testing with Expo Go or development builds.
- For native modules (e.g., PayTabs SDK) you may need a development build or to run the native runner (`yarn android` / `yarn ios`). See the Expo docs for development builds: https://docs.expo.dev/develop/development-builds/introduction/.

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


pod deintegrate 
rm -rf Pods Podfile.lock
pod cache clean --all
pod install --repo-update
cd ..