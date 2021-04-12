import { Component, OnInit } from "@angular/core";
import { isAndroid, Page } from "tns-core-modules/ui/page";
import { ActivatedRoute, Router } from '@angular/router';

import { overrideLocale } from 'nativescript-localize/localize';
import { getString, setString } from '@nativescript/core/application-settings';
import { RouterExtensions } from "@nativescript/angular";
import { TextField } from "tns-core-modules";
import { Utils } from "../../../utils/helpers/utils";
import { androidLaunchEventLocalizationHandler } from 'nativescript-localize/localize';


@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.scss'],
    providers: [Utils]
})
export class HomeComponent implements OnInit {

    isRtl = Utils.isRtl;
    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page,
        private utils: Utils,
        private activatedRoute: ActivatedRoute
    ) {
        this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
        const val = this.activatedRoute.snapshot.queryParams["value"]

        console.log("on init ==== RTL ====> ", Utils.isRtl, val);
        console.log("on init ==== Device Lang ====> ", Utils.deviceLanguage())
        console.log("on init ==== App Lang ====>", Utils.getAppLanguage())
    }


    changeLanguage() {
        const deviceLang = getString('__app__language__');
        const lang = (deviceLang == 'ar') ? 'en' : 'ar';
        Utils.isRtl = (lang == 'ar');
        const localeOverriddenSuccessfully = overrideLocale(lang);
        const forceLeftToRight = 3
        const forceRightToLeft = 4
        if (isAndroid)
            androidLaunchEventLocalizationHandler();
        else {
            UIView.appearance().semanticContentAttribute = (lang == 'ar') ? forceRightToLeft : forceLeftToRight;
            UINavigationBar.appearance().semanticContentAttribute = (lang == 'ar') ? forceRightToLeft : forceLeftToRight;

        }

        // = (lang == 'ar') ? forceRightToLeft : forceLeftToRight;
        this.routerExtensions.navigate(['/welcome'], {
            animated: false,
            queryParams: {
                value: Math.random(),
                name: "hello",
                link: "text===",
                back: true
            },
            transition:
            {
                name: 'flip',
                duration: 1000,
                curve: 'linear'
            }
        })

    }

    navigationOptions: { text: string; url: string }[] = [
        { text: "Pinch To Zoom", url: "/image-zoom" },
        { text: "RTL Layouts", url: "/rtl-layouts" },
    ];

    navigateTo(url: string): void {
        this.routerExtensions.navigateByUrl(url);
    }



}
