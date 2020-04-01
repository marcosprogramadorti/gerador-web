import { MatTableDataSource } from '@angular/material/table';
export interface IFonteDados<T> {
    lista: MatTableDataSource<T>;
    selecionado: T;
    indice: number;
}
