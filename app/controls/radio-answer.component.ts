import { Component, HostListener, Injector, Input } from '@angular/core';

import { CheckAnswerComponent } from './check-answer.component';

import { IComponentData } from './component.data';

@Component({
    selector: 'radio-answer',
    templateUrl: 'app/controls/radio-answer.component.html'
})

export class RadioAnswerComponent {

    /*@HostListener('change') onChange() {
        console.log(this, 'from radio');
    }*/

    componentData: IComponentData;
    @Input() question: string;
    level: number;

    constructor(private injector: Injector) {
        this.question = this.injector.get('questions').question;
        this.level = this.injector.get('level');
    }    

    createDynamicComponent() {
        // Get Service and decide the component to bind
        this.componentData = {
            component: CheckAnswerComponent,
            questions: {
                "question": "This is a " + this.level + " level question?",
                "controlType": "checkbox",
                "answers": [
                    "Yes",
                    "No",
                    "None"
                ]
            },
            level: this.level
        };
    }

}