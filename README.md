refactor this documentation adding some emojis and adjust some english mistakes:

# react-native-code-push-expo-plugin
A plug-in for using react-native-code-push with Expo managed/bare workflow 

## Setup

1. Copy the files from this repo and place them into your Expo app directory.
2. Install the appcenter-cli:
```ssh
npm install -g appcenter-cli
```
3. Install codepush library:
```ssh
npm install react-native-code-push
```
4. Create an *app.plugin.js* file and add the following code:
```javascript
module.exports = require("./plugin/build");
```
3. Add the following to your Expo app config
4. Adjust the plugin files as needed for your use case. This will not be a plug-and-play situation in most cases.

### Plugin Installation for Expo (Android)

1. Open your Expo app config file (*app.json*).

2. Insert the following into the plugins section of your config (Don't duplicate configuration, if the './app.plugin' item already exists, simply add the android portion.). Create the plugins section if it doesn't already exist.

    ```javascript
    "plugins":[
      [
        "./app.plugin",
        {
          "android": {
            "CodePushDeploymentKey": "YOUR_ANDROID_CODE_PUSH_KEY",
          }
        }
      ]
    ]
    ```

3. Replace `YOUR_ANDROID_CODE_PUSH_KEY` with the Deployment key.
4. To release a signed release replace your CodePushPublicKey with a public key (https://github.com/microsoft/code-push/tree/v3.0.1/cli#code-signing):

    ```javascript
    "plugins":[
      [
        "./app.plugin",
        {
          "android": {
            "CodePushDeploymentKey": "YOUR_ANDROID_CODE_PUSH_KEY",
            "CodePushPublicKey": "-----BEGIN PUBLIC KEY-----\nYOUR_PUBLIC_KEY\n-----END PUBLIC KEY-----"
          }
        }
      ]
    ]
    ```

5. Run `npx expo prebuild` to regenerate your native code with the codepush dependencies.
6. To generate an update use the following code:
```ssh
appcenter codepush release-react -a <ownerName>/MyApp -d Production -k private.pem
```

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
5. To generate an update use the following code:
```ssh
appcenter codepush release-react -a <ownerName>/MyApp -d Production -k private.pem
```
