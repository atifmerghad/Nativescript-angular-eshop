import { Component, Input } from "@angular/core";
import { Utils } from "../../../utils/helpers/utils";
//import { NavigationService } from "@app-core";
import { Frame, Color } from 'tns-core-modules/ui/frame/frame';
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "ns-header",
    templateUrl: "./header.component.html",
})
export class HeaderComponent {
    @Input() title: string = "";
    @Input() description: string = "";
    @Input() router: string = "";
    @Input() backEnabled: boolean = true;
    @Input() isRtl: boolean;

    constructor(
        //private navigationService: NavigationService
        private frame: Frame,
        private utils: Utils,
        private routerExtensions: RouterExtensions
    ) {
        this.isRtl = Utils.isRtl;
    }

    back(): void {
        //this.navigationService.back();  
        console.log('URL------->', this.router);
        if (this.router) {
            this.routerExtensions.navigate([this.router]);
        }
        else
            this.frame.goBack();
    }
}