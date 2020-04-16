import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeraEntidadeComponent } from './form-gera-entidade.component';

describe('FormGeraEntidadeComponent', () => {
  let component: FormGeraEntidadeComponent;
  let fixture: ComponentFixture<FormGeraEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeraEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeraEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
