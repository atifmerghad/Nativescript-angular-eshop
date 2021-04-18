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
    loader = false;
    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page,
        private utils: Utils,
        private activatedRoute: ActivatedRoute
    ) {
        this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
        this.navigateTo('/home');
    }


    changeLanguage() {
        this.loader = true;
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

        setTimeout(() => {
            this.loader = false;
            this.routerExtensions.navigate(['/home1'], { animated: false })
            this.navigateTo('/home1');
        }, 2000)
    }


    navigateTo(url: string): void {
        this.routerExtensions.navigate([url], { animated: false });
    }

}
