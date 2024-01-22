import {
  CartService,
  Product,
  ProductSearchService,
} from 'product-data-access';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { ProductCardComponent } from 'product-ui';
import { MatButtonModule } from '@angular/material/button';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';

function getParamsId(): Observable<string> {
  return inject(ActivatedRoute).params.pipe(map((params) => params['id']));
}

@Component({
  selector: 'lib-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    MatButtonModule,
    QuantityDescriptionPipe,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  constructor(
    private productSearchService: ProductSearchService,
    public cartService: CartService
  ) {}

  product$: Observable<Product> = getParamsId().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );

  getQuantityDescription(quantity: number): string {
    // eslint-disable-next-line no-console
    console.log('Chamou a Função getQuantityDescription()');
    if (quantity === 0) return 'Produto indisponível';
    if (quantity === 1)
      return 'Último produto em estoque. Corra antes que esgote!';

    return `${quantity} disponíveis`;
  }
}
