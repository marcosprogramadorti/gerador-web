import { Component, OnInit, ViewChild} from '@angular/core';
import { ITImport } from '../../modelos/ITImport';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UtilService } from '../../util.service';

@Component({
  selector: 'app-lista-import',
  templateUrl: './lista-import.component.html',
  styleUrls: ['./lista-import.component.scss']
})


export class ListaImportComponent implements OnInit {
  lista: MatTableDataSource<ITImport>;
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

  columnsToDisplay: string[] = ['idImport', 'descricao', 'acao'];

}

const m1: ITImport = {
  idImport: 1,
  descricao: 'import javax.persistence.Entity;'
}
const m2: ITImport = {
  idImport: 2,
  descricao: 'import javax.persistence.Id;'
}





const LISTA: ITImport[] = [m1, m2];
