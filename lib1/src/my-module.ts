import { NgModule , Component} from '@angular/core';

@Component({
    selector: 'my-component1',
    template: 'I am a lib'
})
export class MyComponent1{}


@NgModule({
    declarations: [MyComponent1],
    exports: [ MyComponent1]
})
export class MyModule1{}