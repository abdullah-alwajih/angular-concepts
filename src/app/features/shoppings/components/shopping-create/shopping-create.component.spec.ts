import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCreateComponent } from './shopping-create.component';

describe('ShoppingCreateComponent', () => {
  let component: ShoppingCreateComponent;
  let fixture: ComponentFixture<ShoppingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
