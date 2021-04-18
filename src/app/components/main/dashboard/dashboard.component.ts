import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { overrideLocale } from 'nativescript-localize/localize';
import { getString, setString, remove } from '@nativescript/core/application-settings';
import { RouterExtensions } from "@nativescript/angular";
import { TextField } from "tns-core-modules";
import { Utils } from "../../../utils/helpers/utils";
import { localize } from "nativescript-localize";


@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {

    isRtl = Utils.isRtl;

    mainMenu = [
        {
            index: 0,
            section: 'section 1 ',
            items: [
                {
                    name: localize('dashboard.dashboard_profile_paymentMethods'),
                    url: 'my-profile',
                    icon: 'user.png',
                },
                {
                    name: localize('dashboard.dashboard_profile_accountInformation'),
                    url: 'my-policies',
                    icon: 'explore.png',
                }
            ]
        },
        {
            index: 1,
            section: 'section 2 ',
            items: [
                {
                    name: localize('dashboard.dashboard_profile_notifications'),
                    url: 'my-profile',
                    icon: 'Vector.png',
                },
                {
                    name: localize('dashboard.dashboard_profile_inviteFriend'),
                    url: 'my-policies',
                    icon: 'bookmark.png',
                },
                {
                    name: localize('dashboard.dashboard_profile_settings'),
                    url: 'my-policies',
                    icon: 'store.png',
                },
                {
                    name: localize('dashboard.dashboard_profile_termsOfServices'),
                    url: 'my-policies',
                    icon: 'store.png',
                }
            ]
        }
    ];
    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page,
        private utils: Utils
    ) {
        this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
    }

    logOut() {
        remove('token');
        this.routerExtensions.navigate(['/home']);
    }

}
