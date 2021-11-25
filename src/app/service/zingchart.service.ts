import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZingchartService {
  url: string = "http://localhost:3000/zingchart/";

  constructor(private http: HttpClient) { }

  getAllZingChart():Observable<any> {
    return this.http.get(this.url);
  }
}
