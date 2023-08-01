import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitiveComponent } from './primitive.component';

describe('PrimitiveComponent', () => {
  let component: PrimitiveComponent;
  let fixture: ComponentFixture<PrimitiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimitiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
