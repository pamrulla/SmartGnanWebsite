import { NgModule } from '@angular/core';

import { UserProfileComponent }   from './user-profile.component';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { routing } from './user-profile.routing';
@NgModule({
    imports: [HeaderModule, FooterModule, routing],
    exports: [],
    declarations: [UserProfileComponent],
    providers: [],
})
export class UserProfileModule { }
