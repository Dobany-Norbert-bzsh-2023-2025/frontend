import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  //private url="http://172.16.16.148:7178/api/Messages/"
  private url = "https://szoftii1n-default-rtdb.europe-west1.firebasedatabase.app/messages.json"

  private messageSubject = new Subject();

  constructor(private http:HttpClient) 
  { 
    this.downloadAllMessage() 
    //setInterval(()=>this.http.get(this.url).forEach((res)=>this.messageSubject.next(res)),1000)
  }

  addMessage(messages:string)
  {
    let body:any = {}
    body.userName = "..."
    body.uzi = messages

    console.log("Body:", body)

    this.http.post(this.url,body).forEach
    (
      (res)=>console.log("Sikeres uzenet kuldes",res)
    )

    
  }
  getAllMessage()
  {
    return this.messageSubject
  }
  private downloadAllMessage()
  {
    this.http.get(this.url).subscribe((res)=>this.messageSubject.next(res))
  }
}
