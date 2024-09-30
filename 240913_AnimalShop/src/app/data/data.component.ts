import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  todo:any
  oszlopok:any

constructor(private base:BaseService, private config:ConfigService){
  this.base.getTodo().subscribe((adatok)=>this.todo=adatok)
  this.oszlopok=config.getTodoColumns()
}
}
