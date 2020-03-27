import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IProjeto } from '../../compartilhado/modelos/IProjeto';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UtilService } from '../../compartilhado/util.service';

@Component({
  selector: 'app-lista-projeto',
  templateUrl: './lista-projeto.component.html',
  styleUrls: ['./lista-projeto.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListaProjetoComponent implements OnInit {
  projetos: MatTableDataSource<IProjeto>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  pageSize = 4;
  pageSizeOptions: number[] = [2, 5, 10, 25, 100];

  pageEvent: PageEvent;


  constructor(private utilService: UtilService) {
    this.projetos = new MatTableDataSource(PROJETOS);
  }

  ngOnInit(): void {
    this.utilService.configuraPaginacao(this.projetos, this.paginator, this.sort);
  }

  applyFilter(event: Event) {

    this.utilService.applyFilter(event, this.projetos);

  }

  columnsToDisplay: string[] = ['nome', 'modelo.nome', 'acao'];


}


const p1: IProjeto = {
  idProjeto: 1,
  grupoId: 'ALCANCE DIGITAL',
  artifactIdartifactId: 'SGT',
  versao: '0.0.1',
  embalagem: 'JAR',
  autor: 'Marcos',
  nome: 'Sistema Gerenciamento de Transportes',
  descricao: 'Sistema de Gerenciamento de Transporte ou Sistema de Gestão de Transporte e Logística, é um software para melhoria da qualidade e produtividade de todo o processo de distribuição. Este sistema permite controlar toda a operação e gestão de transportes de forma integrada. Wikipédia',
  entidades: [],
  propriedades: [],
  modelo: {
    idModelo: 1,
    nome: 'M-SGT',
    arquivos: []
  }
}
const p3: IProjeto = {
  idProjeto: 1,
  grupoId: 'ALCANCE DIGITAL',
  artifactIdartifactId: 'SGT',
  versao: '0.0.1',
  embalagem: 'JAR',
  autor: 'Marcos',
  nome: 'Sistema Gerenciamento de Transportes',
  descricao: 'Sistema de Gerenciamento de Transporte ou Sistema de Gestão de Transporte e Logística, é um software para melhoria da qualidade e produtividade de todo o processo de distribuição. Este sistema permite controlar toda a operação e gestão de transportes de forma integrada. Wikipédia',
  entidades: [],
  propriedades: [],
  modelo: {
    idModelo: 1,
    nome: 'M-SGT',
    arquivos: []
  }
}
const p2: IProjeto = {
  idProjeto: 1,
  grupoId: 'ALCANCE DIGITAL',
  artifactIdartifactId: 'SGC',
  versao: '0.0.1',
  embalagem: 'WAR',
  autor: 'Marcos',
  nome: 'Sistema de Gerenciamento Contabil',
  descricao: 'Não importa o tamanho do seu escritório, temos a solução certa para otimizar seus processos.',
  entidades: [],
  propriedades: [],
  modelo: {
    idModelo: 1,
    nome: 'M-SGC',
    arquivos: []
  }
}
const p4: IProjeto = {
  idProjeto: 1,
  grupoId: 'ALCANCE DIGITAL',
  artifactIdartifactId: 'SGC',
  versao: '0.0.1',
  embalagem: 'WAR',
  autor: 'Marcos',
  nome: 'Sistema de Gerenciamento Contabil',
  descricao: 'Não importa o tamanho do seu escritório, temos a solução certa para otimizar seus processos.',
  entidades: [],
  propriedades: [],
  modelo: {
    idModelo: 1,
    nome: 'M-SGC',
    arquivos: []
  }
}
const p5: IProjeto = {
  idProjeto: 1,
  grupoId: 'ALCANCE DIGITAL',
  artifactIdartifactId: 'SGC',
  versao: '0.0.1',
  embalagem: 'WAR',
  autor: 'Marcos',
  nome: 'Sistema de Gerenciamento Contabil',
  descricao: 'Não importa o tamanho do seu escritório, temos a solução certa para otimizar seus processos.',
  entidades: [],
  propriedades: [],
  modelo: {
    idModelo: 1,
    nome: 'M-SGC',
    arquivos: []
  }
}
const p6: IProjeto = {
  idProjeto: 1,
  grupoId: 'ALCANCE DIGITAL',
  artifactIdartifactId: 'SGC',
  versao: '0.0.1',
  embalagem: 'WAR',
  autor: 'Marcos',
  nome: 'Sistema de Gerenciamento Contabil',
  descricao: 'Não importa o tamanho do seu escritório, temos a solução certa para otimizar seus processos.',
  entidades: [],


  propriedades: [],
  modelo: {
    idModelo: 1,
    nome: 'M-SGC',
    arquivos: []
  }
}
const PROJETOS: IProjeto[] = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6
]


