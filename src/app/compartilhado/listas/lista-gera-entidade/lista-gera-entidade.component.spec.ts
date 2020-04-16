import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGeraEntidadeComponent } from './lista-gera-entidade.component';

describe('ListaGeraEntidadeComponent', () => {
  let component: ListaGeraEntidadeComponent;
  let fixture: ComponentFixture<ListaGeraEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaGeraEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGeraEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
