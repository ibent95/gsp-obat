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
.ts('resources/ts/app.ts', 'public/assets/js/core.js')
.js('resources/stisla/js/stisla.js', 'public/assets/js')
.js('resources/stisla/js/scripts.js', 'public/assets/js')
.sass('resources/sass/app.scss', 'public/assets/css/core.css')
.css('resources/stisla/css/style.css', 'public/assets/js')
.css('resources/stisla/css/components.css', 'public/assets/js')
.sourceMaps()
//.postCss('resources/css/app.css', 'public/assets/css', [
//    require('bootstrap'),
//    require('@fortawesome/fontawesome-free')
//])
;
