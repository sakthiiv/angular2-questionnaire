import { Component, Injector, Input } from '@angular/core';

import { IComponentType } from './component.type';
import { IQuestionaire } from '../questionaire/questionaire';
import { QuestionaireService } from '../questionaire/questionaire.service';
import { BaseHelperService } from '../helper/base.helper.service';

@Component({
    moduleId: module.id,    
    selector: 'check-answer',
    templateUrl: 'check-answer.component.html'
})
export class CheckAnswerComponent {
    
    @Input() query: IQuestionaire;
    componentData: IComponentType;
    error: string;
    level: number;

    constructor(private injector: Injector, private _queryService: QuestionaireService, private _helperService: BaseHelperService) {
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