const { getDefaultConfig } = require("expo/metro-config");
module.exports = (() => {
  return getDefaultConfig(__dirname);
})();