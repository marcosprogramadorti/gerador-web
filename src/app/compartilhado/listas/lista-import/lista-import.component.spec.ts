import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaImportComponent } from './lista-import.component';

describe('ListaImportComponent', () => {
  let component: ListaImportComponent;
  let fixture: ComponentFixture<ListaImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
