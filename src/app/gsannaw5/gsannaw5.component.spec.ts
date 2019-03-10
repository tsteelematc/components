import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gsannaw5Component } from './gsannaw5.component';

describe('Gsannaw5Component', () => {
  let component: Gsannaw5Component;
  let fixture: ComponentFixture<Gsannaw5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gsannaw5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gsannaw5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
