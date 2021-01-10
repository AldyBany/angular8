import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInfosComponent } from './e-infos.component';

describe('EInfosComponent', () => {
  let component: EInfosComponent;
  let fixture: ComponentFixture<EInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
