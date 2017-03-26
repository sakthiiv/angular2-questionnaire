import { Injectable } from '@angular/core';

import { IQuestionaire } from '../questionaire/questionaire'
import { IComponentType } from '../controls/component.type'
import { CheckAnswerComponent } from '../controls/check-answer.component';
import { RadioAnswerComponent } from '../controls/radio-answer.component';
import { TextAnswerComponent } from '../controls/text-answer.component';

@Injectable()
export class HelperService {
    private componentData: IComponentType;

    getComponentData(queries: IQuestionaire[], level: number): IComponentType {

        if (!queries.length)
            return null;

        this.componentData = {};

        switch (queries[0].controlType) {
            case "radio":
                this.componentData.component = RadioAnswerComponent;
                break;
            case "checkbox":
                this.componentData.component = CheckAnswerComponent;
                break;
            case "textbox":
                this.componentData.component = TextAnswerComponent;
            default:
                break;
        }

        this.componentData.level = level;
        this.componentData.query = queries[0];
        return this.componentData;
    }

}
