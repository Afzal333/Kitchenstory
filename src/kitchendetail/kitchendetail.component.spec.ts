import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchendetailComponent } from './kitchendetail.component';

describe('KitchendetailComponent', () => {
  let component: KitchendetailComponent;
  let fixture: ComponentFixture<KitchendetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchendetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchendetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
