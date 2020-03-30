import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCodeDataComponent } from './form-code-data.component';

describe('FormCodeDataComponent', () => {
  let component: FormCodeDataComponent;
  let fixture: ComponentFixture<FormCodeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCodeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCodeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
