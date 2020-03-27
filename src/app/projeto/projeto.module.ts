import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProjetoComponent } from './lista-projeto/lista-projeto.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ListaProjetoComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
    
  ]
})
export class ProjetoModule { }
