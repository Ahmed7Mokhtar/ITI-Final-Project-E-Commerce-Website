import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject!: BehaviorSubject<any>;
    public currentUser!: Observable<any>;
    constructor(private http: HttpClient) {

    }



    login(email: string, password: string) {
        return this.http.post(`${environment.apiUrl}User/Login`, { email, password }, {
            responseType: 'text'
        })
    }
    signup(model: any) {
        return this.http.post<any>(`${environment.apiUrl}User/SignUp`, model)
            .pipe(map(user => {

                return user;
            }));
    }

}