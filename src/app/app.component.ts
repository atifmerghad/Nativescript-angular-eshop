import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { device, screen, isAndroid, isIOS } from "tns-core-modules/platform";
import { Page, EventData } from 'tns-core-modules/ui/page/page';
import { Utils } from "./core/helpers/utils";
import { registerElement } from '@nativescript/angular';
import { Carousel, CarouselItem } from 'nativescript-carousel';
registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);
@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {

    isRtl: boolean;
    isAndroid = isAndroid;
    count: number = 0;
    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page,
        private utils: Utils

    ) {
        Utils.isRtl = (Utils.getAppLanguage() == 'ar');
        //  this.checkConnectivity();

    }

    ngOnInit() {
        // this.connectivityMonitoring()
    }

    ngOnDestroy() {
        // stopMonitoring();
    }

    ngOnChanges() {
        // this.connectivityMonitoring();
    }

}
