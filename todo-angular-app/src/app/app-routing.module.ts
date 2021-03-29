import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/lists',pathMatch:'full'},
  { path:'lists',component:HomeComponent},
  { path:'lists/:listId', component:HomeComponent},
  { path:'lists/:listId/tasks', component:HomeComponent},
  { path:'lists/:listId/tasks/:taskId', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
