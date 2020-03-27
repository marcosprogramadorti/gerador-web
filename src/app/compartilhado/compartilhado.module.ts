import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { UtilService } from './util.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormArquivoComponent } from './forms/form-arquivo/form-arquivo.component';
import { ListaAtributoComponent } from './listas/lista-atributo/lista-atributo.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ListaMetodoComponent } from './listas/lista-metodo/lista-metodo.component';

@NgModule({
  declarations: [FormArquivoComponent, ListaAtributoComponent, ListaMetodoComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule
    

  ],
  exports: [],
  providers: [UtilService],
})
export class CompartilhadoModule { }
