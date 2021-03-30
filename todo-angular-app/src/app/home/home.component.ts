import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscriber } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists:any[];
  listId:string;
  listName:string;
  tasks=[];
  taskId:string
  taskList:[]
  constructor(private todoService:TodoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      // console.log(params);
    })
     this.getLists();
  }

  createNewList(title:string){
  this.todoService.createList(title).subscribe((response:any)=>{
   this.getLists();
  });
  }
  
  getLists(){
    this.todoService.getLists().subscribe((lists:any[])=>{
      this.lists = lists;
      debugger; this.lists.forEach((elements)=>{       
      debugger; this.todoService.getTask(elements._id).subscribe((tasks:any[])=>{
      debugger;elements.taskList=tasks;
        // tasks.forEach((task)=>{
        //   console.log(task);
        //   this.tasks=tasks;

        //   // if(elements._id === task._listId){
            
        //   // }
        // })  
       }) 
      })
      console.log(this.lists);
      
    })
  }

  deleteList(){
    this.route.params.subscribe((params:Params)=>{
      this.listId= params['listId'];
    })
    this.todoService.deleteList(this.listId).subscribe((response)=>{
        this.getLists();
    });
  }
 
  addTask(title:string){
    this.route.params.subscribe((params:Params)=>{
      this.listId= params['listId'];
    })
    this.todoService.createTask(title,this.listId).subscribe((response)=>{
        console.log(response);
        this.getLists();
    })
  }

  deleteTask(){
    this.route.params.subscribe((params:Params)=>{
      this.listId=params['listId']
      this.taskId= params['taskId'];
      console.log(params);
    })
    this.todoService.deleteTask(this.listId,this.taskId).subscribe(()=>{

    })
  }
  
}
