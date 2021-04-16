import { Routes } from '@angular/router';
import { AuthGuard } from '../../utils/helpers/auth.guard';
import { SuccessComponent } from "./success/success.component";


export const SharedRoutes: Routes = [
    {
        path: 'success',
        component: SuccessComponent
    }
]