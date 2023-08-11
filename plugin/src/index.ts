import {ConfigPlugin, createRunOncePlugin} from 'expo/config-plugins'

import {
  withAndroidBuildscriptDependency,
  withAndroidMainApplicationDependency,
  withAndroidSettingsDependency,
  withAndroidStringsDependency,
} from './android'
import {withIosAppDelegateDependency, withIosBuildscriptDependency} from './ios'
import {PluginConfigType} from './pluginConfig'

/**
 * A config plugin for configuring `react-native-code-push`
 */
const withRnCodepush: ConfigPlugin<PluginConfigType> = (config, props) => {
  config = withAndroidBuildscriptDependency(config, props)
  config = withAndroidSettingsDependency(config, props)
  config = withAndroidStringsDependency(config, props)
  config = withAndroidMainApplicationDependency(config, props)
  // plugins order matter: the later one would run first
  config = withIosBuildscriptDependency(config, props)
  config = withIosAppDelegateDependency(config, props)

  return config
}

// @todo: iS IT NEEDED TO DECLARE THIS VAR AS IS REWRITTEN AT #34
let pkg: { name: string; version?: string } = {
  name: "react-native-code-push",
  // UNVERSIONED...
};

try {
  pkg = require("react-native-code-push/package.json");
} catch {}

export default createRunOncePlugin(withRnCodepush, pkg.name, pkg.version);
