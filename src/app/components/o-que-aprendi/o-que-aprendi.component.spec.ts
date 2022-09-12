import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OQueAprendiComponent } from './o-que-aprendi.component';

describe('OQueAprendiComponent', () => {
  let component: OQueAprendiComponent;
  let fixture: ComponentFixture<OQueAprendiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OQueAprendiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OQueAprendiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
