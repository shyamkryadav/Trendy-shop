import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Interfce/product';
@Injectable({
  providedIn: 'root',
})
export class AppService {

  private apiUrl = 'http://localhost:7142/api/Product';
  constructor(private http: HttpClient) {}
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
 



  // getProduct(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }

  // createStudent(product: any): Observable<any> {
  //   return this.http.post(this.apiUrl, product, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //   });
  // }

  // deleteStudent(id: number): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete(url);
  // }

  // updateStudent(id: number, student: any): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put(url, student);
  // }


  // getAllProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(
  //     'https://localhost:7142/api/Product/GetAllProduct'
  //   );
  // }
}
