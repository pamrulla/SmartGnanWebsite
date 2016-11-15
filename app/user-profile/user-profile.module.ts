import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { UserProfileComponent }   from './user-profile.component';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { routing } from './user-profile.routing';

@NgModule({
    imports: [HeaderModule, FooterModule, CommonModule, FormsModule, routing],
    exports: [],
    declarations: [UserProfileComponent],
    providers: [],
})
export class UserProfileModule { }
