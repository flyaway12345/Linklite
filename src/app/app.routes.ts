import { Routes } from '@angular/router';
import { Error404Component } from './app/error404/error404.component';
import { AppDirectoryComponent } from './modules/app-directory.component';
import { LinksComponent } from './modules/links/links.component';
import { WatchboxComponent } from './modules/watchbox/watchbox.component';
import { PaymentComponent } from './modules/payment/payment.component';

export const routes: Routes = [
    {path: '' , redirectTo: 'links', pathMatch: 'full'},
    {path: 'links', component: LinksComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'live', component: WatchboxComponent},
    {path: 'appDir', component: AppDirectoryComponent},
    {path: '**' ,component: Error404Component}
];
