const extendConfig = require('./webpack.config.extend')

module.exports = {
  mode: 'spa',
  srcDir: 'src/',

  extensions: ['ts', 'js'],

  build: {
    extend(config) {
      extendConfig(config)
    }
  }
}
