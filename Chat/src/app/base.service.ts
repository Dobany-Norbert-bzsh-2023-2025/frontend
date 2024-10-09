import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://172.16.16.148:7178/api/Messages/"

  constructor(private http:HttpClient) { }

  addMessage(messages:string)
  {
    let body:any = {}
    body.userName = "DNA"
    body.uzi = messages

    console.log("Body:", body)

    this.http.post(this.url,body).forEach
    (
      (res)=>console.log("Sikeres uzenet kuldes",res)
    )

    
  }
  getAllMessage()
  {
    return this.http.get(this.url)
  }
}
