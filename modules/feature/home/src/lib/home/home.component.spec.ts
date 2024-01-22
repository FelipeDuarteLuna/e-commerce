import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RecommendedProductsService, mockProducts } from 'product-data-access';
import { of } from 'rxjs';
import { ProductCardComponent } from 'product-ui';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
      declarations: [HomeComponent],
      providers: [
        {
          provide: RecommendedProductsService,
          useValue: { getProducts: () => of(mockProducts) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeTruthy();
  });

  it('should render product cards correctly', () => {
    const cards: HTMLElement[] =
      fixture.nativeElement.querySelectorAll('lib-product-card');
    expect(cards.length).toBe(mockProducts.length);
  });
});
