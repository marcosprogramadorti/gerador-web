import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArquivoComponent } from './form-arquivo.component';

describe('FormArquivoComponent', () => {
  let component: FormArquivoComponent;
  let fixture: ComponentFixture<FormArquivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArquivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
