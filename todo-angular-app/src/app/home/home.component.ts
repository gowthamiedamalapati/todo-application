import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists:any[];

  constructor(private todoService:TodoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      console.log(params);
    })
     this.getLists();
  }

  createNewList(title:string){
  this.todoService.createList(title).subscribe((response:any)=>{
   console.log(response);
  });
  }
  
  getLists(){
    this.todoService.getLists().subscribe((lists:any[])=>{
      this.lists = lists
      console.log(this.lists);
      this.todoService.getTask(this.lists[0]._id).subscribe((tasks:any[])=>{
        console.log(tasks);
       })
    })
  }
 
  
}
