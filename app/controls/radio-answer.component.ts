import { Component, HostListener, Injector, Input } from '@angular/core';

import { CheckAnswerComponent } from './check-answer.component';

import { IComponentData } from './component.data';
import { IQuestionaire } from '../questionaire/questionaire';

@Component({
    moduleId: module.id,    
    selector: 'radio-answer',
    templateUrl: 'radio-answer.component.html'
})

export class RadioAnswerComponent {

    /*@HostListener('change') onChange() {
        console.log(this, 'from radio');
    }*/

    @Input() query: IQuestionaire;
    componentData: IComponentData;
    level: number;

    constructor(private injector: Injector) {
        //this.question = this.injector.get('questions').question;
        this.level = this.injector.get('level');
    }    

    createDynamicComponent() {
        console.log('dynamic');
        // Get Service and decide the component to bind
        /*this.componentData = {
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
        };*/
    }

}