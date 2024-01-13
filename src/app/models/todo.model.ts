export class Todo {
    id : number;
    description : string;
    completed : boolean;
    
    constructor(id: number, description: string){
        this.id = id;
        this.description = description;
        this.completed = false;
    }
}