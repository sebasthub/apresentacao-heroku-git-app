import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerokuApresentacaoComponent } from './heroku-apresentacao.component';

describe('HerokuApresentacaoComponent', () => {
  let component: HerokuApresentacaoComponent;
  let fixture: ComponentFixture<HerokuApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerokuApresentacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerokuApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
