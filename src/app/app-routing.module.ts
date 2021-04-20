import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./screens/main/home/home.component";
import { ItemsComponent } from "./screens/main/item/items.component";
import { ItemDetailComponent } from "./screens/main/item/item-detail.component";
import { WelcomeComponent } from "./screens/main/welcome/welcome.component";
import { DashboardComponent } from "./screens/main/dashboard/dashboard.component";

import { AuthRoutes } from './screens/auth/auth-routings';
import { SharedRoutes } from './screens/shared/shared-routings';
import { AuthGuard } from "./core/helpers/auth.guard";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "home1", component: HomeComponent },
    { path: "welcome", component: WelcomeComponent },
    {
        path: "dashboard",
        //   canActivate: [AuthGuard],
        component: DashboardComponent
    },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    ...AuthRoutes,
    ...SharedRoutes
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
