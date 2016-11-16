import { Lesson } from "./Lesson";

export class Chapter{
    Name: string;
    IsEnabled: boolean;
    Progress: number;
    Duration: string;
    Lessons = Array();
    Id: number;
    constructor(){

    }
}