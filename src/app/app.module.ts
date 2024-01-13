import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoFormPageComponent } from './pages/todo-form-page/todo-form-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSubsectionComponent } from './components/hero-subsection/hero-subsection.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { CellActionComponent } from './components/cell-action/cell-action.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroSectionComponent,
    TodoFormComponent,
    HomeComponent,
    TodoListComponent,
    TodoFormPageComponent,
    FooterComponent,
    HeroSubsectionComponent,
    CellActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
