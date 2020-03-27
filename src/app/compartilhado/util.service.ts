import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IGenericoDadsos } from './IGenericoDadsos';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  configuraPaginacao(dados: MatTableDataSource<IGenericoDadsos>, paginator: MatPaginator, sort: MatSort) {
    dados.paginator = paginator;
    dados.sort = sort;
  }

  applyFilter(event: Event, dados: MatTableDataSource<IGenericoDadsos>) {
    const filterValue = (event.target as HTMLInputElement).value;
    dados.filter = filterValue.trim().toLowerCase();

    if (dados.paginator) {
      dados.paginator.firstPage();
    }
  }
}
