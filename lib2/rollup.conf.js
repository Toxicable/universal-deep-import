export default {
    entry     : 'dist/lib2.js',
    dest      : 'dist/bundles/lib2.umd.js',
    format    : 'umd',
    external  : [
        '@angular/core',
        '@angular/router',
        '@angular/platform-browser',
        '@angular/common'
    ],
    globals   : {
        '@angular/core': 'ng.core',
        '@angular/router': 'ng.router',
        '@angular/platform-browser': 'ng.platform-browser',
        '@angular/common': 'ng.common'
    },
    moduleName: 'lib2'
}