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
.css('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/assets/css/main.css')
.css('node_modules/sweetalert2/dist/sweetalert2.min.css', 'public/assets/css/main.css')
.css('resources/dashboardkit/fonts/feather.css', 'public/assets/css/main.css')
.css('resources/dashboardkit/fonts/material.css', 'public/assets/css/main.css')

.css('resources/dashboardkit/css/style.css', 'public/assets/css')

.sass('resources/sass/app.scss', 'public/assets/css/main.css', {
	implementation: require('node-sass')
})

.js('node_modules/jquery/dist/jquery.min.js', 'public/assets/js/main.js')
.js('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'public/assets/js/main.js')
.js('node_modules/sweetalert2/dist/sweetalert2.all.min.js', 'public/assets/js/main.js')

.js('resources/dashboardkit/js/vendor-all.min.js', 'public/assets/js/main.js')
.js('resources/dashboardkit/js/pcoded.min.js', 'public/assets/js/main.js')

.ts('resources/ts/app.ts', 'public/assets/js/main.js')

.autoload({
	jquery: ['$', 'jQuery', 'window.jQuery'],
})
.extract()
.sourceMaps()
//.postCss('resources/css/app.css', 'public/assets/css', [
//    require('bootstrap'),
//    require('@fortawesome/fontawesome-free')
//])
;
mix.override(webpackConfig => {
	webpackConfig.module.rules.push({
		test: /\.js$/,
		loader: 'babel-loader',
		//query: {
		//},
		options: {
			minified: true
		},
		//use: [],
	});
});