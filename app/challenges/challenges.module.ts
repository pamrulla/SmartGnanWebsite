import { NgModule } from '@angular/core';

import { ChallengesComponent }   from './challenges.component';

import { routing } from './challenges.routing';

@NgModule({
    imports: [routing],
    exports: [],
    declarations: [ChallengesComponent],
    providers: [],
})
export class ChallengesModule { }
