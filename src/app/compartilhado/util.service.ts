import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IGenericoDados } from './IGenericoDados';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2'
import { Observable, of } from 'rxjs';
import { IFonteDados } from './modelos/IFonteDados';


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

  mensagemConfirma(msg:string, funcaoConfirmada:()=>void ) :any{
    Swal.fire({
      title: msg,
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apagar isso!',
      cancelButtonText:'Cancelar'
    }).then(r=>{
      if (r.value){
        funcaoConfirmada();
      }
    });
  }

}



