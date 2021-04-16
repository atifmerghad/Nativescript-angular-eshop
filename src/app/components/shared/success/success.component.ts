import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";
import { Utils } from "../../../utils/helpers/utils";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-success",
    templateUrl: "./success.component.html",
    styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {

    public isRtl;
    redirectTo;
    content;
    constructor(
        private routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute,
        private page: Page,
        private utils: Utils
    ) {
        this.page.actionBarHidden = true;
        this.isRtl = Utils.isRtl;

    }


    ngOnInit(): void {

        this.activatedRoute.params.subscribe((routeData: any) => {
            this.redirectTo = JSON.parse(routeData.payload).redirectTo;
        })

    }


    go() {
        this.routerExtensions.navigate([this.redirectTo]);
    }



}

