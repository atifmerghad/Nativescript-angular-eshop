import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { NSLocationStrategy } from 'nativescript-angular/router/ns-location-strategy';
import { NSRouteReuseStrategy } from 'nativescript-angular/router/ns-route-reuse-strategy';

@Injectable()
export class CustomRouteReuseStrategy extends NSRouteReuseStrategy {

    constructor(location: NSLocationStrategy) {
        console.log("ATIF: ------> const")
        super(location);
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.log("ATIF: ------> Act")
        return false;
    }
}