import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./screens/main/item/items.component";
import { ItemDetailComponent } from "./screens/main/item/item-detail.component";
import { HomeComponent } from "./screens/main/home/home.component";
import { WelcomeComponent } from "./screens/main/welcome/welcome.component";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { AuthGuard } from './core/helpers/auth.guard';
import { TokenInterceptorService } from './core/helpers/token-interceptor.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerElement } from "nativescript-angular/element-registry";

import { NativeScriptFormsModule, NativeScriptRouterModule, NativeScriptCommonModule, ModalDialogService, NativeScriptHttpClientModule } from 'nativescript-angular';


import { Gif } from 'nativescript-gif';
registerElement('Gif', () => Gif);

import { AuthModule } from './screens/auth/auth.module';
import { SharedModule } from './screens/shared/shared.module';

import { DashboardModule } from './screens/dashboard/dashboard.module';

import { Utils } from './core/helpers/utils';
import { DashboardComponent } from "./screens/main/dashboard/dashboard.component";
import { ProductComponent } from "./screens/dashboard/components/product/product.component";


import { AuthService } from "./core/services/auth.service";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    exports: [
        NativeScriptLocalizeModule
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        AuthModule,
        SharedModule,
        DashboardModule,
        NativeScriptRouterModule,
        NativeScriptLocalizeModule

    ],
    declarations: [
        AppComponent,
        HomeComponent,
        WelcomeComponent,
        ItemsComponent,
        ItemDetailComponent,
        DashboardComponent,
        ProductComponent,
    ],
    providers: [
        ModalDialogService,
        AppComponent,
        AuthGuard,
        AuthService,
        Utils
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
