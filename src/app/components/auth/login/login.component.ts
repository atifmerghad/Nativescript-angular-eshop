import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";
import { Utils } from "../../../utils/helpers/utils";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextField } from "@nativescript/core";


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    public isRtl;
    public loginForm: FormGroup;
    public showPassword = false;
    public submitted = false;
    public loader = false;
    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page,
        private utils: Utils,
        private formBuilder: FormBuilder
    ) {
        this.page.actionBarHidden = true;
        this.isRtl = Utils.isRtl;

    }


    ngOnInit(): void {
        this.initLoginForm();
    }


    showHidePassword() {
        this.showPassword = !this.showPassword;
    }

    initLoginForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get f() { return this.loginForm.controls; }

    onUsernameChecked(args) {
        let username = <TextField>args.object;
        this.loginForm.patchValue({ username: username.text });
    }
    onPasswordChecked(args) {
        let password = <TextField>args.object;
        this.loginForm.patchValue({ password: password.text });
    }

    onSubmit() {
        this.submitted = true;
        this.loader = true;

        if (this.loginForm.invalid) {
            this.loader = false;
            return;
        }

        setTimeout(() => {
            if (this.loginForm.get('username').value == 'Atif')
                this.routerExtensions.navigate(['/otp']);
            else {
                this.submitted = false;
                this.loader = false;
                this.utils.errorsNotification('auth.login_wrong');
            }
        }, 2000);


    }
}

