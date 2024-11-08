import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  messages:any=[]
  feliratkozas!:Subscription
  
  constructor(private base:BaseService){
  }
  ngOnInit(): void{
    this.feliratkozas=this.base.getAllMessage().subscribe(
      (res:any)=>
      {
        this.messages=[]
        for (const key in res)
        {
          console.log(res[key])
          this.messages.push(res[key])
        }
      }
      
    )
  }

  ngOnDestroy(): void {
    if (this.feliratkozas) {this.feliratkozas.unsubscribe()}
  }

  pageDown()
  {
    document.getElementById("pageend")?.scrollTo(0,0)
  }
}
