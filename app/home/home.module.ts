import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';

import { routing } from './home.routing';

import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';

import { HomeComponent }   from './home.component';

@NgModule({
    imports: [CommonModule, MaterializeModule, HeaderModule, FooterModule, routing],
    exports: [],
    declarations: [HomeComponent]
})
export class HomeModule { }
