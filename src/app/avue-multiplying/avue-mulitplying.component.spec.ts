import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvueMultiplyingComponent } from './avue-mulitplying.component';

describe('AvueMultiplyingComponent', () => {
  let component: AvueMultiplyingComponent;
  let fixture: ComponentFixture<AvueMultiplyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvueMultiplyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvueMultiplyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
