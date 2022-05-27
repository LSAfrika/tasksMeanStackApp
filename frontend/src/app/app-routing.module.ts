import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [ 
   {path:'',redirectTo:'views',pathMatch:'full'},
  // { path: 'views', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'views', component:LoginComponent,canActivateChild:[LoginGuard], children:[

    { path: 'tasks', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

    { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }
  ] 
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
