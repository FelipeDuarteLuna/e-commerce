import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  readonly apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io/';

  constructor(private http: HttpClient) {}

  searchByName(name: string) {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {
      params: { name },
    });
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}
