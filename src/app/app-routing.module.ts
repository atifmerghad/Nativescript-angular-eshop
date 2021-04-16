import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./components/main/home/home.component";
import { ItemsComponent } from "./components/main/item/items.component";
import { ItemDetailComponent } from "./components/main/item/item-detail.component";
import { WelcomeComponent } from "./components/main/welcome/welcome.component";
import { DashboardComponent } from "./components/main/dashboard/dashboard.component";

import { AuthRoutes } from './components/auth/auth-routings';
import { SharedRoutes } from './components/shared/shared-routings';
import { AuthGuard } from "./utils/helpers/auth.guard";

const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "welcome", component: WelcomeComponent },
    {
        path: "dashboard",
        canActivate: [AuthGuard],
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
