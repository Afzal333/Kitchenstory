import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KichenitemsdupliComponent } from './kichenitemsdupli.component';

describe('KichenitemsdupliComponent', () => {
  let component: KichenitemsdupliComponent;
  let fixture: ComponentFixture<KichenitemsdupliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KichenitemsdupliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KichenitemsdupliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
