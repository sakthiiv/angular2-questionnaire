import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IQuestionaire } from './questionaire';


@Injectable()
export class QuestionaireService {
    private _baseUrl = 'http://localhost:3050/api/base-queries';
    private _levelUrl = 'http://localhost:3050/api/level-queries';

    constructor(private _http: Http) { }

    getQueries(): Observable<IQuestionaire[]> {
        return this._http.get(this._baseUrl).map(
            (response: Response) => {
                return <IQuestionaire[]>response.json()
            }
        );
    }

    getLevelQueries(body: any): Observable<IQuestionaire[]> {
        return this._http.post(this._levelUrl, body).map(
            (response: Response) => {
                return <IQuestionaire[]>response.json()
            }
        ).catch((error: any) => Observable.throw(error.json().error || 'Server error'));;
    }

}