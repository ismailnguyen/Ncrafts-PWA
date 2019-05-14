module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  lintOnSave: false,
  pwa: {
    name: 'NewCrafts',
    themeColor: '#262627',
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
      // ...other Workbox options...
    },
  },
};