import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>('https://dummyjson.com/users');
  }
  saveUsers(data:any){
          return this.http.post<any>('http://localhost:8080/employees/signup',data)
  }


  onSubscribeClicked() {
    alert('You are subscribed for event');
  }
}
