import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IGenericoDados } from './IGenericoDados';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  configuraPaginacao(dados: MatTableDataSource<IGenericoDados>, paginator: MatPaginator, sort: MatSort) {
    dados.paginator = paginator;
    dados.sort = sort;
  }

  applyFilter(event: Event, dados: MatTableDataSource<IGenericoDados>) {
    const filterValue = (event.target as HTMLInputElement).value;
    dados.filter = filterValue.trim().toLowerCase();

    if (dados.paginator) {
      dados.paginator.firstPage();
    }
  }
}
