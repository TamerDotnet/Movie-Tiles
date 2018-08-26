import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviewviewerAppComponent } from './moviewviewer-app.component';

describe('MoviewviewerAppComponent', () => {
  let component: MoviewviewerAppComponent;
  let fixture: ComponentFixture<MoviewviewerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviewviewerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviewviewerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
