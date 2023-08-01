import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESignStampCountComponent } from './e-sign-stamp-count.component';

describe('ESignStampCountComponent', () => {
  let component: ESignStampCountComponent;
  let fixture: ComponentFixture<ESignStampCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESignStampCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESignStampCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
