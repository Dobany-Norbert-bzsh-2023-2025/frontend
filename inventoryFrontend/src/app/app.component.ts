import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseService } from './base.service';
import { Init } from 'v8';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'inventoryFrontend';
  oszlopok=[
    {key:"id",text:"Id",type:"Number"},
    {key:"name",text:"Name",type:"text"},
    {key:"price",text:"Price",type:"text"},
    {key:"quantity",text:"Quantity",type:"number"}
  ]
  items:any
  newItem:any={}
  subsc!:Subscription
  error = false
  errorText:any

  constructor(private base:BaseService)
  {
    
  }
  ngOnInit(): void {
    this.getItems() 
  }

  ngOnDestroy(): void {
    if(this.subsc) this.subsc.unsubscribe()
  }

  getItems()
  {
    this.subsc = this.base.getInv().subscribe({
      next: (res) => {this.items = res,this.error=false},
      error: (err) => {console.log(err),this.error=true,this.errorText=err.message}
    })
  }

  postItems()
  {
    this.base.postItem(this.newItem).subscribe(() => {this.getItems(),this.newItem={}})
    
  }

  updateItem(item:any)
  {
    this.base.updateItem(item).subscribe(() => this.getItems())
  }

  deleteItem(item:any)
  {
    this.base.deleteItem(item).subscribe(() => this.getItems())
  }


}
