"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAndroidMainApplicationDependency = void 0;
const config_plugins_1 = require("@expo/config-plugins");
/**
 * Update `<project>/build.gradle` by adding the codepush.gradle file
 * as an additional build task definition underneath react.gradle
 */
function applyImplementation(mainApplication, find, add, replace) {
    // Make sure the project does not have the settings already
    if (!mainApplication.includes(add)) {
        if (replace)
            return mainApplication.replace(find, add);
        else
            return mainApplication.replace(find, `${find}\n${add}`);
    }
    return mainApplication;
}
const withAndroidMainApplicationDependency = (config) => {
    return (0, config_plugins_1.withMainApplication)(config, (config) => {
        config.modResults.contents = applyImplementation(config.modResults.contents, 'import expo.modules.ReactNativeHostWrapper;', `\nimport com.microsoft.codepush.react.CodePush;`);
        if (config.modResults.contents.includes("new DefaultReactNativeHost(this) {")) {
            config.modResults.contents = applyImplementation(config.modResults.contents, `new DefaultReactNativeHost(this) {`, `
          @Override
          protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
          }\n`);
        }
        else if (config.modResults.contents.includes(" new ReactNativeHost(this) {")) {
            config.modResults.contents = applyImplementation(config.modResults.contents, `new ReactNativeHost(this) {`, `
    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }\n`);
        }
        return config;
    });
};
exports.withAndroidMainApplicationDependency = withAndroidMainApplicationDependency;
