const withConfig = require("next-config");
const withImages = require("next-images");

module.exports = withConfig({
  webpack(config, options) {
    return config;
  }
});
module.exports = withImages();
