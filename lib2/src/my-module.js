import { NgModule, Component } from '@angular/core';
var MyComponent2 = /** @class */ (function () {
    function MyComponent2() {
    }
    MyComponent2.decorators = [
        { type: Component, args: [{
                    selector: 'my-component2',
                    template: 'I am a lib'
                },] },
    ];
    /** @nocollapse */
    MyComponent2.ctorParameters = function () { return []; };
    return MyComponent2;
}());
export { MyComponent2 };
var MyModule2 = /** @class */ (function () {
    function MyModule2() {
    }
    MyModule2.decorators = [
        { type: NgModule, args: [{
                    declarations: [MyComponent2],
                    exports: [MyComponent2]
                },] },
    ];
    /** @nocollapse */
    MyModule2.ctorParameters = function () { return []; };
    return MyModule2;
}());
export { MyModule2 };
