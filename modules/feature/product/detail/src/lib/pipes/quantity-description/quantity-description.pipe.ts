import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityDescription',
  standalone: true,
  pure: true,
})
export class QuantityDescriptionPipe implements PipeTransform {
  transform(quantity: number): string {
    // eslint-disable-next-line no-console
    console.log('Chamou a Função QuantityDescriptionPipe()');
    if (quantity === 0) return 'Produto indisponível';
    if (quantity === 1)
      return 'Último produto em estoque. Corra antes que esgote!';

    return `${quantity} disponíveis`;
  }
}
