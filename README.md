# react-native-code-push-expo-plugin
A plugin for use with Expo and react-native-code-push

## Setup
1. Copy the files from this repo and place them into your Expo app directory.
2. Add the following to your Expo app config
3. Adjust the plugin files as needed for your use case. This will not be a plug-and-play situation in most cases.

### Plugin Installation for Expo (Android)

1. Open your Expo app config file (app.config.json or app.config.js instead of app.json).

2. Insert the following into the plugins section of your config (Don't duplicate configuration, if the './app.plugin' item already exists, simply add the android portion.). Create the plugins section if it doesn't already exist.

    ```javascript
    "plugins": [
      [
        './app.plugin',
        {
          android: {
            CodePushDeploymentKey: 'YOUR_ANDROID_CODE_PUSH_KEY',
          }
        }
      ]
    ]
    ```

3. Replace `YOUR_ANDROID_CODE_PUSH_KEY` with the Deployment key.

4. Run `npx expo prebuild` to regenerate your native code with the codepush dependencies.

### Plugin Installation for Expo (IOS)

React Native Code Push comes packaged with a plugin to automate some of the setup process:

1. Open your Expo app config file (app.config.json or app.config.js instead of app.json).

2. Insert the following into the plugins section of your config (Don't duplicate configuration, if the './app.plugin' item already exists, simply add the ios portion.). Create the plugins section if it doesn't already exist.

    ```javascript
    "plugins": [
      [
        './app.plugin',
        {
          ios: {
            CodePushDeploymentKey: 'YOUR_IOS_CODE_PUSH_KEY',
          },
        }
      ]
    ]
    ```

3. Replace `YOUR_IOS_CODE_PUSH_KEY` with the Deployment key.

4. Run `npx expo prebuild` to regenerate your native code with the codepush dependencies.
