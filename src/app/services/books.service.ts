import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  [x: string]: any;

  public Data :any[]= [];
  // getdata() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient ) { }



  // getbooklist () {
  //   return this.http.get(`http://103.224.246.103:3004/book/list`)
  // }



  getBooksList(){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer '+sessionStorage.getItem('token') || '');
    return this.http.get('http://103.224.246.103:3004/book/list', {headers})
  }


}
