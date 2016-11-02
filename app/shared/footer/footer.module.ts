import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule } from '@angular/router';

import { FooterComponent }   from './footer.component';

@NgModule({
    imports: [RouterModule, CommonModule, MaterializeModule],
    exports: [FooterComponent],
    declarations: [FooterComponent]
})
export class FooterModule { }