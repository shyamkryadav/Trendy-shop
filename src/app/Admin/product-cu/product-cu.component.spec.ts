import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCUComponent } from './product-cu.component';

describe('ProductCUComponent', () => {
  let component: ProductCUComponent;
  let fixture: ComponentFixture<ProductCUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
