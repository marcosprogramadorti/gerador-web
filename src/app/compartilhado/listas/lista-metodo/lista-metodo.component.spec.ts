import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMetodoComponent } from './lista-metodo.component';

describe('ListaMetodoComponent', () => {
  let component: ListaMetodoComponent;
  let fixture: ComponentFixture<ListaMetodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMetodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
