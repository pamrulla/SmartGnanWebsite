import { NgModule } from '@angular/core';

import { ChallengesComponent }   from './challenges.component';

import { routing } from './challenges.routing';

import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
    imports: [routing, HeaderModule, FooterModule],
    exports: [],
    declarations: [ChallengesComponent],
    providers: [],
})
export class ChallengesModule { }
