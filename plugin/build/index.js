"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("expo/config-plugins");
const android_1 = require("./android");
const ios_1 = require("./ios");
/**
 * A config plugin for configuring `react-native-code-push`
 */
const withRnCodepush = (config, props) => {
    config = (0, android_1.withAndroidBuildscriptDependency)(config, props);
    config = (0, android_1.withAndroidSettingsDependency)(config, props);
    config = (0, android_1.withAndroidStringsDependency)(config, props);
    config = (0, android_1.withAndroidMainApplicationDependency)(config, props);
    // plugins order matter: the later one would run first
    config = (0, ios_1.withIosBuildscriptDependency)(config, props);
    config = (0, ios_1.withIosAppDelegateDependency)(config, props);
    return config;
};
// @todo: iS IT NEEDED TO DECLARE THIS VAR AS IS REWRITTEN AT #34
let pkg = {
    name: "react-native-code-push",
    // UNVERSIONED...
};
try {
    pkg = require("react-native-code-push/package.json");
}
catch { }
exports.default = (0, config_plugins_1.createRunOncePlugin)(withRnCodepush, pkg.name, pkg.version);
