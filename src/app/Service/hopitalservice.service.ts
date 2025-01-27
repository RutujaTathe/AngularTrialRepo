import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HopitalserviceService {
  constructor(private http: HttpClient) {}

  getAllPatient() {
    return this.http.get<any>('https://dummyjson.com/comments');
  }

  // saveAllUser(User: any) {
  //   return this.http.post<any>('https://dummyjson.com/comments', User);
  // }
}
