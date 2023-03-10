"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAndroidMainApplicationDependency = exports.withAndroidStringsDependency = exports.withAndroidSettingsDependency = exports.withAndroidBuildscriptDependency = void 0;
const buildscriptDependency_1 = require("./buildscriptDependency");
Object.defineProperty(exports, "withAndroidBuildscriptDependency", { enumerable: true, get: function () { return buildscriptDependency_1.withAndroidBuildscriptDependency; } });
const mainApplicationDependency_1 = require("./mainApplicationDependency");
Object.defineProperty(exports, "withAndroidMainApplicationDependency", { enumerable: true, get: function () { return mainApplicationDependency_1.withAndroidMainApplicationDependency; } });
const settingsDependency_1 = require("./settingsDependency");
Object.defineProperty(exports, "withAndroidSettingsDependency", { enumerable: true, get: function () { return settingsDependency_1.withAndroidSettingsDependency; } });
const stringsDependency_1 = require("./stringsDependency");
Object.defineProperty(exports, "withAndroidStringsDependency", { enumerable: true, get: function () { return stringsDependency_1.withAndroidStringsDependency; } });
