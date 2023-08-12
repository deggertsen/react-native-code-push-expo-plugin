"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withIosAppDelegateDependency = void 0;
const config_plugins_1 = require("expo/config-plugins");
function applyImplementation(appDelegate, find, add, replace) {
    // Make sure the project does not have the settings already
    if (!appDelegate.includes(add)) {
        if (replace)
            return appDelegate.replace(find, add);
        else
            return appDelegate.replace(find, `${find}\n${add}`);
    }
    return appDelegate;
}
const withIosAppDelegateDependency = (config, props) => {
    return (0, config_plugins_1.withAppDelegate)(config, (config) => {
        config.modResults.contents = applyImplementation(config.modResults.contents, `#import "AppDelegate.h"`, `#import <CodePush/CodePush.h>`);
        config.modResults.contents = applyImplementation(config.modResults.contents, `return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];`, `return [CodePush bundleURL];`, true);
        return config;
    });
};
exports.withIosAppDelegateDependency = withIosAppDelegateDependency;
