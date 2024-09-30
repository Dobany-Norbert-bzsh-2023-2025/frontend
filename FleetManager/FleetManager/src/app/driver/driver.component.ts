import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent {
  drivers:any
  oszlopok=[
    {key:"id", text:"#", type:"plain"},
    {key:"name",text:"Név",type:"text"},
    {key:"age",text:"Kor",type:"number"},
    {key:"phone",text:"Tel.sz.",type:"text"}
  ]

  newDriver:any={}
  keresendo:any=""
  constructor(private base:BaseService)
  {
    this.base.getAll().subscribe((adatok)=>this.drivers=adatok)
  }

  addDriver()
  {
    this.base.newDriver(this.newDriver)
    this.newDriver={}
  }

  deleteDriver(driver:any)
  {
    this.base.deleteDriver(driver)
  }

  editDriver(driver:any)
  {
    this.base.editDriver(driver)
  }

  mezoKivalaszt(key:any)
  {
    console.log("Mező: ",key)
  }
}
