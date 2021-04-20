import { Routes } from '@angular/router';

import { LoginOptionsComponent } from './components/login-options/login-options.component';

import { LoginComponent } from './components/login/login.component';
import { OtpComponent } from './components/otp/otp.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotUsernameComponent } from './components/forgot-username/forgot-username.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


export const AuthRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login-options',
        component: LoginOptionsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'otp',
        component: OtpComponent
    },
    {
        path: 'forgot-username',
        component: ForgotUsernameComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent
    },
]