import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private todoColumns=[
    {key:"id",text:"#",type:"plain"},
    {key:"userId",text:"Felhasznaló azon.",type:"number"},
    {key:"title",text:"Cimke",type:"text"},
    {key:"completed",text:"Teljesitve",type:"boolean"}
    
  ]
  constructor() { }

  getTodoColumns()
  {
    return this.todoColumns                                                                                                                                                                                                                                                                                                                         
  }
}
