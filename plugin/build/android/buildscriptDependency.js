"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAndroidBuildscriptDependency = void 0;
const config_plugins_1 = require("@expo/config-plugins");
/**
 * Update `<project>/build.gradle` by adding the codepush.gradle file
 * as an additional build task definition underneath react.gradle
 */
function applyImplementation(appBuildGradle) {
    const codePushImplementation = `apply from: new File(["node", "--print", "require.resolve('react-native-code-push/package.json')"].execute(null, rootDir).text.trim()).getParentFile().getAbsolutePath() + "/android/codepush.gradle"`;
    // Make sure the project does not have the dependency already
    if (!appBuildGradle.includes(codePushImplementation)) {
        if (appBuildGradle.includes('apply from: new File(reactNativeRoot, "react.gradle")')) {
            return appBuildGradle.replace('apply from: new File(reactNativeRoot, "react.gradle")', `apply from: new File(reactNativeRoot, "react.gradle")\n${codePushImplementation}`);
        }
        else if (appBuildGradle.includes('apply from: "../../node_modules/react-native/react.gradle"')) {
            return appBuildGradle.replace('apply from: "../../node_modules/react-native/react.gradle"', `apply from: "../../node_modules/react-native/react.gradle"\n${codePushImplementation}`);
        }
    }
    return appBuildGradle;
}
const withAndroidBuildscriptDependency = (config) => {
    return (0, config_plugins_1.withAppBuildGradle)(config, (config) => {
        config.modResults.contents = applyImplementation(config.modResults.contents);
        return config;
    });
};
exports.withAndroidBuildscriptDependency = withAndroidBuildscriptDependency;
