import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';

import { HeaderComponent }   from './header.component';

@NgModule({
    imports: [CommonModule,MaterializeModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent]
})
export class HeaderModule { }