import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { user } from "src/app/auth/auth";

@Injectable()
export class checkoutGaurd implements CanActivate {


    constructor(private route: Router, private activatedRoute: ActivatedRoute) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (user.getLoggedIn()) {
            return user.getLoggedIn();
        }
        this.route.navigate(['login'])
        return false;
    }
}