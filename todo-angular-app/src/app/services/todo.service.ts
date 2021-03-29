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
  getTask(listId){
    return this.webrequest.get('/lists/'+listId+'/tasks');
  }
  createTask(title:string,listId:string){
    return this.webrequest.post('/lists/'+listId+'/tasks',{title,listId})
  }
}
