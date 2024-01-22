import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-cart',
  standalone: true,
  imports: [CommonModule, MatBadgeModule, MatIconModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input() quantity!: number | null;
}
