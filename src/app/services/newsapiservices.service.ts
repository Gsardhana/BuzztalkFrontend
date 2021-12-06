import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopheadingComponent } from './../topheading/topheading.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4777432db26948f097238bb59f5d3d0b"
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4777432db26948f097238bb59f5d3d0b"
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  technews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
}
