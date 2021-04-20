import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/helpers/auth.guard';
import { SuccessComponent } from "./components/success/success.component";


export const SharedRoutes: Routes = [
    {
        path: 'success',
        component: SuccessComponent
    }
]