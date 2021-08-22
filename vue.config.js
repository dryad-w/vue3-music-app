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
  }
}
