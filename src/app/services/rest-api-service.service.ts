import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {

  constructor(private http: HttpClient) { }

  AddImages(data:FormData){
    return this.http.post("http://localhost:8081/file",data);
  }
  AddPost(data:any){
    
    return this.http.post("http://localhost:8081/post", data);


}
GetPost(data:any)
{
  return this.http.get("http://localhost:8081/post",data)
}
}
