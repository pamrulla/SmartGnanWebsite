import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Star }   from './star';
import { Stars }   from './stars';

@NgModule({
    imports: [CommonModule],
    exports: [Star, Stars],
    declarations: [Star, Stars],
    providers: [],
})
export class RatingsStartModule { }
