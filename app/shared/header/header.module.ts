import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterializeModule, MaterializeAction } from 'angular2-materialize';

import { HeaderComponent }   from './header.component';

@NgModule({
    imports: [FormsModule, RouterModule, CommonModule, MaterializeModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent]
})
export class HeaderModule { }