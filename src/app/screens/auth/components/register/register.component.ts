import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";
import { Utils } from "../../../../core/helpers/utils";


@Component({
    selector: "app-register",
    templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {

    isRtl;
    username = "Hello";
    loginForm = {
        username: '',
        password: ''
    }
    constructor(private routerExtensions: RouterExtensions,
        private page: Page,
        private utils: Utils
    ) {
        //  this.page.actionBarHidden = true;
        this.isRtl = Utils.isRtl;
    }


    ngOnInit(): void {
    }

    onSubmit() {

        this.routerExtensions.navigate(['/otp', { mobile: '666840674', redirectTo: '/success' }], { clearHistory: true });

        // this.utils.errorsNotification('auth.login_wrong');
    }




}
