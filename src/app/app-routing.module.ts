import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoFormPageComponent } from './pages/todo-form-page/todo-form-page.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'todoItem', component: TodoFormPageComponent},
  { path:'todoItemList', component: TodoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
