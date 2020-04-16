import { Component, OnInit, ViewChild } from '@angular/core';
import { IFonteDados } from '../../modelos/IFonteDados';
import { IMetodo } from '../../modelos/IMetodo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UtilService } from '../../util.service';
import { BancoService } from '../../banco.service';
import { DialogGeraEntidadeComponent } from '../../dialogos/dialog-gera-entidade/dialog-gera-entidade.component';
import { DialogGenericoComponent } from '../../dialogos/dialog-generico/dialog-generico.component';

@Component({
  selector: 'app-lista-gera-entidade',
  templateUrl: './lista-gera-entidade.component.html',
  styleUrls: ['./lista-gera-entidade.component.scss']
})
export class ListaGeraEntidadeComponent implements OnInit {

  f: IFonteDados<IMetodo> = {
    selecionado: {} as IMetodo,
    lista: new MatTableDataSource(),
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
    this.bancoService.abrirDialogo<IMetodo>(this.f, DialogGeraEntidadeComponent);
  }

  incioEditar(i: any, linha: IMetodo): void {
    this.bancoService.incioEditar<IMetodo>(this.f, i, linha)
    this.abrirDiagolo();
  }
  excluir(i: number): void {
    this.bancoService.excluir<IMetodo>(this.f, i);
  }

}






