import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardComponent } from 'modules/ui/product/src/components/product-card.component';

@Directive({
  selector: '[libLog]',
  standalone: true,
})
export class LogDirective implements OnInit {
  @Input() id = '';
  @Output() doubleClick = new EventEmitter<void>();

  router = inject(Router);
  productCardComponent = inject(ProductCardComponent);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click', ['$event'])
  onClick(): void {
    // eslint-disable-next-line no-console
    console.log('Cliclou no CARD: ', this.id);
    //this.router.navigate(['product',this.id]);
    // eslint-disable-next-line no-console
    console.log(this.elementRef.nativeElement);
    this.router.navigate(['product', this.productCardComponent.product.id]);
  }

  @HostListener('dblclick', ['$event'])
  onDoubleClick(): void {
    this.doubleClick.emit();
  }
}
