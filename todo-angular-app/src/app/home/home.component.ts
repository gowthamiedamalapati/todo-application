import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listName = '';
  
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  enterList(){
    console.log(this.listName)
  }
  
}
