import { ProductSearchService, mockProducts } from 'product-data-access';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';

@Component({
  selector: 'lib-product-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent implements OnInit {
  control = new FormControl('', { nonNullable: true });
  products$!: Observable<Product[]>; //products = mockProducts;

  constructor(private productSearchService: ProductSearchService) {}

  ngOnInit(): void {
    this.products$ = this.control.valueChanges.pipe(
      // Colocar os Operadores
      debounceTime(400),
      distinctUntilChanged(),
      filter((value) => value.length > 1),
      switchMap((value) => this.productSearchService.searchByName(value))
      //map((value) => `VALOR TRANSFORMADO: ${value}`)
    ); //.subscribe( value => console.log(value));
  }
}
