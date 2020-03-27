import { Component, OnInit, ViewChild } from '@angular/core';
import { IMetodo } from '../../modelos/IMetodo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UtilService } from '../../util.service';

@Component({
  selector: 'app-lista-metodo',
  templateUrl: './lista-metodo.component.html',
  styleUrls: ['./lista-metodo.component.scss']
})
export class ListaMetodoComponent implements OnInit {

  lista: MatTableDataSource<IMetodo>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  pageSize = 4;
  pageSizeOptions: number[] = [2, 5, 10, 25, 100];

  pageEvent: PageEvent;


  constructor(private utilService: UtilService) {
    this.lista = new MatTableDataSource(LISTA);
  }

  ngOnInit(): void {
    this.utilService.configuraPaginacao(this.lista, this.paginator, this.sort);
  }

  applyFilter(event: Event) {

    this.utilService.applyFilter(event, this.lista);

  }

  columnsToDisplay: string[] = ['idMetodo', 'descricao', 'acao'];

}

const m1: IMetodo = {
  idMetodo: 1,
  descricao: 'public Long getIdMetodo() { return idMetodo;	}'
}
const m2: IMetodo = {
  idMetodo: 2,
  descricao: 'public void setIdMetodo(Long idMetodo) {		this.idMetodo = idMetodo;	}'
}
const LISTA: IMetodo[] = [m1, m2];
