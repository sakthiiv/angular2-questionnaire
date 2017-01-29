import { Component, OnInit } from '@angular/core';

import { IQuestionaire } from './questionaire'
import { QuestionaireService } from './questionaire.service';

@Component({
    selector: 'questionaire',
    templateUrl: 'app/questionaire/questionaire.component.html',
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

    public pageTitle: string = 'Hello World!';
}
