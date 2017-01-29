import { Component } from '@angular/core';
import { IQuestionaire } from '../questionaire/questionaire';

export interface IComponentData {
    component: Component;
    questions?: IQuestionaire;
    level: number;
}