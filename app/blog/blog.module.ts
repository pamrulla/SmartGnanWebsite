import { NgModule } from '@angular/core';

import { BlogComponent }   from './blog.component';

import { routing } from './blog.routing';

@NgModule({
    imports: [routing],
    exports: [],
    declarations: [BlogComponent],
    providers: [],
})
export class BlogModule { }
