import { Component } from '@angular/core';
import { IQuestionaire } from '../questionaire/questionaire';

export interface IComponentType {
    component?: Component;
    query?: IQuestionaire;
    level?: number;
}