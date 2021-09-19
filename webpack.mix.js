const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
.js('node_modules/jquery/dist/jquery.min.js', 'public/assets/js/core.js')
.js('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'public/assets/js/core.js')
.js('node_modules/sweetalert2/dist/sweetalert2.all.min.js', 'public/assets/js/core.js')

.js('resources/dashboardkit/js/vendor-all.min.js', 'public/assets/js/core.js')
.js('resources/dashboardkit/js/plugins/feather.min.js', 'public/assets/js/core.js')
.js('resources/dashboardkit/js/pcoded.min.js', 'public/assets/js/core.js')

.ts('resources/ts/app.ts', 'public/assets/js/core.js')

.css('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/assets/css/core.css')
.css('node_modules/sweetalert2/dist/sweetalert2.min.css', 'public/assets/css/core.css')

.css('resources/dashboardkit/css/style.css', 'public/assets/css')

.sass('resources/sass/app.scss', 'public/assets/css/core.css', {
	implementation: require('node-sass')
})

.sourceMaps()
//.postCss('resources/css/app.css', 'public/assets/css', [
//    require('bootstrap'),
//    require('@fortawesome/fontawesome-free')
//])
;

//mix.override(webpackConfig => {
//	webpackConfig.module.rules.push({
//		test: /\.js$/,
//		loader: 'babel-loader',
//		//query: {
//		//},
//		options: {
//			compact: true
//		},
//		//use: [],
//	});
//});