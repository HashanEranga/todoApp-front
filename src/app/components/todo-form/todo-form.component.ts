import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent implements OnInit{
  public formData = {
    id : 0,
    description: '',
    completed : false
  }
  editItem : boolean = false;

  router : ActivatedRoute;
  constructor(router : ActivatedRoute){
    this.router = router;
  }

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      this.formData.id = data['id'];
      this.formData.description = data['description'];
      this.formData.completed = data['completed'];
    })

    if(this.formData.id){
      this.editItem = true;
    }
  }

  onSubmit(){
    console.log(this.formData)
  }

}
