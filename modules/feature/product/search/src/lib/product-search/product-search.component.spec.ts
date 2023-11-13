import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { ProductSearchComponent } from './product-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductSearchService, mockProducts } from 'product-data-access';
import { of } from 'rxjs';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;
  let productSearchService: ProductSearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductSearchComponent,
        NoopAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: ProductSearchService,
          userValue: { searchByName: () => of(mockProducts) },
        },
      ],
    }).compileComponents();

    productSearchService = TestBed.inject(ProductSearchService);
    fixture = TestBed.createComponent(ProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce when input field is changed', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    expect(productSearchService.searchByName).not.toHaveBeenCalled();
    tick(500);
    expect(productSearchService.searchByName).toHaveBeenCalled();
  }));

  it('should search multiple times', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'tv';
    input.dispatchEvent(new Event('input'));
    tick(500);

    input.value = 'felipeLuna';
    input.dispatchEvent(new Event('input'));
    tick(500);
    expect(productSearchService.searchByName).toHaveBeenCalledTimes(2);
  }));

  it('should prevent identical submissions', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'tv';
    input.dispatchEvent(new Event('input'));
    tick(500);

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));
    tick(500);
    expect(productSearchService.searchByName).toHaveBeenCalledTimes(1);
  }));

  it('should prevent empty submissions', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = '';
    input.dispatchEvent(new Event('input'));
    tick(500);
    expect(productSearchService.searchByName).not.toHaveBeenCalled();
  }));
  it('should return products observable correctly', () => {
    component.products$.subscribe((result) => {
      expect(result).toEqual(mockProducts);
    });
  });
});
