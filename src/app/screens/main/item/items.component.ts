import { Component, ComponentFactoryResolver, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "../../../core/services/item.service";
import { Utils } from "../../../core/helpers/utils";
import { getString, setString } from '@nativescript/core/application-settings';
import { overrideLocale } from 'nativescript-localize/localize';
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    isRtl = false;

    toggleRtl(): void {
        this.isRtl = !this.isRtl;
    }

    constructor(private itemService: ItemService,
        private utils: Utils,
        private routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute,

    ) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this.isRtl = Utils.isRtl;
        const val = this.activatedRoute.snapshot.queryParams["value"]
        const link = this.activatedRoute.snapshot.queryParams["link"] || "Hello";
        const back = this.activatedRoute.snapshot.queryParams["back"]
        console.log("VALUE------------> ", val);
    }

    changeLanguage() {
        console.log("Change lang !")
        const deviceLang = getString('__app__language__');
        const lang = (deviceLang == 'ar') ? 'en' : 'ar';
        Utils.isRtl = (lang == 'ar');
        const localeOverriddenSuccessfully = overrideLocale(lang);
        const forceLeftToRight = 3
        const forceRightToLeft = 4
        UIView.appearance().semanticContentAttribute = (lang == 'ar') ? forceRightToLeft : forceLeftToRight;
        UINavigationBar.appearance().semanticContentAttribute = (lang == 'ar') ? forceRightToLeft : forceLeftToRight;

        // = (lang == 'ar') ? forceRightToLeft : forceLeftToRight;
        setTimeout(() => {
            console.log("MOVE TO ---- !")
            this.routerExtensions.navigate(['/welcome'], {
                queryParams: {
                    value: Math.random(),
                    name: "hello",
                    link: "text===",
                    back: true
                }
            });
        }, 300)

    }
}
