import { Component, HostListener, Injector, Input } from '@angular/core';

import { IComponentType } from './component.type';
import { IQuestionaire } from '../questionaire/questionaire';
import { QuestionaireService } from '../questionaire/questionaire.service';
import { HelperService } from '../helper/helper.service';

@Component({
    moduleId: module.id,
    selector: 'radio-answer',
    templateUrl: 'radio-answer.component.html',
    providers: [QuestionaireService, HelperService]
})

export class RadioAnswerComponent {

    /*@HostListener('change') onChange() {
        console.log(this, 'from radio');
    }*/

    @Input() query: IQuestionaire;
    componentData: IComponentType;
    level: number;
    error: string;

    constructor(private injector: Injector, private _queryService: QuestionaireService, private _helperService: HelperService) {
        console.log();
        this.query = this.injector.get('query');
        this.level = this.injector.get('level');
    }

    createDynamicComponent(answer: string) {
        this._queryService.getLevelQueries({
            id: this.query.id,
            answer: answer
        }).subscribe(queries => {
            this.componentData = this._helperService.getComponentData(queries, this.level);
        }, error => { 
            this.error = error 
        });
    }

}