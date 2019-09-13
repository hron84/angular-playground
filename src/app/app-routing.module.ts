import { NgModule } from '@angular/core';
import {Routes, RouterModule, RouterLinkActive} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {UsersComponent} from './users/users.component';


const routes: Routes = [
  // {path: '', component: null }
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
    providers: [RouterLinkActive]
})
export class AppRoutingModule { }
