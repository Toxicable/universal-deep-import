(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.lib2 = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var MyComponent2 = /** @class */ (function () {
    function MyComponent2() {
    }
    MyComponent2.decorators = [
        { type: core.Component, args: [{
                    selector: 'my-component2',
                    template: 'I am a lib'
                },] },
    ];
    /** @nocollapse */
    MyComponent2.ctorParameters = function () { return []; };
    return MyComponent2;
}());
var MyModule2 = /** @class */ (function () {
    function MyModule2() {
    }
    MyModule2.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [MyComponent2],
                    exports: [MyComponent2]
                },] },
    ];
    /** @nocollapse */
    MyModule2.ctorParameters = function () { return []; };
    return MyModule2;
}());

exports.MyComponent2 = MyComponent2;
exports.MyModule2 = MyModule2;

Object.defineProperty(exports, '__esModule', { value: true });

})));
