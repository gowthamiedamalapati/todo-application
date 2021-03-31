import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/services/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private webrequest:WebRequestService) { }
  createList(title:string){
    return this.webrequest.post('/lists',{title});
  }
  getLists(){
    return this.webrequest.get('/lists');
  }
  getList(listId){
   return this.webrequest.get('/lists/'+listId);
  }
  updateList(title:string,listId:string){
   debugger; return this.webrequest.patch('/lists/'+listId,{title});
  }
  deleteList(listId){
   return this.webrequest.delete('/lists/'+listId);
  }
  getTask(listId){
    return this.webrequest.get('/lists/'+listId+'/tasks');
  }
  createTask(title:string,listId:string){
    return this.webrequest.post('/lists/'+listId+'/tasks',{title,listId})
  }
  deleteTask(listId,taskId){
    return this.webrequest.delete('/lists/'+listId+'/tasks/'+taskId);
  }
}
