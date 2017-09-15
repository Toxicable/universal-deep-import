import { NgModule , Component} from '@angular/core';

@Component({
    selector: 'my-component2',
    template: 'I am a lib'
})
export class MyComponent2{}


@NgModule({
    declarations: [MyComponent2],
    exports: [ MyComponent2]
})
export class MyModule2{}