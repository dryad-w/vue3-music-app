const registerRouter = require('./backend/router.js')
module.exports = {
  css: {
    loaderOptions: {
    	sass: {
				// 全局引入变量和 mixin
				additionalData: `
					@import "@/assets/scss/variable.scss";
					@import "@/assets/scss/mixin.scss";
				`
			}
		}
	},
	devServer: {
		open: true,
    before(app) {
      registerRouter(app)
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Dryad Music'
        return args
      })
  },
  pwa: {
    name: 'DryadMusic',
    themeColor: '#222',
    msTileColor: '#222',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: (ctx) => {
            if (ctx.sameOrigin === false && ctx.url.test(new RegExp('/music'))) {
              return true
            }
            return false
          },
          handler: 'NetworkFirst',
          options: {
            cacheableResponse: {
              statuses: [200]
            }
          }
        },
        {
          urlPattern: new RegExp('.png$'),
          handler: 'CacheFirst',
          options: {
            cacheableResponse: {
              statuses: [200]
            }
          }
        },
        {
          urlPattern: new RegExp('/api/'),
          handler: 'NetworkFirst',
          options: {
            cacheableResponse: {
              statuses: [200]
            }
          }
        }
      ]
    }
  },
  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/music/' : '/'
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}
