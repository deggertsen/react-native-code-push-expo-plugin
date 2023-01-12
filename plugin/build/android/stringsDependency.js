"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAndroidStringsDependency = void 0;
const config_plugins_1 = require("@expo/config-plugins");
/**
 * Update `<project>/settings.gradle` by adding react-native-code-push
 */
function setStrings(strings, value) {
    // Helper to add string.xml JSON items or overwrite existing items with the same name.
    return config_plugins_1.AndroidConfig.Strings.setStringItem([
        // XML represented as JSON
        // <string moduleConfig="true" name="CodePushDeploymentKey">value</string>
        { $: { name: 'CodePushDeploymentKey' }, _: value },
    ], strings);
}
const withAndroidStringsDependency = (config, props) => {
    return (0, config_plugins_1.withStringsXml)(config, (config) => {
        config.modResults = setStrings(config.modResults, props.android.CodePushDeploymentKey);
        return config;
    });
};
exports.withAndroidStringsDependency = withAndroidStringsDependency;
