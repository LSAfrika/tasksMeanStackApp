import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [ 
   {path:'',redirectTo:'views',pathMatch:'full'},
  // { path: 'views', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'views', component:HomeComponent, children:[

    { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }
  ] 
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
