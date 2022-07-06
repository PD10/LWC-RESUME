import { LightningElement } from 'lwc';
import * as RESUME_DATA from './myResumeContainerData';

export default class MyResumeContainer extends LightningElement {
    SOCIAL_LINKS = RESUME_DATA.SOCIAL_LINKS;
    RESUME_DATA = RESUME_DATA;
}