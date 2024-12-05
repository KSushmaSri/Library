import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl = "assets/user.json";
  constructor(private http: HttpClient) { }
  getdetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}`)
  }
}
