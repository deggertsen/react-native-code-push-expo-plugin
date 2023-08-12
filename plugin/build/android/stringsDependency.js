"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAndroidStringsDependency = void 0;
const config_plugins_1 = require("expo/config-plugins");
/**
 * Update `<project>/app/src/main/res/values/strings.xml` by adding react-native-code-push deployment key
 */
function setStrings(strings, name, value) {
    // Helper to add string.xml JSON items or overwrite existing items with the same name.
    return config_plugins_1.AndroidConfig.Strings.setStringItem([
        // XML represented as JSON
        // <string moduleConfig="true" name="">value</string>
        { $: { name }, _: value },
    ], strings);
}
const withAndroidStringsDependency = (config, props) => {
    return (0, config_plugins_1.withStringsXml)(config, (config) => {
        config.modResults = setStrings(config.modResults, 'CodePushDeploymentKey', props.android.CodePushDeploymentKey);
        if (props.android.CodePushPublicKey)
            config.modResults = setStrings(config.modResults, 'CodePushPublicKey', props.android.CodePushPublicKey);
        return config;
    });
};
exports.withAndroidStringsDependency = withAndroidStringsDependency;
