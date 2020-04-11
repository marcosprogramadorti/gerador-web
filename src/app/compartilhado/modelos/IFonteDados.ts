import { MatTableDataSource } from '@angular/material/table';
import { IApagavel } from './IApagavel';
export interface IFonteDados<T>  {
    lista: MatTableDataSource<T>;
    selecionado: T;
    indice: number;
}
