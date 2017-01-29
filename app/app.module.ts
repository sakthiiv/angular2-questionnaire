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

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, QuestionaireComponent, CheckAnswerComponent, RadioAnswerComponent, TextAnswerComponent, ActionDirective, DynamicComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: 'questions', useValue: {} }, { provide: 'level', useValue: 1 }]
})
export class AppModule { }
