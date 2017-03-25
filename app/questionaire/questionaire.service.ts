import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IQuestionaire } from './questionaire';


@Injectable()
export class QuestionaireService {
    private _questionaireUrl = 'http://localhost:3050/api/base-queries';

    constructor(private _http: Http) { }

    getQueries(): Observable<IQuestionaire[]> {
        return this._http.get(this._questionaireUrl).map(
            (response: Response) => { 
                console.log(response.json());
                return <IQuestionaire[]>response.json() 
            }
        );
    }

}