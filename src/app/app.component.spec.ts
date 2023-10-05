import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from 'modules/layout';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LayoutModule],
      declarations: [AppComponent, NxWelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome ecommerce'
    );
  });

  it(`should have as title 'ecommerce'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ecommerce');
  });

  it(`${AppComponent.prototype.title} - Should contain header.`,() =>{
    const header: HTMLHeadingElement = fixture.nativeElement.querySelector('header');
    expect(header).toBeTruthy();
  })
  
});
