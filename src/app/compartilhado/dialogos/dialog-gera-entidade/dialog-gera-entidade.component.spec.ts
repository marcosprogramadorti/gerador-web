import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGeraEntidadeComponent } from './dialog-gera-entidade.component';

describe('DialogGeraEntidadeComponent', () => {
  let component: DialogGeraEntidadeComponent;
  let fixture: ComponentFixture<DialogGeraEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogGeraEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGeraEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
