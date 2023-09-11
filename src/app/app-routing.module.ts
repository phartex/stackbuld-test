import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren: () =>
   import('./components/home/home.module').then(
    m => m.HomeModule
   )
  },
  {
    path:'add-user',
    loadChildren: () =>
   import('./components/add/add.module').then(
    m => m.AddModule
   )
  },
  {
    path:'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
