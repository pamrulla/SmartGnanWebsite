import { Component, OnInit } from '@angular/core';

declare var Vimeo: any;

@Component({
    moduleId: module.id,
    selector: 'main-player',
    templateUrl: 'main.component.html'
})
export class MainComponent implements OnInit {
    playerObj: any;

    constructor() {
        
     }

    ngOnInit() {
        this.playerObj = new Vimeo.Player('Lesson-Player');
        this.playerObj.on('play', this.playEvent);
        this.playerObj.play();

     }

     playEvent(){
         console.log('Played');
     }

}