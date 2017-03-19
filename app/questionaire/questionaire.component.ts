import { Component, OnInit } from '@angular/core';
import { IQuestionaire } from './questionaire'
import { QuestionaireService } from './questionaire.service';

@Component({
    moduleId: module.id,
    selector: 'questionaire',
    templateUrl: 'questionaire.component.html',
    styleUrls: ['questionaire.component.css'],
    providers: [QuestionaireService]
})

export class QuestionaireComponent {
    questions: IQuestionaire[];
    error: string;

    constructor(private _questionaireService: QuestionaireService) {

    }

    ngOnInit(): void {
        this._questionaireService.getQuestions()
            .subscribe(questions => this.questions = questions,
            error => this.error = <any>error);
    }

    public pageTitle: string = 'Angular2 Sample Questionaire!';
}
