
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { LoginComponent } from './components/login/login.component';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { OtpComponent } from './components/otp/otp.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { NativeScriptFormsModule, NativeScriptRouterModule, NativeScriptCommonModule, ModalDialogService, NativeScriptHttpClientModule } from 'nativescript-angular';
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ForgotUsernameComponent } from "./components/forgot-username/forgot-username.component";

import { ReactiveFormsModule } from '@angular/forms';

import { CustomRouteReuseStrategy } from "./custom-router-strategy";
import { RouteReuseStrategy } from '@angular/router';


@NgModule({
    declarations: [
        LoginComponent,
        OtpComponent,
        RegisterComponent,
        ChangePasswordComponent,
        ForgotPasswordComponent,
        ForgotUsernameComponent,
        OtpComponent,
        LoginOptionsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        CommonModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptLocalizeModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    providers: [
        ModalDialogService,
        {
            provide: RouteReuseStrategy,
            useClass: CustomRouteReuseStrategy
        }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }
