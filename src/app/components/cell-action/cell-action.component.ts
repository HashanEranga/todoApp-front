import { Component, EventEmitter, Output } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cell-action',
  templateUrl: './cell-action.component.html',
  styleUrl: './cell-action.component.scss'
})
export class CellActionComponent implements ICellRendererAngularComp {
  @Output() selectedRow = new EventEmitter<any>();
  params: any;
  router: Router;
  constructor(router: Router){
    this.router = router;
  }

  agInit(params: ICellRendererParams<any, any, any>): void {
    console.log(params)
    this.params = params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
  }

  editEventHandler(params: any) {
    console.log(params)
    this.router.navigate(['todoItem', {id: this.params.data.id, description: this.params.data.description, completed: this.params.data.completed}])
  }

  deleteEventHandler(params: any) {
    console.log(params)
  }

}
