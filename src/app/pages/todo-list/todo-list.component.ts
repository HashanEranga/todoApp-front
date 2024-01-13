import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { ColDef } from 'ag-grid-community'
import { CellActionComponent } from '../../components/cell-action/cell-action.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  rowData = [
    new Todo(1,"first task"),
    new Todo(2,"second task"),
    new Todo(3,"third task"),
    new Todo(4,"fourth task"),
    new Todo(5,"fifth task"),
  ]

  colDefs : ColDef[] = [
    { field : "id"},
    { field : "description"},
    { field : "completed", editable: true},
    { field : "Action", cellRenderer: CellActionComponent}
  ]

  public defaultColDef: ColDef = {
    editable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
  };

}
