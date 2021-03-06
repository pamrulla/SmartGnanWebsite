import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
    moduleId: module.id,
    selector: 'home-page',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    modalActions = new EventEmitter<string | MaterializeAction>();
    modalRegisterActions = new EventEmitter<string | MaterializeAction>();

    register = false;

    constructor() { }

    ngOnInit() {
     }

    openModal() {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    }

    openRegisterModal() {
        this.register = !this.register;
    }
     
}