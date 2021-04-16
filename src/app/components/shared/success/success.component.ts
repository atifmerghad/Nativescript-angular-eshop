import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";
import { Utils } from "../../../utils/helpers/utils";

@Component({
    selector: "app-success",
    templateUrl: "./success.component.html",
    styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {

    public isRtl;
    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page,
        private utils: Utils
    ) {
        this.page.actionBarHidden = true;
        this.isRtl = Utils.isRtl;

    }


    ngOnInit(): void {
    }


    go() {
        this.routerExtensions.navigate(['/login']);
    }



}

