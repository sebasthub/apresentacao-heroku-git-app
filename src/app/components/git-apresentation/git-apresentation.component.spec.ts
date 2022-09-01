import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitApresentationComponent } from './git-apresentation.component';

describe('GitApresentationComponent', () => {
  let component: GitApresentationComponent;
  let fixture: ComponentFixture<GitApresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitApresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitApresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
