export class UserDetails{
    fName = '';
    lName = '';
    email = '';
    doj = '';
    addr1 = '';
    addr2 = '';
    addr3 = '';
    dp = '';

    constructor(fn: string, ln: string, em: string, d: string, a1: string, a2: string, a3: string, dpp: string){
        this.fName = fn;
        this.lName = ln;
        this.email = em;
        this.doj = d;
        this.addr1 = a1;
        this.addr2 = a2;
        this.addr3 = a3;
        this.dp = dpp;
    }
}