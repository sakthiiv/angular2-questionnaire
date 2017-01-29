import { Component, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver, Input } from '@angular/core';
import { RadioAnswerComponent } from './radio-answer.component';
import { CheckAnswerComponent } from './check-answer.component';

import { IComponentData } from './component.data';

@Component({
    selector: 'dynamic-component',
    entryComponents: [RadioAnswerComponent, CheckAnswerComponent],
    template: `
    <div #dynamicComponentContainer></div>
  `,
})
export class DynamicComponent {

    currentComponent: any;

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    @Input() set componentData(data: { component: any, questions: any, level: number }) {
        if (!data) {
            return;
        }

        data.level++;

        let inputProviders = [{
            provide: 'questions',
            useValue: data.questions
        }, {
            provide: 'level',
            useValue: data.level
        }];

        console.log(data.level);

        /*let inputProviders = Object.keys(data.questions).map((question) => {
            console.log(question);
            return {
                provide: question, 
                useValue: data.questions[question]
            };
        });*/
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        let factory = this.resolver.resolveComponentFactory(data.component);
        let component = factory.create(injector);
        this.dynamicComponentContainer.insert(component.hostView);

        if (this.currentComponent) {
            this.currentComponent.destroy();
        }

        this.currentComponent = component;
    }

    constructor(private resolver: ComponentFactoryResolver) {

    }

}