import { Component, Injector, Input } from '@angular/core';

import { RadioAnswerComponent } from './radio-answer.component';

import { IComponentData } from './component.data';

@Component({
    moduleId: module.id,    
    selector: 'check-answer',
    templateUrl: 'check-answer.component.html'
})
export class CheckAnswerComponent {

    componentData: IComponentData;
    @Input() question: any;
    level: number;

    constructor(private injector: Injector) {
        this.question = this.injector.get('questions').question;
        this.level = this.injector.get('level');
    }

    createDynamicComponent() {
        // Get Service and decide the component to bind
        this.componentData = {
            component: RadioAnswerComponent,
            questions: {
                "question": "This is a " + this.level + " level question?",
                "controlType": "radio",
                "answers": [
                    "Option1",
                    "Option2",
                    "Option3"
                ]
            },
            level: this.level
        };
    }

}