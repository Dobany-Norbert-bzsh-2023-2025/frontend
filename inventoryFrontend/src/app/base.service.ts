import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url = "https://localhost:7120/api/Inventories/"
  constructor(private http:HttpClient)
  { 

  }

  getInv()
  {
    return this.http.get(this.url)
  }

  getItems(item:any)
  {
    return this.http.get(this.url+item.id)
  }

  updateItem(item:any)
  {
    return this.http.put(this.url+item.id,item)
  }

  deleteItem(item:any)
  {
    return this.http.delete(this.url+item.id)
  }

  postItem(item:any)
  {
    return this.http.post(this.url,item)
  }
}
