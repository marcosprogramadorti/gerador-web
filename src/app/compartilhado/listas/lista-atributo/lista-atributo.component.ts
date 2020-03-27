import { Component, OnInit, ViewChild } from '@angular/core';
import { IAtributo } from '../../modelos/IAtributo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UtilService } from '../../util.service';

@Component({
  selector: 'app-lista-atributo',
  templateUrl: './lista-atributo.component.html',
  styleUrls: ['./lista-atributo.component.scss']
})
export class ListaAtributoComponent implements OnInit {

  lista: MatTableDataSource<IAtributo>;
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

  columnsToDisplay: string[] = ['nome', 'tipo', 'acao'];

}

const a1:IAtributo = {
  idAtributo:1,
  modificador:'public',
  nome:'cpf',
  nomeColumn:'nrCpf',
  obrigatorio:'S',
  tamanho:11,
  tipo:'String',
  tipoId:null,
}
const a2:IAtributo = {
  idAtributo:2,
  modificador:'public',
  nome:'cep',
  nomeColumn:'nrCep',
  obrigatorio:'S',
  tamanho:8,
  tipo:'String',
  tipoId:null,
}
const LISTA:IAtributo[]=[a1,a2];