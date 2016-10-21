import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';

import { FooterComponent }   from './footer.component';

@NgModule({
    imports: [CommonModule,MaterializeModule],
    exports: [FooterComponent],
    declarations: [FooterComponent]
})
export class FooterModule { }