import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  messages:any=[]
  vmi:string
  constructor(private base:BaseService){
    this.vmi="alma"
  }
  ngOnInit(): void{
    this.base.getAllMessage().subscribe(
      (res)=>this.messages=res
    )
  }
}
