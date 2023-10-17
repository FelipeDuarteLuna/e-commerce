import { mockProducts } from './../../mocks/product.mock';
import { TestBed } from '@angular/core/testing';

import { ProductSearchService } from './product-search.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/product.model';

describe('ProductSearchService', () => {
  let service: ProductSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(ProductSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Products correctly', () => {
    const mockName = 'notebook';
    const url = `${service.apiUrl}/products?name=${mockName}`;
    let result: Product[] = [];

    service.searchByName(mockName).subscribe((products) => (result = products));

    const request = httpMock.expectOne(url);
    request.flush(mockProducts);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockProducts);
  });
});
