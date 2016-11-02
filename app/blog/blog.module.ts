import { NgModule } from '@angular/core';

import { BlogComponent }   from './blog.component';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';

import { routing } from './blog.routing';

@NgModule({
    imports: [routing, HeaderModule, FooterModule],
    exports: [],
    declarations: [BlogComponent],
    providers: [],
})
export class BlogModule { }
