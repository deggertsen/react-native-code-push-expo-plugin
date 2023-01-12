"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAndroidSettingsDependency = void 0;
const config_plugins_1 = require("@expo/config-plugins");
/**
 * Update `<project>/settings.gradle` by adding react-native-code-push
 */
function applySettings(gradleSettings) {
    const codePushSettings = `include ':app', ':react-native-code-push'\nproject(':react-native-code-push').projectDir = new File(["node", "--print", "require.resolve('react-native-code-push/package.json')"].execute(null, rootDir).text.trim(), "../android/app")`;
    // Make sure the project does not have the settings already
    if (!gradleSettings.includes(`include ':app', ':react-native-code-push'`)) {
        return gradleSettings + codePushSettings;
    }
    return gradleSettings;
}
const withAndroidSettingsDependency = (config) => {
    return (0, config_plugins_1.withSettingsGradle)(config, (config) => {
        config.modResults.contents = applySettings(config.modResults.contents);
        return config;
    });
};
exports.withAndroidSettingsDependency = withAndroidSettingsDependency;
