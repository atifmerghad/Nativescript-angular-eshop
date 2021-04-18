import { Component, OnInit, AfterViewInit, ElementRef, Input, ViewChild } from "@angular/core";
import { Page, ScrollView } from "@nativescript/core";
import { Utils } from "../../../utils/helpers/utils";
import { device, screen, isAndroid, isIOS } from "tns-core-modules/platform";


@Component({
    selector: "ns-page",
    templateUrl: "./page.component.html",
})
export class PageComponent implements OnInit, AfterViewInit {
    isRtl;
    @Input() loader?: boolean = false;
    @Input() header?: {
        title?: string;
        description?: string;
        router?: string;
        backEnabled?: boolean;
        scroll?: boolean;
    };

    constructor(
        private page: Page,
        private utils: Utils,
    ) {
        page.actionBarHidden = true;
        this.isRtl = Utils.isRtl;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.allowScrolling(this.header.scroll);
    }

    allowScrolling(e) {
        var scrollView = this.page.getViewById('scrollView');
        var scrollViewBody = this.page.getViewById('scrollViewBody')
        setTimeout(() => {
            scrollView.ios.scrollEnabled = e
            scrollViewBody.ios.scrollEnabled = !e
        }, 10);
    }


}