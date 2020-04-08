import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IGenericoDados } from './IGenericoDados';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2'


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

  mensagemConfirma(){
    return MESN;
  }

  

}

OBJ_MENSAGEM_CONFI = {
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
};
const MESN = Swal.fire(OBJ_MENSAGEM_CONFI).then((result) => {
  if (result.value) {

  }
});





