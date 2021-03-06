import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";
import { Utils } from "../../../../core/helpers/utils";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextField } from "@nativescript/core";
import { getString, setString } from '@nativescript/core/application-settings';
import { ActivatedRoute } from "@angular/router";


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
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute
    ) {
        this.page.actionBarHidden = true;
        this.isRtl = Utils.isRtl;

    }


    ngOnInit(): void {
        this.initLoginForm();
        const val = this.activatedRoute.snapshot.queryParams["value"];
        console.log("VALEUR : ", val)
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
            if (this.loginForm.get('username').value == 'Atif') {
                setString('token', "Atif");
                this.routerExtensions.navigate(['/otp', { mobile: '666840674', redirectTo: '/dashboard' }], { clearHistory: true });
            }
            else {
                this.submitted = false;
                this.loader = false;
                this.utils.errorsNotification('auth.login_wrong');
            }
        }, 2000);


    }

    loginGoogle() {
        var v = Math.random()
        console.log("Google Authenticator ", v);

        this.routerExtensions.navigate(['/login'], {
            queryParams: {
                value: v,
                back: false
            },
            transition: {
                name: this.isRtl ? 'slideLeft' : 'slideRight',
            }
        });
    }
}

