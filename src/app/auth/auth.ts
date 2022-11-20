import { JwtHelperService } from "@auth0/angular-jwt";

export class UserStatus {
    isLoggedIn: boolean = false;
    isAdmin: boolean = false;
    userName: string;

    getLoggedIn(): boolean {
        return this.isLoggedIn;
    }

    getIsAdmin(): boolean {
        return this.isAdmin;
    }

    changeIsLoggedIn(val: boolean) {
        this.isLoggedIn = val;
    }

    changeAdmin(val: boolean) {
        this.isAdmin = val;
    }

    checkIfLoggedIn() {
        let tokenl;
        let helper = new JwtHelperService();
        let decodedToken;
        if (localStorage.getItem('token')) {
            tokenl = localStorage.getItem('token');
            user.changeIsLoggedIn(true);
            decodedToken = helper.decodeToken(tokenl as string)
            this.userName = decodedToken.UserName;
            if (decodedToken.role != 'User') {
                this.changeAdmin(true);
            } else {
                this.changeAdmin(false);
            }
        }
        else {
            this.changeIsLoggedIn(false);
        }
    }

    constructor() {
        this.isLoggedIn = false;
        this.isAdmin = false;
    }
}


export let user: UserStatus = {
    isLoggedIn: false,
    isAdmin: false,
    userName: '',
    getLoggedIn: function (): boolean {
        return this.isLoggedIn;
    },
    getIsAdmin: function (): boolean {
        return this.isAdmin;
    },
    changeIsLoggedIn: function (val: boolean): void {
        this.isLoggedIn = val;
    },
    changeAdmin: function (val: boolean): void {
        this.isAdmin = val;
    },
    checkIfLoggedIn: function (): void {
        let tokenl;
        let helper = new JwtHelperService();
        let decodedToken;
        if (localStorage.getItem('token')) {
            tokenl = localStorage.getItem('token');
            user.changeIsLoggedIn(true);
            decodedToken = helper.decodeToken(tokenl as string)
            if (decodedToken.role != 'User') {
                this.changeAdmin(true);
            } else {
                this.changeAdmin(false);
            }
        }
        else {
            this.changeIsLoggedIn(false);
        }
    }
};