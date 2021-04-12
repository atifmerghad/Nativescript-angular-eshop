import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";
import { Utils } from "../../../utils/helpers/utils";


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    public isRtl;
    username = "Hello";
    private showPassword = false;
    loginForm = {
        username: '',
        password: ''
    }
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

    loginUser() {
        if (this.loginForm.username == 'Atif')
            this.routerExtensions.navigate(['/otp']);
        else
            this.utils.errorsNotification('login_wrong');
    }

    showHidePassword() {
        this.showPassword = !this.showPassword;
    }



}
