import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listName = '';

  lists=[
    {
      list:'list1',
      tasks:['task1','task2','task3','task4'],
    },
    {
      list:'list2',
      tasks:['task1','task2','task3','task4'],
    },
    {
      list:'list3',
      tasks:['task1','task2','task3','task4'],
    },
    {
      list:'list4',
      tasks:['task1','task2','task3','task4'],
    },
    {
      list:'list5',
      tasks:[],
    },
    {
      list:'list6',
      tasks:['task1','task2'],
    },
  ];  
  
  closeResult: string;

  constructor() { }

  ngOnInit(): void {
  }
  enterList(){
    console.log(this.listName)
  }
  
}
