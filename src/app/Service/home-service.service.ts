import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  constructor(private http: HttpClient) {}
  Name: String = 'Rutuja';

  getAllPOst() {
    return this.http.get<any>('https://dummyjson.com/todos');
  }
  saveAllUser(data: any) {
    return this.http.post<any>('http://localhost:8080/employees/signup', data);
  }
}
