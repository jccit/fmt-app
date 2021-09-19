const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('pb');
defaultConfig.resolver.assetExts.push('json');

module.exports = defaultConfig;
