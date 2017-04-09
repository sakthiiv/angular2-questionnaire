import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { QuestionaireComponent } from './questionaire/questionaire.component';
import { CheckAnswerComponent } from './controls/check-answer.component';
import { RadioAnswerComponent } from './controls/radio-answer.component';
import { TextAnswerComponent } from './controls/text-answer.component';
import { DynamicComponent } from './controls/dynamic.component';
import { ActionDirective } from './controls/action.directive';

import { BaseHelperService } from './helper/base.helper.service';
import { HelperService } from './helper/helper.service';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, QuestionaireComponent, CheckAnswerComponent, RadioAnswerComponent, TextAnswerComponent, ActionDirective, DynamicComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: BaseHelperService, useClass: HelperService },
    { provide: 'query', useValue: {} },
    { provide: 'level', useValue: 1 }
  ]
})
export class AppModule { }
