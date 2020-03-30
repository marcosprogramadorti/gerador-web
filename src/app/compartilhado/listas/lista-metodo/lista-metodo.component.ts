import { Component, OnInit, ViewChild } from '@angular/core';
import { IMetodo } from '../../modelos/IMetodo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UtilService } from '../../util.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogGenericoComponent } from '../../dialogos/dialog-generico/dialog-generico.component';
import { IModelo } from '../../modelos/IModelo';


@Component({
  selector: 'app-lista-metodo',
  templateUrl: './lista-metodo.component.html',
  styleUrls: ['./lista-metodo.component.scss']
})
export class ListaMetodoComponent implements OnInit {

  
  selecionado:IMetodo = branco;
  indice:number = -1;
  lista: MatTableDataSource<IMetodo>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  pageSize = 4;
  pageSizeOptions: number[] = [ 5, 10, 25, 100];

  pageEvent: PageEvent;
  
  constructor(private utilService: UtilService, public dialog: MatDialog) {
    this.lista = new MatTableDataSource(LISTA);
  }

  ngOnInit(): void {
    this.utilService.configuraPaginacao(this.lista, this.paginator, this.sort);
  }

  applyFilter(event: Event) {

    this.utilService.applyFilter(event, this.lista);

  }

  columnsToDisplay: string[] = ['idMetodo', 'descricao', 'acao'];
  
  
  abrirDiagolo(): void {

    const dialogRef = this.dialog.open(DialogGenericoComponent, {
      width: '650px',
      height:'450px',
      data: this.selecionado
    });

    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('reult',result);
      console.log(dialogRef.getState());
      if (result){
        let clone:IMetodo = this.clonar()
        if (this.indice >= 0){
          this.lista.data[this.indice]= (clone);
        }else{
          this.lista.data.push(clone);
        }
        
        
        this.lista._updateChangeSubscription();
        this.selecionado.descricao='';
        this.indice = -1;
      }
      
    });
  }

  private clonar(): IMetodo {
    return { idMetodo: this.selecionado.idMetodo, descricao: this.selecionado.descricao };
  }

  incioEditar(i:any, linha:IMetodo):void{
    console.log(i);
    console.log(linha);
    this.atualizarSelecionado(linha);
    this.indice = i;
    
    this.abrirDiagolo();
    
    
  }


  private atualizarSelecionado(linha: IMetodo) {
    this.selecionado.descricao = linha.descricao;
    this.selecionado.idMetodo = linha.idMetodo;
  }
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
const branco  = {idMetodo:undefined, descricao:''};
