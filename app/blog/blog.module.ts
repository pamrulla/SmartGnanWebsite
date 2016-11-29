import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { BlogComponent }   from './blog.component';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';

// import { BlogService } from '../shared/services/blog.service';

import { routing } from './blog.routing';

@NgModule({
    imports: [routing, HeaderModule, FooterModule, CommonModule, FormsModule],
    exports: [BlogComponent],
    declarations: [BlogComponent]
})

export class BlogModule { }
