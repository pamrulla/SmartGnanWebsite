import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private isLoggedIn = true;

    constructor() { }

    public isUserLoggedIn(): boolean{
        return this.isLoggedIn;
    }
}