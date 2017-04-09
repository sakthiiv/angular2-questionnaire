import { Component, OnInit } from '@angular/core';
import { IQuestionaire } from './questionaire';
import { QuestionaireService } from './questionaire.service';
import { HelperService } from '../helper/helper.service';

@Component({
    moduleId: module.id,
    selector: 'questionaire',
    templateUrl: 'questionaire.component.html',
    styleUrls: ['questionaire.component.css'],
    providers: [QuestionaireService]
})

export class QuestionaireComponent {
    queries: IQuestionaire[];
    error: any;

    constructor(private _questionaireService: QuestionaireService) {
        
    }

    ngOnInit(): void {
        this._questionaireService.getQueries()
            .subscribe(queries => this.queries = queries,
            error => this.error = error);
    }

    public pageTitle: string = 'Angular2 Sample Questionaire!';
}
