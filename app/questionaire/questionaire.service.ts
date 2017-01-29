import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IQuestionaire } from './questionaire';


@Injectable()
export class QuestionaireService {
    private _questionaireUrl = 'api/questions/questions.json';

    constructor(private _http: Http) { }

    getQuestions(): Observable<IQuestionaire[]> {
        return this._http.get(this._questionaireUrl).map((response: Response) => <IQuestionaire[]>response.json());
    }

}