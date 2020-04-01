import { Component, OnInit, ViewChild } from '@angular/core';
import { IMetodo } from '../../modelos/IMetodo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UtilService } from '../../util.service';
import { IFonteDados } from '../../modelos/IFonteDados';
import { BancoService } from '../../banco.service';


@Component({
  selector: 'app-lista-metodo',
  templateUrl: './lista-metodo.component.html',
  styleUrls: ['./lista-metodo.component.scss']
})
export class ListaMetodoComponent implements OnInit {

  f: IFonteDados<IMetodo> = {
    selecionado: {} as IMetodo,
    lista: new MatTableDataSource(LISTA),
    indice: -1

  } as IFonteDados<IMetodo>;



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  constructor(private utilService: UtilService, public bancoService: BancoService) {

  }
  columnsToDisplay: string[] = ['idMetodo', 'descricao', 'acao'];

  ngOnInit(): void {
    this.utilService.configuraPaginacao(this.f.lista, this.paginator, this.sort);
  }

  applyFilter(event: Event) {
    this.utilService.applyFilter(event, this.f.lista);
  }

  abrirDiagolo(): void {
    this.bancoService.abrirDialogo<IMetodo>(this.f);
  }

  incioEditar(i: any, linha: IMetodo): void {
    this.bancoService.incioEditar<IMetodo>(this.f, i, linha)
    this.abrirDiagolo();
  }
  excluir(i: number): void {
    this.bancoService.excluir<IMetodo>(this.f, i);
  }

}

/**
 * MOKUP
 * **/
const m1: IMetodo = {
  idMetodo: 1,
  descricao: 'public Long getIdMetodo() { return idMetodo;	}'
}
const m2: IMetodo = {
  idMetodo: 2,
  descricao: 'public void setIdMetodo(Long idMetodo) {		this.idMetodo = idMetodo;	}'
}
const LISTA: IMetodo[] = [m1, m2];


